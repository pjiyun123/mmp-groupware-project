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
			{menuType !== "신청한 결재" ? (
				<WriteButton menuType={menuType} onClick={onWritingClick} />
			) : null}
			
		</div>
	);
};

export default TopBar;