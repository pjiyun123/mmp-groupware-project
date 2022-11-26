import React, { useRef } from "react";
import classes from "../styles/LoginForm.module.css";

const LoginForm = ({ onSubmit, idRef, pwRef, message }) => {

  return (
    <form className={classes.form} onSubmit={onSubmit} >
      <input
        className={classes.input}
        type="text"
        placeholder="아이디를 입력하세요."
        ref={idRef}
      />
      <input
        className={classes.input}
        type="password"
        placeholder="비밀번호를 입력하세요."
        ref={pwRef}
      />
      <div>{message}</div>
      <button className={classes.button}>로그인</button>
    </form>
  );
};

export default LoginForm;
