import axios from "axios";
import React, { useRef } from "react";

const AccountCreate = () => {
  const userNameInputRef = useRef();
  const deptInputRef = useRef();
  const rankInputRef = useRef();
  const authorizationInputRef = useRef();
  const phoneInputRef1 = useRef();
  const phoneInputRef2 = useRef();
  const phoneInputRef3 = useRef();
  const emailInputRef = useRef();
  const birthdayInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enterenUserName = userNameInputRef.current.value;
    const enteredDept = deptInputRef.current.value;
    const enteredRank = rankInputRef.current.value;
    const enteredAuthorization = authorizationInputRef.current.value;
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
    }).then((response) => console.log(response));
  };

  return (
    <div className="accountCreate">
      <form onSubmit={submitHandler}>
        <h3 className="infoType">
          이름 : <input type="text" ref={userNameInputRef} />
        </h3>
        <h3 className="infoType">
          부서 : <input type="text" ref={deptInputRef} />
        </h3>
        <h3 className="infoType">
          직급 : <input type="text" ref={rankInputRef} />
        </h3>
        <h3 className="infoType">
          권한 : <input type="text" ref={authorizationInputRef} />
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
    </div>
  );
};

export default AccountCreate;
