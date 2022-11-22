import React, { useState, useRef } from 'react';
import axios from "axios";
import LoginForm from './components/LoginForm';
import '../../styles/loginPage.css';

const LoginContainer = ({ setIsLogin, setLoginedUser }) => {
	const [msg, setMsg] = useState("");
	const idRef = useRef();
  const pwRef = useRef();

	const loginHandler = (e) => {
		e.preventDefault();

		const enteredId = idRef.current.value;
  	const enteredPw = pwRef.current.value;

		axios({
			method: "get",
			url: "//localhost:8080/users"
		}).then((response) => {
			const user = response.data.filter((employee) => employee.userId == enteredId);
			if (user.length > 0) {
				if (enteredPw === user[0].password) {
					setIsLogin(true);
					setLoginedUser(enteredId);
				}
				else {
					setMsg("아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.");
				}
			} else {
				setMsg("아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.");
			}
		});
	};
	return (
		<div className='login-container'>
			<LoginForm onSubmit={loginHandler} idRef={idRef} pwRef={pwRef} message={msg} />
		</div>
	);
};

export default LoginContainer;