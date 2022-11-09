import React from 'react';
import LoginForm from './components/LoginForm';
import '../../styles/loginPage.css';

const LoginContainer = () => {
	return (
		<div className='login-container'>
			<LoginForm />
		</div>
	);
};

export default LoginContainer;