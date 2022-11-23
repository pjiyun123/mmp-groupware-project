import React from 'react';
import { Link } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import SubMenu from './components/SubMenu';

const SideMenuContainer = () => {
	return (
		<div>
			<Link to='/'>
				<MainMenu menuName='HOME' />
			</Link>
			<Link to='calendar'>
				<MainMenu menuName='캘린더' />
			<Link to='calendar'>
				<SubMenu menuName='일정확인' />
			</Link>
			<Link to='calendar/create'>
				<SubMenu menuName='일정등록' />
			</Link>
			</Link>
			<Link to='businesslog'>
				<MainMenu menuName='업무일지' />
			</Link>
			<Link to='board'>
				<MainMenu menuName='보고/결재' />
			</Link>
			<Link to=''>
				<SubMenu menuName='결재' />
			</Link>
			<Link to=''>
				<SubMenu menuName='결재신청' />
			</Link>
			<Link to=''>
				<SubMenu menuName='결재양식' />
			</Link>
			<Link to=''>
				<SubMenu menuName='결재할 문서' />
			</Link>
			<Link to='employees'>
				<MainMenu menuName='직원조회' />
			</Link>
			<Link to='employees'>
				<SubMenu menuName='직원목록' />
			</Link>
			<Link to='employees/create'>
				<SubMenu menuName='직원계정생성' />
			</Link>
			<Link to='employees/delete'>
				<SubMenu menuName='직원계정삭제' />
			</Link>
		</div>
	);
};

export default SideMenuContainer;