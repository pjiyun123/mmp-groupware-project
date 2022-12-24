import React from "react";
import deptTypes from "./../../../assets/deptTypes";
import jobTypes from "./../../../assets/jobTypes";
import classes from '../styles/MyInformation.module.css';

const MyInformation = () => {
  const user = localStorage.getItem("user");
  const userInfo = JSON.parse(user);

  return (
    <div className={classes.MyInformationContainer}>
      <h2>마이페이지</h2>
      {/* <h1>{userInfo[0].userNm}</h1> */}
      <table className={classes.infoTable}>
      <tbody className={classes.infoRow}>
          <tr>
            <td className={classes.infoType}>이름</td>
            <td className={classes.info}>{userInfo[0].userNm}</td>
          </tr>
        </tbody>
        <tbody className={classes.infoRow}>
          <tr>
            <td className={classes.infoType}>사번</td>
            <td className={classes.info}>{userInfo[0].userNum}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className={classes.infoType}>부서</td>
            <td className={classes.info}>{deptTypes.filter((dept) => dept.id === userInfo[0].deptNo)[0].value}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className={classes.infoType}>직급</td>
            <td className={classes.info}>{jobTypes[userInfo[0].jobNo].value}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className={classes.infoType}>연락처</td>
            <td className={classes.info}>{userInfo[0].userPhone}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className={classes.infoType}>이메일</td>
            <td className={classes.info}>{userInfo[0].userEmail}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className={classes.infoType}>생년월일</td>
            <td className={classes.info}>{userInfo[0].userBirth}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyInformation;
