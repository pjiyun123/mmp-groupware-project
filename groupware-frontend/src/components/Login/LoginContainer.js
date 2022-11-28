import React, { useState, useRef } from 'react';
import axios from "axios";
import LoginForm from './components/LoginForm';
import '../../styles/loginPage.css';

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
			url: "//localhost:8080/users/list"
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