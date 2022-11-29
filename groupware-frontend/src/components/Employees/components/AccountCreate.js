import axios from "axios";
import React, { useRef, useState } from "react";
import DropdownInput from "./DropdownInput";
import deptTypes from './../../../assets/deptTypes';
import jobTypes from "../../../assets/jobTypes";
import lvTypes from "../../../assets/lvTypes";
import baseUrl from "../../../assets/baseUrl";
import { useNavigate } from 'react-router-dom';

const AccountCreate = () => {
  // const [created, setCreated] = useState(false);
  // useEffect(() => {
  //   setCreated(false);
  // }, []);  
  const navigate = useNavigate();

  const userNameInputRef = useRef();
  const userNumInputRef = useRef();
  const [enteredDept, setEnteredDept] = useState(
    deptTypes[0].value
  );
  const [enteredRank, setEnteredRank] = useState(
    jobTypes[0].value
  );
  const [enteredAuthorization, setEnteredAuthorization] = useState(
    lvTypes[0].value
  );
  const phoneInputRef1 = useRef();
  const phoneInputRef2 = useRef();
  const phoneInputRef3 = useRef();
  const emailInputRef = useRef();
  const birthdayInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredUserName = userNameInputRef.current.value;
    const enteredUserNum = userNumInputRef.current.value
    const enteredPhone1 = phoneInputRef1.current.value;
    const enteredPhone2 = phoneInputRef2.current.value;
    const enteredPhone3 = phoneInputRef3.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredBirthday = birthdayInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const enteredPhone =
      enteredPhone1 + "-" + enteredPhone2 + "-" + enteredPhone3;

    const newEmployeeInfo = {
      userLv: enteredAuthorization,
      deptNo: enteredDept,
      jobNo: enteredRank,
      userNm: enteredUserName,
      userPwd: enteredPassword,
      userBirth: enteredBirthday,
      userPhone: enteredPhone,
      userEmail: enteredEmail,
      userNum: enteredUserNum,
    };
    
    const url = baseUrl + "/users"
    axios({
      method: "post",
      url: url,
      data: newEmployeeInfo,
    }).then((response) => {
      // console.log(response);
      // setCreated(true);
      alert("계정이 생성되었습니다.");
      navigate("/employees");
    });
  };

  return (
    <div className="accountCreate">
      <form onSubmit={submitHandler}>
        <h3 className="infoType">
          이름 : <input type="text" ref={userNameInputRef} />
        </h3>
        <h3 className="infoType">
          사번 : <input type="text" ref={userNumInputRef} />
        </h3>
        <h3 className="infoType">
          부서 :{" "}
          <DropdownInput
            dropdownList={deptTypes}
            setSelectedDropValue={setEnteredDept}
          />
        </h3>
        <h3 className="infoType">
          직급 :{" "}
          <DropdownInput
            dropdownList={jobTypes}
            setSelectedDropValue={setEnteredRank}
          />
        </h3>
        <h3 className="infoType">
          권한 :{" "}
          <DropdownInput
            dropdownList={lvTypes}
            setSelectedDropValue={setEnteredAuthorization}
          />
        </h3>
        <h3 className="infoType">
          연락처 :{" "}
          <input className="textInput" type="text" ref={phoneInputRef1} /> -{" "}
          <input className="textInput" type="text" ref={phoneInputRef2} /> -{" "}
          <input className="textInput" type="text" ref={phoneInputRef3} />
        </h3>
        <h3 className="infoType">
          이메일 : <input type="email" ref={emailInputRef} />
        </h3>
        <h3 className="infoType">
          생년월일 : <input type="date" ref={birthdayInputRef} />
        </h3>
        <h3 className="infoType">
          초기 비밀번호 : <input type="password" ref={passwordInputRef} />
        </h3>
        <button className="accountCreateBtn">생성</button>
      </form>
      {/* {created ? <h4>계정이 생성되었습니다.</h4> : null} */}
    </div>
  );
};

export default AccountCreate;
