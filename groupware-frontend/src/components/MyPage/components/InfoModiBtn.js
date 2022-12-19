import React from 'react';
import classes from '../styles/InfoModiBtn.module.css';

const InfoModiBtn = ( {onClick} ) => {
	return (
		<div className={classes.container}>
			<button className={classes.InfoModiBtn} onClick={onClick}>내 정보 수정</button>
		</div>
	);
};

export default InfoModiBtn;