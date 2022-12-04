import React from "react";
import classes from './styles/Modal.module.css';

const Modal = ({ onCancel, onConfirm }) => {
  const cancelHandler = () => {
    onCancel();
  };

  const confirmHandler = () => {
    onConfirm();
  };

  return (
    <div className={classes.modal}>
      <p>정말로 삭제하시겠습니까?</p>
      <button className={`${classes.btn} ${classes.btn_alt}`} onClick={cancelHandler}>
			
        예
      </button>
      <button className={classes.btn} onClick={confirmHandler}>
        아니오
      </button>
    </div>
  );
};

export default Modal;
