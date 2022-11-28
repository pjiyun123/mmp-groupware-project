import React, { useEffect, useState } from "react";
import deptTypes from "../../../assets/deptTypes";
import jobTypes from "../../../assets/jobTypes";

const InquiryResult = ({ list, searchClicked, isList }) => {
  const [infoList, setInfoList] = useState([]);

  useEffect(() => {
    const infos = list.map((info) => (
      <tr key={info.userId}>
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
          {info.userPhone == null ? "등록된 연락처가 없습니다." : info.userPhone}
        </td>
        <td className="inquiryInfoType" align="center">
          {info.userEmail == null ? "등록된 이메일이 없습니다." : info.userEmail}
        </td>
        <td className="inquiryInfoType" align="center">
          {info.userBirth}
        </td>
      </tr>
    ));
    setInfoList(infos);
  }, [list]);

  return (
    <div className="inquiryReseultContainer">
      {isList ? (
        infoList.length === 0 ? (
          <h3>등록된 직원 정보가 없습니다.</h3>
        ) : (
          <table align="center" width="90%">
            <th align="center">사원번호</th>
            <th align="center">이름</th>
            <th align="center">직급</th>
            <th align="center">부서</th>
            <th align="center">연락처</th>
            <th align="center">이메일</th>
            <th align="center">생년월일</th>
            {infoList}
          </table>
        )
      ) : searchClicked ? (
        infoList.length === 0 ? (
          <h3>등록된 직원 정보가 없습니다.</h3>
        ) : (
          <table align="center" width="90%">
            <th align="center">사원번호</th>
            <th align="center">이름</th>
            <th align="center">직급</th>
            <th align="center">부서</th>
            <th align="center">연락처</th>
            <th align="center">이메일</th>
            <th align="center">생년월일</th>
            {infoList}
          </table>
        )
      ) : (
        <h3>삭제할 계정을 검색하세요</h3>
      )}
    </div>
  );
};

export default InquiryResult;
