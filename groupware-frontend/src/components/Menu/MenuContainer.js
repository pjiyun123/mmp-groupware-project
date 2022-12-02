import React from 'react';
import { Link } from 'react-router-dom';
import MenuCircle from './components/MenuCircle';
import classes from './styles/MenuContainer.module.css';

const MenuContainer = () => {
	return (
		<div className={classes.menuContainer}>
			<div className={classes.circle}>
				<Link to='/mypage'>
					<MenuCircle menuName='마이페이지' />
				</Link>
			</div>
			<div className={classes.circle}> 
				<Link to='/calendar'>
					<MenuCircle menuName='캘린더' />
				</Link>
			</div>
			<div className={classes.circle}>
				<Link to='/businesslog'>
					<MenuCircle menuName='업무일지' />
				</Link>
			</div>
			<div className={classes.circle}>
				<Link to='/appr'>
					<MenuCircle menuName='보고/결재' />
				</Link>
			</div>
			<div className={classes.circle}>
				<Link to='/employees'>
					<MenuCircle menuName='직원 조회' />
				</Link>
			</div>
		</div>
	);
};

export default MenuContainer;