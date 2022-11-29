import React from 'react';
import { useNavigate } from 'react-router-dom';
import WriteButton from './WriteButton';

const TopBar = ({ menuType }) => {
	const navigate = useNavigate();
	const onWritingClick = () => {
		navigate("writing");
	}
	return (
		<div>
			<span>{menuType} 목록</span>
			<WriteButton menuType={menuType} onClick={onWritingClick} />
		</div>
	);
};

export default TopBar;