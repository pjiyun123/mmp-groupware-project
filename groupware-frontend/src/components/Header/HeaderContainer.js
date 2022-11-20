import React from 'react';
import classes from './styles/HeaderContainer.module.css'

const HeaderContainer = () => {
	return (
		<div>
			<h1 className={classes.logo}>
				SI<span className={classes.mmp}>MMP</span>LEWARE
			</h1>
		</div>
	);
};

export default HeaderContainer;