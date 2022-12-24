import React, { useRef, useState, useEffect } from "react";
import SaveButton from "./components/SaveButton";
import axios from "axios";
import baseUrl from "../../assets/baseUrl";
import { useNavigate } from "react-router-dom";
import apprTypes from "../../assets/apprTypes";
import WritingDropdown from "./components/WritingDropdown";
import DropdownInput from "../Employees/components/DropdownInput";
import useDidMountEffect from "./../../hooks/useDidMountEffect";
import classes from "./styles/WritingContainer.module.css";

const WritingContainer = ({ menuType }) => {
  const navigate = useNavigate();

  const titleRef = useRef();
  const contentRef = useRef();
  const fileRef = useRef();
  const [afType, setAfType] = useState([]);
  const [enteredType, setEnteredType] = useState();
  const [enteredFile, setEnteredFile] = useState();

  useEffect(() => {
    setAfType([]);
    if (menuType !== "업무일지") {
      axios({
        method: "get",
        url: baseUrl + "/apprform/list",
      }).then((response) => {
        let types = [];
        response.data.map((res) =>
          //setAfType((type) => type.concat({ id: res.afNo, value: res.afNm }))
          types.push({ id: res.afNo, value: res.afNm })
        );
        setAfType(types);
        setEnteredType(types[0].id);
      });
    }
  }, [menuType]);

  const onWriting = (e) => {
    e.preventDefault();

    const enteredTitle = titleRef.current.value;
    const enteredContent = contentRef.current.value;
  
    if (menuType !== "업무일지") {
     setEnteredFile(fileRef.current.files[0]);
    }
      
    let formData = new FormData();

    const writingType =
      menuType === "업무일지" ? "/businesslog/" : "/approval/";
    const user = localStorage.getItem("user");
    const userInfo = JSON.parse(user);
    const url = baseUrl + writingType + userInfo[0].userNo;
    const postData =
      menuType === "업무일지"
        ? {
            blTit: enteredTitle,
            blContent: enteredContent,
          }
        : {
            afNo: enteredType,
            avlTit: enteredTitle,
            avlContent: enteredContent,
          };
    
    if (menuType !== "업무일지") {
      formData.append(
        "avl",
        new Blob([JSON.stringify(postData)], { type: "application/json" })
      );
      formData.append("files", enteredFile);
      axios({
        method: "post",
        url: url,
        headers: { "Content-Type": "multipart/form-data" },
        data: formData,
      }).then((response) => {
        alert("결재 신청이 완료되었습니다.");
        navigate("/appr/my");
      });
    }
    else {
      axios({
        method: "post",
        url: url,
        data: postData,
      }).then((response) => {
          alert("업무일지가 등록되었습니다.")
          navigate("/businesslog");
      });
    }
    
  };

  return (
    <div className={classes.container}>
      <h2>
        {menuType === "업무일지" ? "업무일지 목록" : "보고/결재"} {" >"}{" "}
        {menuType} {menuType === "업무일지" ? "작성" : "신청"}
      </h2>
      <form onSubmit={onWriting}>
        <table className={classes.writeTable}>
          {menuType === "업무일지" ? null : (
            <tbody className={classes.writeRow}>
              <tr>
                <td className={classes.writeType}>결재 종류</td>
                <td>
                  <DropdownInput
                    dropdownList={afType}
                    setSelectedDropValue={setEnteredType}
                  />
                </td>
              </tr>
            </tbody>
          )}
          <tbody>
            <tr>
              <td className={classes.writeType}>제목</td>
              <td>
                <input
                  className={classes.inputWindow}
                  type="text"
                  ref={titleRef}
                  placeholder="제목을 입력하세요."
                />
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className={classes.writeType}>내용</td>
              <td>
                <textarea
                  className={`${classes.inputWindow} ${classes.writearea}`}
                  type="text"
                  ref={contentRef}
                  placeholder="내용을 입력하세요."
                />
              </td>
            </tr>
          </tbody>
          {menuType === "업무일지" ? null : (
            <tbody>
              <tr>
                <td className={classes.writeType}>첨부파일</td>
                <td>
                  <input
                    className={classes.fileInput}
                    type="file"
                    ref={fileRef}
                  />
                </td>
              </tr>
            </tbody>
          )}
        </table>
        <SaveButton />
      </form>
    </div>
  );
};

export default WritingContainer;
