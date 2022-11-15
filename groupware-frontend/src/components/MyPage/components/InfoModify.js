import React from "react";

const InfoModify = ({ name, userId, dept, rank, phone, email, birthDate }) => {
  return (
    <div className="InfoModifyContainer">
      <form>
        <h3 className="infoType">
          이름 : <input className="textInput" type="text" placeholder={name} />
        </h3>
        <h3 className="infoType">
          사번 :{" "}
          <input className="textInput" type="text" placeholder={userId} />
        </h3>
        <h3 className="infoType">
          부서 : <input className="textInput" type="text" placeholder={dept} />
        </h3>
        <h3 className="infoType">
          직급 : <input className="textInput" type="text" placeholder={rank} />
        </h3>
        <h3 className="infoType">
          연락처 :{" "}
          <input
            className="textInput"
            type="text"
            placeholder={phone.slice(0, 3)}
          />{" "}
          -{" "}
          <input
            className="textInput"
            type="text"
            placeholder={phone.slice(4, 8)}
          />{" "}
          -{" "}
          <input
            className="textInput"
            type="text"
            placeholder={phone.slice(9, 13)}
          />
        </h3>
        <h3 className="infoType">
          이메일 :{" "}
          <input className="textInput" type="email" placeholder={email} />
        </h3>
        <h3 className="infoType">
          생년월일 :{" "}
          <input
            className="dateInput"
            type="date"
            value={
              birthDate.slice(0, 4) +
              "-" +
              birthDate.slice(5, 7) +
              "-" +
              birthDate.slice(8, 10)
            }
          />
        </h3>
        <h3 className="infoType">
          사진 : <button>+</button>
          <input className="fileInput" type="file" />
        </h3>
        <h3 className="infoType">비밀번호</h3>
        <div className="pwModi">
          <label>현재 비밀번호 : </label>
          <input className="pwModiInput" type="password" />
        </div>
        <div className="pwModi">
          <label>새로운 비밀번호 : </label>
          <input className="pwModiInput" type="password" />
        </div>
        <div className="pwModi">
          <label>비밀번호 확인 : </label>
          <input className="pwModiInput" type="password" />
        </div>
        <button className="infoModiBtn">수정하기</button>
      </form>
    </div>
  );
};

export default InfoModify;
