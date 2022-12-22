import React, { useState, useRef } from 'react';
import axios from "axios";
import LoginForm from './components/LoginForm';
import '../../styles/loginPage.css';
import baseUrl from './../../assets/baseUrl';
import classes from './styles/LoginContainer.module.css';
import Footer from '../Common/Footer'

const LoginContainer = () => {
	const [msg, setMsg] = useState("");
	const idRef = useRef();
  const pwRef = useRef();

	const loginHandler = (e) => {
		e.preventDefault();

		const enteredId = idRef.current.value;
  	const enteredPw = pwRef.current.value;

		axios({
			method: "get",
			url: baseUrl + "/users/list"
		}).then((response) => {
			const user = response.data.filter((employee) => employee.userNum === enteredId);
			if (user.length > 0) {
				if (enteredPw === user[0].userPwd) {
					try {
						localStorage.setItem('user', JSON.stringify(user));
						window.location.reload();
					} catch (e) {
						console.log('localStorage is not working');
					}
				}
				else {
					alert("아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.");
				}
			} else {
					alert("아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.");
			}
		});
	};
	return (
		<div className={classes.container}>
			<div className={classes.header}></div>
			<h1 className={classes.logo}>SI<span className={classes.mmp}>MMP</span>LEWARE</h1>
			<div className={classes.box}>
			<LoginForm onSubmit={loginHandler} idRef={idRef} pwRef={pwRef} message={msg} />
			</div>
			<Footer />
		</div>
	);
};

export default LoginContainer;