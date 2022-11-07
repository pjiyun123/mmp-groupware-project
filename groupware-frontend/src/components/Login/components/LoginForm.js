import React from "react";
import classes from "../styles/LoginForm.module.css";

const LoginForm = () => {
  return (
    <form className={classes.form}>
      <input
        className={classes.input}
        type="text"
        placeholder="아이디를 입력하세요."
      />
      <input
        className={classes.input}
        type="password"
        placeholder="비밀번호를 입력하세요."
      />
      <button className={classes.button}>로그인</button>
    </form>
  );
};

export default LoginForm;
