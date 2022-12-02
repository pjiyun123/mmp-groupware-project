import React from 'react';

import classes from '../styles/WriteButton.module.css'

const WriteButton = ({ menuType, onClick }) => {
	return (
		<button className={classes.writeBtn} onClick={onClick}>
			{menuType} 작성
		</button>
	);
};

export default WriteButton;