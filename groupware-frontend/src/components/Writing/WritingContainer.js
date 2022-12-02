import React, { useRef, useState } from "react";
import SaveButton from "./components/SaveButton";
import axios from "axios";
import baseUrl from "../../assets/baseUrl";
import { useNavigate } from "react-router-dom";
import apprTypes from "../../assets/apprTypes";
import WritingDropdown from "./components/WritingDropdown";

const WritingContainer = ({ menuType }) => {
  const navigate = useNavigate();

  const titleRef = useRef();
  const contentRef = useRef();
  const fileRef = useRef();
  const [enteredManager, setEnteredManager] = useState(apprTypes[0].manager);

  const onWriting = (e) => {
    e.preventDefault();

    const enteredTitle = titleRef.current.value;
    const enteredContent = contentRef.current.value;
    const enteredFile = fileRef.current.files[0];

    let formData = new FormData();

    const writingType =
      menuType === "업무일지" ? "/businesslog/" : "/apprform/";
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
            afNm: enteredTitle,
            apNo: enteredManager,
          };
    
    formData.append("bl", new Blob([JSON.stringify(postData)], {type: "application/json"}));
    formData.append("files", enteredFile);

    axios({
      method: "post",
      url: url,
      headers: { "Content-Type": "multipart/form-data", },
      data: formData,
    }).then((response) => {
      console.log(response);
      menuType === "업무일지"
        ? alert("업무일지가 등록되었습니다.")
        : alert("결재 신청이 완료되었습니다.");
      menuType === "업무일지" ? navigate("/businesslog") : navigate("/appr");
    });
  };

  return (
    <div>
      <span>
        {menuType === "업무일지" ? "업무일지 목록" : "보고/결재"} {">"}{" "}
        {menuType} {menuType === "업무일지" ? "작성" : "신청"}
      </span>
      <form onSubmit={onWriting}>
        <table>
          {menuType === "업무일지" ? null : (
            <tbody>
              <tr>
                <td>결재 종류</td>
                <td></td>
              </tr>
            </tbody>
          )}
          <tbody>
            <tr>
              <td>제목</td>
              <td>
                <input type="text" ref={titleRef} />
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>내용</td>
              <td>
                <textarea type="text" ref={contentRef} />
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>첨부파일</td>
              <td>
                <input type="file" name="attachedFile" ref={fileRef} />
              </td>
            </tr>
          </tbody>
          {menuType === "업무일지" ? null : (
            <tbody>
              <tr>
                <td>결재자</td>
                <td>
                  <WritingDropdown
                    dropdownList={apprTypes}
                    setSelectedDropValue={setEnteredManager}
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
