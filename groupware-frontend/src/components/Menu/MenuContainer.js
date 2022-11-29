import React from 'react';
import { Link } from 'react-router-dom';
import MenuCircle from './components/MenuCircle';

const MenuContainer = () => {
	return (
		<div>
			<Link to='/mypage'>
				<MenuCircle menuName='마이페이지' />
			</Link>
			<Link to='/calendar'>
				<MenuCircle menuName='캘린더' />
			</Link>
			<Link to='/businesslog'>
				<MenuCircle menuName='업무일지' />
			</Link>
			<Link to='/appr'>
				<MenuCircle menuName='보고/결재' />
			</Link>
			<Link to='/employees'>
				<MenuCircle menuName='직원 조회' />
			</Link>
		</div>
	);
};

export default MenuContainer;