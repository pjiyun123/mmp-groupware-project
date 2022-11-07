import React from 'react';
import { Link } from 'react-router-dom';
import MenuCircle from './components/MenuCircle';

const MenuContainer = () => {
	return (
		<div>
			<Link to='calendar'>
				<MenuCircle menuName='캘린더' />
			</Link>
			<Link to='board'>
				<MenuCircle menuName='업무일지' />
			</Link>
			<Link to='board'>
				<MenuCircle menuName='보고/결재' />
			</Link>
			<Link>
				<MenuCircle menuName='마이페이지' />
			</Link>
		</div>
	);
};

export default MenuContainer;