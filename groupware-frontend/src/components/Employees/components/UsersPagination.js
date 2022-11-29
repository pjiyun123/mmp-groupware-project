import React, { useEffect, useState } from "react";
import deptTypes from "../../../assets/deptTypes";
import jobTypes from "../../../assets/jobTypes";

const UsersPagination = ({ data }) => {
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
    <>
      <table align="center" width="90%">
        <th align="center">사원번호</th>
        <th align="center">이름</th>
        <th align="center">직급</th>
        <th align="center">부서</th>
        <th align="center">연락처</th>
        <th align="center">이메일</th>
        <th align="center">생년월일</th>
        {data?.slice(start, end).map((info) => (
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
              {deptTypes[info.deptNo].value}
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
        ))}
      </table>

      <nav style={{ listStyleType: "none", display: "flex" }}>
        {pageNumber.map((num) => (
          <li key={num} onClick={() => setCurrentPage(num)}>
            <button>{num}</button>
          </li>
        ))}
      </nav>
    </>
  );
};

export default UsersPagination;
