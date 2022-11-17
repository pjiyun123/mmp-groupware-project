import React from "react";

const AccountCreate = () => {
  const today = new Date();

  return (
    <div className="accountCreate">
      <form>
        <h3 className="infoType">
          사번 : <input type="text" />
        </h3>
        <h3 className="infoType">
          이름 : <input type="text" />
        </h3>
        <h3 className="infoType">
          부서 : <input type="text" />
        </h3>
        <h3 className="infoType">
          직급 : <input type="text" />
        </h3>
        <h3 className="infoType">
          권한 : <input type="text" />
        </h3>
        <h3 className="infoType">
          연락처 : <input type="text" /> -{" "}
          <input className="textInput" type="text" /> -{" "}
          <input className="textInput" type="text" />
        </h3>
        <h3 className="infoType">
          이메일 : <input type="email" />
        </h3>
        <h3 className="infoType">
          생년월일 :{" "}
          <input
            type="date"
            value={
              today.getFullYear() +
              "-" +
              (today.getMonth() + 1) +
              "-" +
              today.getDate()
            }
          />
        </h3>
        <h3 className="infoType">
          초기 비밀번호 : <input type="password" />
        </h3>
				<button className="accountCreateBtn">생성</button>
      </form>
    </div>
  );
};

export default AccountCreate;
