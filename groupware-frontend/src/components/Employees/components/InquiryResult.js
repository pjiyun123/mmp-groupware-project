import React, { useEffect, useState } from "react";
import deptTypes from "../../../assets/deptTypes";
import jobTypes from "../../../assets/jobTypes";
import classes from "../styles/InquiryResult.module.css";

const InquiryResult = ({ list, searchClicked, isList }) => {
  const [infoList, setInfoList] = useState([]);

  useEffect(() => {
    const infos = list.map((info) => (
      <tbody key={info.userId}>
        <tr key={info.userId}>
          <td className="inquiryInfoType" key={info.userId} align="center">
            {info.userNum}
          </td>
          <td className="inquiryInfoType" key={info.userId} align="center">
            {info.userNm}
          </td>
          <td className="inquiryInfoType" key={info.userId} align="center">
            {jobTypes[info.jobNo].value}
          </td>
          <td className="inquiryInfoType" key={info.userId} align="center">
            {deptTypes[info.deptNo].value}
          </td>
          <td className="inquiryInfoType" key={info.userId} align="center">
            {info.userPhone == null
              ? "등록된 연락처가 없습니다."
              : info.userPhone}
          </td>
          <td className="inquiryInfoType" key={info.userId} align="center">
            {info.userEmail == null
              ? "등록된 이메일이 없습니다."
              : info.userEmail}
          </td>
          <td className="inquiryInfoType" key={info.userId} align="center">
            {info.userBirth}
          </td>
        </tr>
      </tbody>
    ));
    setInfoList(infos);
  }, [list]);

  return (
    <div className="inquiryReseultContainer">
      {isList ? (
        infoList.length === 0 ? (
          <span>등록된 직원 정보가 없습니다.</span>
        ) : null
      ) : searchClicked ? (
        infoList.length === 0 ? (
          <span>등록된 직원 정보가 없습니다.</span>
        ) : (
          <table className={classes.rsTable}>
            <thead>
              <tr>
                <th align="center">사원번호</th>
                <th align="center">이름</th>
                <th align="center">직급</th>
                <th align="center">부서</th>
                <th align="center">연락처</th>
                <th align="center">이메일</th>
                <th align="center">생년월일</th>
              </tr>
            </thead>
            {infoList}
          </table>
        )
      ) : (
        <span>삭제할 계정을 검색하세요</span>
      )}
    </div>
  );
};

export default InquiryResult;
