import React, { useState } from "react";
import axios from "axios";
import DropdownInput from "../../Employees/components/DropdownInput";
import deptTypes from "../../../assets/deptTypes";
import jobTypes from "../../../assets/jobTypes";
import { useNavigate } from "react-router-dom";
import baseUrl from "../../../assets/baseUrl";
import classes from "../styles/InfoModify.module.css";

const InfoModify = () => {
  const user = localStorage.getItem("user");
  const userInfo = JSON.parse(user);
  const navigate = useNavigate();

  const [userNum, setUserNum] = useState(parseInt(userInfo[0].userNum));
  const [userOldPwd, setUserOldPwd] = useState(userInfo[0].userPwd);
  const [userPwd, setUserPwd] = useState("");
  const [userPwdCheck, setUserPwdCheck] = useState("");
  const [userNm, setUserNm] = useState(userInfo[0].userNm);
  const [userEmail, setUserEmail] = useState(userInfo[0].userEmail);
  const [userPhone1, setUserPhone1] = useState(
    userInfo[0].userPhone.slice(0, 3)
  );
  const [userPhone2, setUserPhone2] = useState(
    userInfo[0].userPhone.slice(4, 8)
  );
  const [userPhone3, setUserPhone3] = useState(
    userInfo[0].userPhone.slice(9, 13)
  );

  // const [enteredDept, setEnteredDept] = useState(
  //   deptTypes[userInfo[0].deptNo].id
  // );
  // const [enteredRank, setEnteredRank] = useState(
  //   jobTypes[userInfo[0].jobNo].id
  // );

  const onUserNmChange = (e) => {
    setUserNm(e.target.value);
  };

  const onUserNumChange = (e) => {
    setUserNum(parseInt(e.target.value));
  };

  const onUserPhone1Change = (e) => {
    setUserPhone1(e.target.value);
  };

  const onUserPhone2Change = (e) => {
    setUserPhone2(e.target.value);
  };

  const onUserPhone3Change = (e) => {
    setUserPhone3(e.target.value);
  };

  const onUserEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const onUserOldPwdChange = (e) => {
    setUserOldPwd(e.target.value);
  };

  const onUserPwdChange = (e) => {
    setUserPwd(e.target.value);
  };

  const onUserPwdCheckChange = (e) => {
    setUserPwdCheck(e.target.value);
  };

  const onModify = (e) => {
    e.preventDefault();

    if (userOldPwd !== userInfo[0].userPwd) {
      alert("비밀번호를 다시 확인해주세요.");
      return;
    }
    if (userPwd === "") {
      alert("새 비밀번호를 입력해주세요.");
      return;
    }
    if (userPwd !== userPwdCheck) {
      alert("비밀번호를 다시 확인해주세요.");
      return;
    }

    const userPhone = userPhone1 + "-" + userPhone2 + "-" + userPhone3;
    const modiInfo = {
      userNum: userNum,
      userPwd: userPwd,
      userNm: userNm,
      userEmail: userEmail,
      userPhone: userPhone,
      // deptNo: enteredDept,
      // jobNo: enteredRank,
    };
    //console.log(modiInfo);
    const modiUrl = baseUrl + "/users/" + userInfo[0].userNo;
    axios({
      method: "patch",
      url: modiUrl,
      data: modiInfo,
    }).then((response) => {
      alert(
        "수정이 완료되었습니다. 다시 로그인 하기 위해 로그인 화면으로 돌아갑니다."
      );
      localStorage.removeItem("user");
      navigate("/");
      window.location.reload();
    });
  };

  return (
    <div className={classes.container}>
      <h2>내 정보 수정</h2>
      <form onSubmit={onModify}>
        <table className={classes.mdtable}>
          <tbody>
            <tr>
              <td className={classes.type}>이름</td>
              <td>
                <input
                  className={classes.input}
                  type="text"
                  placeholder={userInfo[0].userNm}
                  onChange={onUserNmChange}
                />
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className={classes.type}>사번</td>
              <td>
                <input
                  className={classes.input}
                  type="text"
                  placeholder={userInfo[0].userNum}
                  onChange={onUserNumChange}
                  disabled
                />
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className={classes.type}>부서</td>
              <td>
                <input
                  className={classes.input}
                  type="text"
                  placeholder={deptTypes[userInfo[0].deptNo].value}
                  disabled
                />
                {/* <DropdownInput
            dropdownList={deptTypes}
            setSelectedDropValue={setEnteredDept}
          /> */}
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className={classes.type}>직급</td>
              <td>
                <input
                  className={classes.input}
                  type="text"
                  placeholder={jobTypes[userInfo[0].jobNo].value}
                  disabled
                />
                {/* <DropdownInput
            dropdownList={jobTypes}
            setSelectedDropValue={setEnteredRank}
          /> */}
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
                  placeholder={userInfo[0].userPhone.slice(0, 3)}
                  onChange={onUserPhone1Change}
                />{" "}
                -{" "}
                <input
                  className={classes.phoneInput}
                  type="text"
                  placeholder={userInfo[0].userPhone.slice(4, 8)}
                  onChange={onUserPhone2Change}
                />{" "}
                -{" "}
                <input
                  className={classes.phoneInput}
                  type="text"
                  placeholder={userInfo[0].userPhone.slice(9, 13)}
                  onChange={onUserPhone3Change}
                />
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className={classes.type}>이메일</td>
              <td>
                <input
                  className={classes.input}
                  type="email"
                  placeholder={userInfo[0].userEmail}
                  onChange={onUserEmailChange}
                />
              </td>
            </tr>
          </tbody>
          {/* <tbody>
            <tr>
              <td>사진</td>
              <td>
                <input className="fileInput" type="file" />
              </td>
            </tr>
          </tbody> */}
          <tbody>
            <tr>
              <td className={classes.type}>비밀번호</td>
              <td>
                {/* <label className={classes.pwType}>현재 비밀번호</label> */}
                <input
                  className={classes.pwInput}
                  type="password"
                  placeholder="현재 비밀번호"
                  onChange={onUserOldPwdChange}
                />
                {/* <label>새로운 비밀번호</label> */}
                <input
                  className={classes.pwInput}
                  type="password"
                  placeholder="새로운 비밀번호"
                  onChange={onUserPwdChange}
                />
                {/* <label>비밀번호 확인</label> */}
                <input
                  className={classes.pwInput}
                  type="password"
                  placeholder="비밀번호 확인"
                  onChange={onUserPwdCheckChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className={classes.btnContainer}>
          <button className={classes.btn}>수정하기</button>
        </div>
      </form>
    </div>
  );
};

export default InfoModify;
