import React from 'react';
import '../../styles/loginPage.css';
import classes from './styles/LogoContainer.module.css';
// import groupwareImg from '../../../public/img/groupware.png';

const LogoContainer = () => {
	return (
		<div className='logo-container'>
			<h1 className={classes.logo}>
				SI<span className={classes.mmp}>MMP</span>LEWARE
			</h1>
			<img className={classes.groupwareImg} src='image/groupware1.jpg' alt="groupware img" />
		</div>
	);
};

export default LogoContainer;