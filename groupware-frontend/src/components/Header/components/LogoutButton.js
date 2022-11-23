import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
	const navigate = useNavigate();

	const onLogout = () => {
		localStorage.removeItem('user');
		navigate('/');	
		window.location.reload();
	}
	return (
		<button onClick={onLogout}>
			로그아웃
		</button>
	);
};

export default LogoutButton;