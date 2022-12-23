import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import baseUrl from "./../../../assets/baseUrl";
import { useNavigate } from "react-router-dom";
import Modal from "../../Common/Modal";
import classes from "../styles/BusinesslogDetail.module.css";

const BusinesslogDetail = () => {
  let { no } = useParams();
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const userInfo = JSON.parse(user);

  const [isLoading, setIsLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getUrl = baseUrl + "/businesslog/" + no;
  const deleteUrl = baseUrl + "/businesslog/" + no;
  

  useEffect(() => {
    axios({
      method: "get",
      url: getUrl,
    }).then((response) => {
      setDetail(response.data);
    });

  }, [no, getUrl]);

  const onModify = () => {
    navigate("/businesslog/modify/" + no);
  };

  const onDelete = () => {
    axios({
      method: "delete",
      url: deleteUrl,
    }).then(() => {
      setIsModalOpen(false);
      navigate("/businesslog");
    });
  };

  return (
    <>
      <div className={classes.container}>
        <h2 className={classes.tit}>
          {detail.blTit}
          {userInfo[0].userNo === detail.userNo ? (
            <>
              <button className={classes.btn} onClick={onModify}>
                수정
              </button>
              <button
                className={classes.btn}
                onClick={() => setIsModalOpen(true)}
              >
                삭제
              </button>
            </>
          ) : null}
        </h2>
        <br />
        <div className={classes.infos}>
          <span className={classes.name}>{detail.userNm}</span>
          <span className={classes.date}>
            {detail.createDt ? detail.createDt.slice(0, 10) : null}
          </span>
        </div>
        <div className={classes.content}>{detail.blContent}</div>
      </div>
      {userInfo[0].userNo === detail.userNo ? (
        <div>
          {isModalOpen ? (
            <Modal
              onCancel={onDelete}
              onConfirm={() => setIsModalOpen(false)}
            />
          ) : null}
        </div>
      ) : null}
    </>
  );
};

export default BusinesslogDetail;
