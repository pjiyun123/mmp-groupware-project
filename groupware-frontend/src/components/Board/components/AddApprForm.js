import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRef } from "react";
import baseUrl from "./../../../assets/baseUrl";
import { useNavigate } from "react-router-dom";

const AddApprForm = () => {
  const typeRef = useRef();
  const apNoRef = useRef();
  const fileRef = useRef();

  const navigate = useNavigate();
  const [list, setList] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: baseUrl + "/users/list",
    }).then((response) => {
      setList(response.data);
    });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredType = typeRef.current.value;
    let enteredApNo = "";
    const ApUserNo = list.filter(
      (user) => parseInt(user.userNum) === parseInt(apNoRef.current.value)
    );
		if (ApUserNo.length === 0) {
			alert("해당 사번을 가진 직원이 존재하지 않습니다.");
			return;
		}
		enteredApNo = parseInt(ApUserNo[0].userNo)
    const enteredFile = fileRef.current.files[0];

    let formData = new FormData();

    const user = localStorage.getItem("user");
    const userInfo = JSON.parse(user);
    const url = baseUrl + "/apprform/" + userInfo[0].userNo;
    const postData = {
      afNm: enteredType,
      apNo: enteredApNo, //결재자 번호
    };
    formData.append(
      "af",
      new Blob([JSON.stringify(postData)], { type: "application/json" })
    );
    formData.append("files", enteredFile);
    axios({
      method: "post",
      url: url,
      headers: { "Content-Type": "multipart/form-data" },
      data: formData,
    }).then((response) => {
			axios({
				method: "post",
				url: baseUrl + "/approver/" + enteredApNo,
				data: {
					userNo: enteredApNo,
					afNo: response.data.afNo,
				}
			});
      alert("결재 양식이 등록되었습니다.");
      navigate("/appr/form");
    });
		
  };

  return (
    <>
      <div>
        <span>보고/결재 {">"} 결재양식등록</span>
      </div>
      <form onSubmit={submitHandler}>
        <label>결재 종류</label>
        <input type="text" ref={typeRef} />
        <label>결재자 사번</label>
        <input type="text" ref={apNoRef} />
        <input type="file" ref={fileRef} />
        <button>저장</button>
      </form>
    </>
  );
};

export default AddApprForm;
