import React from 'react';
import classes from '../styles/MenuCircle.module.css';

const MenuCircle = ({ menuName }) => {
	return (
		<div className={classes.menuCircle}>
			{menuName}
		</div>
	);
};

export default MenuCircle;