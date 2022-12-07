import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import classes from '../styles/BoardPagination.module.css';

const BoardPagination = ({ menuType, data }) => {
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
    <div className={classes.boardPagination}>
			{data.length === 0 ? <div>등록된 글이 없습니다.</div> : (
				<>
				<table align="center" width="90%">
        <thead>
          <tr>
            <th align="center">번호</th>
            <th align="center">제목</th>
            <th align="center">작성자</th>
            <th align="center">작성일</th>
          </tr>
        </thead>
        {menuType === "업무일지"
          ? (data?.slice(start, end).map((info, index) => (
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
            )))
          : (data?.slice(start, end).map((info, index) => (
              <tbody>
                <tr key={info.avlNo}>
                  <td className="inquiryInfoType" align="center">
                    {start + index + 1}
                  </td>
                  <td className="inquiryInfoType" align="center">
                    {info.afNm}
                  </td>
                  <td className="inquiryInfoType" align="center">
                    {info.userNm}
                  </td>
                  <td className="inquiryInfoType" align="center">
                    {info.createDt.slice(0, 10)}
                  </td>
                </tr>
              </tbody>
            )))}
      </table>

      <nav style={{ listStyleType: "none", display: "flex" }}>
        {pageNumber.map((num) => (
          <li key={num} onClick={() => setCurrentPage(num)}>
            <button>{num}</button>
          </li>
        ))}
      </nav>
			</>
			)}
      
    </div>
  );
};

export default BoardPagination;
