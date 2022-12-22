import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import baseUrl from "./../../../assets/baseUrl";
import { useNavigate } from "react-router-dom";
import Modal from "../../Common/Modal";
import classes from "../styles/BusinesslogDetail.module.css";

const BusinesslogDetail = () => {
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

  const getUrl = baseUrl + "/businesslog/" + no;
  const fileDetailUrl = baseUrl + "/businesslog/" + no + "/atc";
  const fileUrl =
    baseUrl + "/businesslog/" + no + "/atc/" + atcNo + "/download";
  const deleteUrl = baseUrl + "/businesslog/" + no;

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
      //responseType: "blob",
    }).then((response) => {
      setFileDetail(response.data[0]);
      setAtcNo(response.data[0].atcNo);
    });
  }, [no, getUrl, fileUrl, isLoading]);

  const onModify = () => {
    navigate("");
  };

  const onDelete = () => {
    axios({
      method: "delete",
      url: deleteUrl,
    }).then(() => {
      setIsModalOpen(false);
      navigate("/businesslog");
    });
  };

  const onDownload = () => {
    axios({
      method: "get",
      url: fileUrl,
      responseType: "blob",
    }).then((response) => {
      setFile(response);

      const blob = new Blob([response.data]);
      const newFile = new File([blob], fileDetail.atcOriName);
      setFile(newFile);

      //const fileUrl = window.URL.createObjectURL(response.data);
      /*    const downloadUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = downloadUrl;
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
      window.URL.revokeObjectURL(fileUrl); */
    });
  };

  return (
    <>
      <div className={classes.container}>
        <h2 className={classes.tit}>
          {detail.blTit}
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
        </h2>
        <br />
        <div className={classes.infos}>
          <span className={classes.name}>{detail.userNm}</span>
          <span className={classes.date}>
            {detail.createDt ? detail.createDt.slice(0, 10) : null}
          </span>
        </div>
        <div className={classes.content}>{detail.blContent}</div>
        <div className={classes.btnContainer}>
          <button className={classes.dlbtn} onClick={onDownload}>
            첨부파일 다운로드
          </button>
        </div>
      </div>
      {userInfo[0].userNo === detail.userNo ? (
        <div>
          {isModalOpen ? (
            <Modal
              onCancel={onDelete}
              onConfirm={() => setIsModalOpen(false)}
            />
          ) : null}
        </div>
      ) : null}
    </>
  );
};

export default BusinesslogDetail;
