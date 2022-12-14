import React, { useEffect, useState } from "react";
import deptTypes from "../../../assets/deptTypes";
import jobTypes from "../../../assets/jobTypes";
import axios from "axios";
import baseUrl from "../../../assets/baseUrl";
import classes from "../styles/UserPagination.module.css";

const UsersPagination = ({ data, isLoading }) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
 
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(data?.length / 5); i++) {
    pageNumber.push(i);
  }
  useEffect(() => {
    setStart((currentPage - 1) * 5);
    setEnd(currentPage * 5);
  }, [currentPage]);

  return (
    <div className={classes.container}>
      <h2>직원목록</h2>
      <table className={classes.usersTable}>
        <thead>
          <tr>
            <th className={classes.typeRow}>사원번호</th>
            <th className={classes.typeRow}>이름</th>
            <th className={classes.typeRow}>직급</th>
            <th className={classes.typeRow}>부서</th>
            <th className={classes.typeRow}>연락처</th>
            <th className={classes.typeRow}>이메일</th>
            <th className={classes.typeRow}>생년월일</th>
          </tr>
        </thead>
        {isLoading ? (
          <tbody>
            <tr>
              <td colspan="7">
                <img
                  className={classes.loadingImg}
                  src="image/buffering.gif"
                  alt="로딩중입니다."
                />
              </td>
            </tr>
          </tbody>
        ) : (
          data?.slice(start, end).map((info) => (
            <tbody key={info.userNo}>
              <tr key={info.userNo}>
                <td className="inquiryInfoType" align="center">
                  {info.userNum}
                </td>
                <td className="inquiryInfoType" align="center">
                  {info.userNm}
                </td>
                <td className="inquiryInfoType" align="center">
                  {jobTypes[info.jobNo].value}
                </td>
                <td className="inquiryInfoType" align="center">
                  {deptTypes.filter((dept) => dept.id === info.deptNo)[0].value}
                </td>
                <td className="inquiryInfoType" align="center">
                  {info.userPhone == null
                    ? "등록된 연락처가 없습니다."
                    : info.userPhone}
                </td>
                <td className="inquiryInfoType" align="center">
                  {info.userEmail == null
                    ? "등록된 이메일이 없습니다."
                    : info.userEmail}
                </td>
                <td className="inquiryInfoType" align="center">
                  {info.userBirth}
                </td>
              </tr>
            </tbody>
          ))
        )}
      </table>

      <nav
        className={classes.pages}
        style={{ listStyleType: "none", display: "flex" }}
      >
        {pageNumber.map((num) => (
          <li key={num} onClick={() => setCurrentPage(num)}>
            <button className={classes.btn}>{num}</button>
          </li>
        ))}
      </nav>
    </div>
  );
};

export default UsersPagination;
