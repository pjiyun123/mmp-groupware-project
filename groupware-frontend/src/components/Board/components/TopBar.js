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
			<h2>{menuType} 목록
			{menuType === "업무일지" ? (
				<WriteButton menuType={menuType} onClick={onWritingClick} />
			) : null}
			</h2>
		</div>
	);
};

export default TopBar;