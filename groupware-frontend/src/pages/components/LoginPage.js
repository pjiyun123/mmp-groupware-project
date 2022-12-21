import React from 'react';
import LoginContainer from '../../components/Login/LoginContainer';
import LogoContainer from '../../components/Login/LogoContainer';
import '../../styles/loginPage.css';

const LoginPage = () => {
	return (
		<div className='login-page'>
			{/* <LogoContainer /> */}
			<LoginContainer />
		</div>
	);
};

export default LoginPage;