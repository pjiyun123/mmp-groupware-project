import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from '../styles/LogoutButton.module.css';

const LogoutButton = () => {
	const navigate = useNavigate();

	const onLogout = () => {
		localStorage.removeItem('user');
		navigate('/');	
		window.location.reload();
	}
	return (
		<button className={classes.logoutBtn} onClick={onLogout}>
			로그아웃
		</button>
	);
};

export default LogoutButton;