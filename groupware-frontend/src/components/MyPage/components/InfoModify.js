import React, { useState } from "react";
import DropdownInput from "../../Employees/components/DropdownInput";

const InfoModify = () => {
  const user = localStorage.getItem("user");
  const userInfo = JSON.parse(user);

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

  console.log(userInfo[0].deptId)

  const [enteredDept, setEnteredDept] = useState(
    deptTypes[userInfo[0].deptId].value
  );
  const [enteredRank, setEnteredRank] = useState(
    rankTypes[userInfo[0].rankId].value
  );


  return (
    <div className="InfoModifyContainer">
      <form>
        <table>
          <tr>
            <td>이름</td>
            <td>
              <input
                className="textInput"
                type="text"
                placeholder={userInfo[0].userName}
              />
            </td>
          </tr>
          <tr>
            <td>사번</td>
            <td>
              <input
                className="textInput"
                type="text"
                placeholder={userInfo[0].userId}
              />
            </td>
          </tr>
          <tr>
            <td>부서</td>
            <td>
            <DropdownInput
            dropdownList={deptTypes}
            setSelectedDropValue={setEnteredDept}
          />
            </td>
          </tr>
          <tr>
            <td>직급</td>
            <td align="center">
            <DropdownInput
            dropdownList={rankTypes}
            setSelectedDropValue={setEnteredRank}
          />
            </td>
          </tr>
          <tr>
            <td>연락처</td>
            <td>
              <input
                className="textInput"
                type="text"
                placeholder={userInfo[0].phone.slice(0, 3)}
              />{" "}
              -{" "}
              <input
                className="textInput"
                type="text"
                placeholder={userInfo[0].phone.slice(4, 8)}
              />{" "}
              -{" "}
              <input
                className="textInput"
                type="text"
                placeholder={userInfo[0].phone.slice(9, 13)}
              />
            </td>
          </tr>
          <tr>
            <td>이메일</td>
            <td>
              <input
                className="textInput"
                type="email"
                placeholder={userInfo[0].email}
              />
            </td>
          </tr>
          <tr>
            <td>사진</td>
            <td>
              <input className="fileInput" type="file" />
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <label>현재 비밀번호 : </label>
              <input className="pwModiInput" type="password" />
              <label>새로운 비밀번호 : </label>
              <input className="pwModiInput" type="password" />
              <label>비밀번호 확인 : </label>
              <input className="pwModiInput" type="password" />
            </td>
          </tr>
        </table>

        {/* <form>

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
      </form> */}
        <button className="infoModiBtn">수정하기</button>
      </form>
    </div>
  );
};

export default InfoModify;
