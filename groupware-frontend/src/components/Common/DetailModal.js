import React from "react";
import classes from './styles/Modal.module.css';

const DetailModal = ({ onDelete, onClick, content }) => {

  return (
    <div className={classes.modal}>
      {content}
      <button className={`${classes.btn} ${classes.btn_alt}`} onClick={onDelete}>
        일정 삭제하기
      </button>
      <button className={classes.btn} onClick={onClick}>
        닫기
      </button>
    </div>
  );
};

export default DetailModal;
