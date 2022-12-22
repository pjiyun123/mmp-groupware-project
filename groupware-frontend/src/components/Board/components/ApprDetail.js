import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import baseUrl from "./../../../assets/baseUrl";
import { useNavigate } from "react-router-dom";
import Modal from "../../Common/Modal";
import classes from "../styles/ApprDetail.module.css";

const ApprDetail = () => {
  let { no } = useParams();
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const userInfo = JSON.parse(user);

  const [isLoading, setIsLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const [fileDetail, setFileDetail] = useState();
  const [atcNo, setAtcNo] = useState();
  const [file, setFile] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getUrl = baseUrl + "/approval/" + no;
  const patchUrl = baseUrl + "/approval/" + detail.userNo + "/" + no;
  const fileDetailUrl = baseUrl + "/approval/" + no + "/atc";
  const fileUrl = baseUrl + "/approval/" + no + "/atc/" + atcNo + "/download";
  const deleteUrl = baseUrl + "/approval/" + no;

  useEffect(() => {
    axios({
      method: "get",
      url: getUrl,
    }).then((response) => {
      setDetail(response.data);
    });

    axios({
      method: "get",
      url: fileDetailUrl,
      // responseType: 'blob'
    }).then((response) => {
      // setFile(response);
      //console.log(response.data)
      setFileDetail(response.data[0]);
      setAtcNo(response.data[0].atcNo);
    });
    if (atcNo !== undefined) {
      axios({
        method: "get",
        url: baseUrl + "/approval/" + no + "/atc/" + atcNo + "/download",
        responseType: "blob",
      }).then((response) => {
        //console.log(response)
        //console.log(response.data)
        //setFile(response);

        const blob = new Blob([response.data]);

        //const fileUrl = window.URL.createObjectURL(blob);

        const newFile = new File([blob], fileDetail.atcOriName);
        //const fileUrl = window.URL.createObjectURL(newFile);
        setFile(newFile);
      });
    }

    // axios({
    // 	method: "get",
    // 	url: fileDetailUrl,
    // 	responseType: 'blob'
    // }).then((response) => {
    // 	// setFile(response);
    // 	//console.log(response.data)
    // 	console.log(response);
    // 	setFile(response);
    // 	// setAtcNo(response.data[0].atcNo);
    // });
    // axios({
    // 	method: "get",
    // 	url: fileUrl,
    // 	responseType: 'file'
    // }).then((response) => {
    // 	console.log(response)
    // 	console.log(response.data)
    // 	setFile(response);
    // })
  }, [no, getUrl, fileUrl, isLoading, atcNo, fileDetailUrl]);

  const onModify = () => {
    navigate("");
  };

  const onDelete = () => {
    axios({
      method: "delete",
      url: deleteUrl,
    }).then(() => {
      setIsModalOpen(false);
      navigate("/appr");
    });
  };

  const onDownload = () => {
    //console.log(atcNo);
    axios({
      method: "get",
      url: fileUrl,
      responseType: "blob",
    }).then((response) => {
      console.log(response);
      console.log(response.data);
      setFile(response);

      const blob = new Blob([response.data]);

      const downloadUrl = window.URL.createObjectURL(blob);

      const newFile = new File([blob], fileDetail.atcOriName);
      //const downloadUrl = window.URL.createObjectURL(newFile);

      console.log(newFile);
      console.log(downloadUrl);

      const link = document.createElement("a");
      link.href = downloadUrl;
      //link.href = response.data;
      link.style.display = "none";
      //console.log(response.header);

      const injectFilename = (res) => {
        const disposition = res.headers["content-disposition"];

        const fileName = fileDetail.atcOriName;

        return fileName;
      };
      link.download = injectFilename(response);

      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(downloadUrl);
      //window.URL.revokeObjectURL(response.data);
    });
  };

  const onApprove = () => {
    let formData = new FormData();
    const postData = {
      apprYn: "Yes",
    };
    formData.append(
      "avl",
      new Blob([JSON.stringify(postData)], { type: "application/json" })
    );

    formData.append("files", file);
    console.log(formData.get("files"));
    axios({
      method: "patch",
      url: patchUrl,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then(() => {
      alert("승인 완료하였습니다.");
      navigate("/appr");
    });
  };

  const onReject = () => {
    let formData = new FormData();
    const postData = {
      apprYn: "No",
    };
    formData.append(
      "avl",
      new Blob([JSON.stringify(postData)], { type: "application/json" })
    );
    formData.append("files", file);
    console.log(formData.get("files"));
    axios({
      method: "patch",
      url: patchUrl,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then(() => {
      alert("반려 완료하였습니다.");
      navigate("/appr");
    });
  };

  return (
    <>
      <div className={classes.container}>
        <h2 className={classes.tit}>
          {detail.afNm}
          {detail.apprYn === "Wait" &&
          (userInfo[0].userNo === detail.apNo ||
            userInfo[0].userNo === detail.userNo) ? (
            <>
              {userInfo[0].userNo === detail.userNo ? (
                <>
                  <button className={classes.btn} onClick={onModify}>
                    수정
                  </button>
                  <button
                    className={classes.btn}
                    onClick={() => setIsModalOpen(true)}
                  >
                    삭제
                  </button>
                </>
              ) : null}

              {userInfo[0].userNo === detail.apNo ? (
                <>
                  <button className={classes.btn} onClick={onApprove}>
                    결재
                  </button>
                  <button className={classes.btn} onClick={onReject}>
                    반려
                  </button>
                </>
              ) : null}
            </>
          ) : null}
        </h2>
        <br />
        <div className={classes.infos}>
          <span className={classes.name}>결재 담당자 : {detail.apNm}</span>
          <span className={classes.date}>
            {detail.createDt ? detail.createDt.slice(0, 10) : null}
          </span>
        </div>
        <div className={classes.btnContainer}>
          <button className={classes.dlbtn} onClick={onDownload}>
            첨부파일 다운로드
          </button>
        </div>
        {isModalOpen ? (
          <Modal onCancel={onDelete} onConfirm={() => setIsModalOpen(false)} />
        ) : null}
      </div>
    </>
  );
};

export default ApprDetail;
