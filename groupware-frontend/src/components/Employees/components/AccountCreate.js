import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import DropdownInput from "./DropdownInput";

const AccountCreate = () => {
  const [created, setCreated] = useState(false);
  useEffect(() => {
    setCreated(false);
  }, []);

  const deptTypes = [
    {id: 0, value: '부서를 선택하세요.'},
    {id: 1, value: '설계팀'},
    {id: 2, value: '개발팀'},
    {id: 3, value: '생산팀'},
    {id: 4, value: '영업팀'},
    {id: 5, value: '관리팀'},
  ];

  const rankTypes = [
    {id: 0, value: '직급을 선택하세요.'},
    {id: 1, value: '사장'},
    {id: 2, value: '부장'},
    {id: 3, value: '차장'},
    {id: 4, value: '과장'},
    {id: 5, value: '대리'},
    {id: 6, value: '주임'},
    {id: 7, value: '사원'},
  ];

  const authorizationTypes = [
    {id: 0, value: '부서를 선택하세요.'},
    {id: 1, value: '관리자'},
    {id: 2, value: '고급'},
    {id: 3, value: '일반'},
  ];

  const userNameInputRef = useRef();
  const [enteredDept, setEnteredDept] = useState(
    deptTypes[0].value
  );
  const [enteredRank, setEnteredRank] = useState(
    deptTypes[0].value
  );
  const [enteredAuthorization, setEnteredAuthorization] = useState(
    deptTypes[0].value
  );
  const phoneInputRef1 = useRef();
  const phoneInputRef2 = useRef();
  const phoneInputRef3 = useRef();
  const emailInputRef = useRef();
  const birthdayInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enterenUserName = userNameInputRef.current.value;
    const enteredPhone1 = phoneInputRef1.current.value;
    const enteredPhone2 = phoneInputRef2.current.value;
    const enteredPhone3 = phoneInputRef3.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredBirthday = birthdayInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const enteredPhone =
      enteredPhone1 + "-" + enteredPhone2 + "-" + enteredPhone3;

    const newEmployeeInfo = {
      authorizationId: enteredAuthorization,
      deptId: enteredDept,
      rankId: enteredRank,
      userName: enterenUserName,
      password: enteredPassword,
      birthDate: enteredBirthday,
      phone: enteredPhone,
      email: enteredEmail,
    };
    
    axios({
      method: "post",
      url: "//localhost:8080/users/create",
      data: newEmployeeInfo,
    }).then((response) => {
      // console.log(response);
      setCreated(true);
    });
  };

  return (
    <div className="accountCreate">
      <form onSubmit={submitHandler}>
        <h3 className="infoType">
          이름 : <input type="text" ref={userNameInputRef} />
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
            dropdownList={rankTypes}
            setSelectedDropValue={setEnteredRank}
          />
        </h3>
        <h3 className="infoType">
          권한 :{" "}
          <DropdownInput
            dropdownList={authorizationTypes}
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
      {created ? <h4>계정이 생성되었습니다.</h4> : null}
    </div>
  );
};

export default AccountCreate;
