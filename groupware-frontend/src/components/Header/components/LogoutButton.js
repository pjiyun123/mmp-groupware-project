import React from 'react';

const LogoutButton = () => {
	const onLogout = () => {
		localStorage.removeItem('user');	
		window.location.reload();
	}
	return (
		<button onClick={onLogout}>
			로그아웃
		</button>
	);
};

export default LogoutButton;