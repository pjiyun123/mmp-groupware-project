import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import DropdownInput from "./DropdownInput";
import deptTypes from "../../../assets/deptTypes";
import jobTypes from "../../../assets/jobTypes";
import lvTypes from "../../../assets/lvTypes";
import baseUrl from "../../../assets/baseUrl";
import { useNavigate } from "react-router-dom";
import classes from "../styles/AccountCreate.module.css";
// import DeptTypesDropdown from "./DeptTypesDropdown";

const AccountCreate = () => {
  // const defaultDeptTypes = [{deptNo: 0, deptNm: '부서를 선택하세요.'},];
  // const [deptTypes, setDeptTypes] = useState(defaultDeptTypes);

  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: baseUrl + "/dept/list",
  //   }).then((response) => {
  //     setDeptTypes(defaultDeptTypes.concat(response.data));
  //   })
  // }, []);

  const navigate = useNavigate();

  const userNameInputRef = useRef();
  const userNumInputRef = useRef();
  const [enteredDept, setEnteredDept] = useState(deptTypes[0].deptNm);
  const [enteredRank, setEnteredRank] = useState(jobTypes[0].value);
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
    const enteredUserNum = userNumInputRef.current.value;
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

    const url = baseUrl + "/users";
    axios({
      method: "post",
      url: url,
      data: newEmployeeInfo,
    }).then((response) => {
      alert("계정이 생성되었습니다.");
      navigate("/employees");
    });
  };

  return (
    <div className={classes.container}>
      <h2>직원계정 생성</h2>
      <form onSubmit={submitHandler}>
        <table className={classes.acTable}>
          <tbody>
            <tr>
              <td className={classes.type}>이름</td>
              <td>
                <input
                  className={classes.inputWindow}
                  type="text"
                  placeholder="이름을 입력하세요."
                  ref={userNameInputRef}
                />
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className={classes.type}>사번</td>
              <td>
                <input
                  className={classes.inputWindow}
                  type="text"
                  placeholder="사번을 입력하세요."
                  ref={userNumInputRef}
                />
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className={classes.type}>부서</td>
              <td>
                <DropdownInput
                  dropdownList={deptTypes}
                  setSelectedDropValue={setEnteredDept}
                />
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className={classes.type}>직급</td>
              <td>
                <DropdownInput
                  dropdownList={jobTypes}
                  setSelectedDropValue={setEnteredRank}
                />
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className={classes.type}>권한</td>
              <td>
                <DropdownInput
                  dropdownList={lvTypes}
                  setSelectedDropValue={setEnteredAuthorization}
                />
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className={classes.type}>연락처</td>
              <td>
                <input
                  className={classes.phoneInput}
                  type="text"
                  placeholder="010"
                  ref={phoneInputRef1}
                />{" "}
                -{" "}
                <input
                  className={classes.phoneInput}
                  type="text"
                  placeholder="xxxx"
                  ref={phoneInputRef2}
                />{" "}
                -{" "}
                <input
                  className={classes.phoneInput}
                  type="text"
                  placeholder="xxxx"
                  ref={phoneInputRef3}
                />
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className={classes.type}>이메일</td>
              <td>
                <input
                  className={classes.inputWindow}
                  type="email"
                  placeholder="이메일을 입력하세요."
                  ref={emailInputRef}
                />
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className={classes.type}>생년월일</td>
              <td>
                <input
                  className={classes.inputWindow}
                  type="date"
                  ref={birthdayInputRef}
                />
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className={classes.type}>초기 비밀번호</td>
              <td>
                <input
                  className={classes.inputWindow}
                  type="password"
                  ref={passwordInputRef}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className={classes.btncontainer}>
          <button className={classes.accountCreateBtn}>생성</button>
        </div>
      </form>
    </div>
  );
};

export default AccountCreate;
