import React, { useEffect, useState } from "react";
import axios from "axios";
import baseUrl from "./../../../assets/baseUrl";
import { Link, Navigate, useNavigate } from "react-router-dom";
import classes from "../styles/ApprForm.module.css";

const ApprForm = () => {
  const [forms, setForms] = useState([]);
  const navigate = useNavigate();
  const getUrl = baseUrl + "/apprform/list";
  const user = localStorage.getItem("user");
  const userInfo = JSON.parse(user);

  const onFormAdd = () => {
    navigate("add");
  };

  useEffect(() => {
    axios({
      method: "get",
      url: getUrl,
    }).then((response) => {
      setForms(response.data);
    });
  }, [getUrl]);

  return (
    <div className={classes.container}>
        <h2 style={{width: "80%"}}>
          보고/결재 {">"} 결재 양식
          {userInfo[0].userLv < 2 ? (
            <button className={classes.appraddBtn} onClick={onFormAdd}>
              결재양식추가
            </button>
          ) : null}
        </h2>
      {forms.length === 0 ? (
        <div>등록된 결재 양식이 없습니다.</div>
      ) : (
        <table className={classes.afTable}>
          <thead>
            <tr>
              <th align="center">번호</th>
              <th align="center">제목</th>
            </tr>
          </thead>
          {forms.map((form, index) => (
            <tbody
              key={form.afNo}
              onClick={() => {
                navigate(form.afNo);
              }}
            >
              <tr key={form.afNo}>
                <td align="center">{index + 1}</td>
                <td align="center">
                  <Link to={`${form.afNo}`}>{form.afNm}</Link>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      )}
    </div>
  );
};

export default ApprForm;
