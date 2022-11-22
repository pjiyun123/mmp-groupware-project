import React from 'react';
import LoginContainer from '../../components/Login/LoginContainer';
import LogoContainer from '../../components/Login/LogoContainer';
import '../../styles/loginPage.css';

const LoginPage = ({ setIsLogin, setLoginedUser }) => {
	return (
		<div className='login-page'>
			<LogoContainer />
			<LoginContainer setIsLogin={setIsLogin} setLoginedUser={setLoginedUser} />
		</div>
	);
};

export default LoginPage;