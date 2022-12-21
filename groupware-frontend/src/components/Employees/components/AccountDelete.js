import React, { useEffect, useState } from "react";
import axios from "axios";
import InquiryResult from "./InquiryResult";
import baseUrl from "../../../assets/baseUrl";
import { useNavigate } from 'react-router-dom';
import classes from '../styles/AccountDelete.module.css';

const AccountDelete = ({ isList, setIsList }) => {
  const [idInput, setIdInput] = useState("");
  const [list, setList] = useState([]);

  const [searchClicked, setSearchClicked] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    setIsList(false);
    setSearchClicked(false);
  }, []);

  const onChange = (e) => {
    setIdInput(e.target.value);
    if (idInput.length === 0) {
      setSearchClicked(false);
    }
  };
  const url = baseUrl + "/users/list"
  const searchHandler = () => {
    setSearchClicked(true);
    axios({
      method: "get",
      url: url,
    }).then((response) => {
      setList(response.data.filter((employee) => employee.userNum === idInput));
    });
  };

  const deleteHandler = () => {
    const deleteUrl = baseUrl + "/users/" + list[0].userNo;
    axios({
      method: "delete",
      url: deleteUrl,
    }).then((response) => {
      alert("계정이 생성되었습니다.");
      navigate("/employees");
    });
  };

  return (
    <div className={classes.container}>
      <div className={classes.accountInquiry}>
        <h2>직원계정삭제</h2>
        <span className={classes.deleteSpan}>
          삭제할 계정 조회{" "}
          <input className={classes.input} type="text" placeholder="사번입력창" onChange={onChange} />
          <button className={classes.inquiryBtn} onClick={searchHandler}>
            조회
          </button>
        </span>
      </div>
      <InquiryResult
        list={list}
        searchClicked={searchClicked}
        isList={isList}
      />
      {list.length > 0 ? (
        <div className={classes.deleteContainer}>
        <button className={classes.deleteBtn} onClick={deleteHandler}>
          삭제
        </button>
      </div>
      ) : null}
    </div>
  );
};

export default AccountDelete;
