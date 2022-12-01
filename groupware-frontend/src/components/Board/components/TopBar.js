import React from 'react';
import { useNavigate } from 'react-router-dom';
import WriteButton from './WriteButton';
import classes from '../styles/TopBar.module.css';

const TopBar = ({ menuType }) => {
	const navigate = useNavigate();
	const onWritingClick = () => {
		navigate("writing");
	}
	return (
		<div className={classes.topbar}>
			<span>{menuType} 목록</span>
			<WriteButton menuType={menuType} onClick={onWritingClick} />
		</div>
	);
};

export default TopBar;