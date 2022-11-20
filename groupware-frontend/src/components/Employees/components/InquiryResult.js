import React, { useEffect, useState } from "react";

const InquiryResult = ({ list }) => {
  const [infoList, setInfoList] = useState([]);

  useEffect(() => {
    const infos = list.map((info) => (
      <div key={info.userId}>
        <label className="inquiryInfoType">{info.userId}</label>
        <label className="inquiryInfoType">{info.userName}</label>
        <label className="inquiryInfoType">{info.rankId}</label>
        <label className="inquiryInfoType">{info.deptId}</label>
        <label className="inquiryInfoType">
          {info.phone == null ? "등록된 연락처가 없습니다." : info.phone}
        </label>
        <label className="inquiryInfoType">
          {info.email == null ? "등록된 이메일이 없습니다." : info.email}
        </label>
        <label className="inquiryInfoType">{info.birthDate}</label>
      </div>
    ));
    setInfoList(infos);
  }, [list]);

  return (
    <div className="inquiryReseultContainer">
      <div className="inquiryInfoTypes">
        <label className="inquiryInfoType">사원번호</label>
        <label className="inquiryInfoType">이름</label>
        <label className="inquiryInfoType">직급</label>
        <label className="inquiryInfoType">부서</label>
        <label className="inquiryInfoType">연락처</label>
        <label className="inquiryInfoType">이메일</label>
        <label className="inquiryInfoType">생년월일</label>
      </div>
      <div className="inquiryReseult">
        {infoList.length === 0 ? "등록된 직원 정보가 없습니다" : infoList}
      </div>
    </div>
  );
};

export default InquiryResult;
