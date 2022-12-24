import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import classes from "../styles/BoardPagination.module.css";

const BoardPagination = ({ menuType, data }) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(data?.length / 10); i++) {
    pageNumber.push(i);
  }
  useEffect(() => {
    setStart((currentPage - 1) * 10);
    setEnd(currentPage * 10);
  }, [currentPage]);

  return (
    <div className={classes.container}>
      {data.length === 0 ? (
        <span>등록된 글이 없습니다.</span>
      ) : (
        <>
          <table className={classes.boardTable}>
            <thead>
              <tr>
                <th align="center">번호</th>
                <th align="center">제목</th>
                <th align="center">작성자</th>
                <th align="center">작성일</th>
                {menuType === "신청한 결재" ? (
                  <th align="center">상태</th>
                ) : null}
              </tr>
            </thead>
            {menuType === "업무일지"
              ? data?.slice(start, end).map((info, index) => (
                  <tbody>
                    <tr key={info.blNo}>
                      <td className="inquiryInfoType" align="center">
                        {start + index + 1}
                      </td>
                      <td className="inquiryInfoType" align="center">
                        <Link to={`${info.blNo}`}>{info.blTit}</Link>
                      </td>
                      <td className="inquiryInfoType" align="center">
                        {info.userNm}
                      </td>
                      <td className="inquiryInfoType" align="center">
                        {info.createDt.slice(0, 10)}
                      </td>
                    </tr>
                  </tbody>
                ))
              : data?.slice(start, end).map((info, index) => (
                  <tbody>
                    <tr key={info.avlNo}>
                      <td className="inquiryInfoType" align="center">
                        {start + index + 1}
                      </td>
                      <td className="inquiryInfoType" align="center">
                        {/* {info.afNm} */}

                        <Link to={`${info.avlNo}`}>{info.avlTit}</Link>
                      </td>
                      <td className="inquiryInfoType" align="center">
                        {info.userNm}
                      </td>
                      <td className="inquiryInfoType" align="center">
                        {info.createDt.slice(0, 10)}
                      </td>
                      {menuType === "신청한 결재" ? (
                        <td className="inquiryInfoType" align="center">
                          {info.apprYn === "Wait" ? (
                            <span>대기</span>
                          ) : info.apprYn === "Yes" ? (
                            <span style={{color: "blue"}}>완료</span>
                          ) : (
                            <span style={{color: "red"}}>반려</span>
                          )}
                        </td>
                      ) : null}
                    </tr>
                  </tbody>
                ))}
          </table>

          <nav className={classes.pages} style={{ listStyleType: "none", display: "flex" }}>
            {pageNumber.map((num) => (
              <li key={num} onClick={() => setCurrentPage(num)}>
                <button className={classes.btn}>{num}</button>
              </li>
            ))}
          </nav>
        </>
      )}
    </div>
  );
};

export default BoardPagination;
