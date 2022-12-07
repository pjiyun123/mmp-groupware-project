import React from "react";
import axios from "axios";
import classes from './styles/Modal.module.css';
import baseUrl from './../../assets/baseUrl';

const DetailModal = ({ calList, setIsModalOpen, calNo }) => {
  const sche = calList.filter(info => info.calNo == calNo);
  const onDelete = () => {
    axios({
      method: "delete",
      url: baseUrl + "/calendar/" + calNo,
    }).then(() => setIsModalOpen(false));  
  }
  const onClose = () => {
    setIsModalOpen(false);
  }
  return (
    <div className={classes.modal}>
      <span>{sche.calDate}</span><br />
                <span>{sche[0].calTit}</span>
                {sche[0].calMajor ? <span>☆</span> : null}
                <br />
                <p>장소 : {sche[0].calPlace}</p>
                <p>{sche[0].calContent}</p><br />
                <p>{sche[0].calStartTime}~{sche[0].calEndTime}</p>
      <button className={`${classes.btn} ${classes.btn_alt}`} onClick={onDelete}>
        일정 삭제하기
      </button>
      <button className={classes.btn} onClick={onClose}>
        닫기
      </button>
    </div>
  );
};

export default DetailModal;
