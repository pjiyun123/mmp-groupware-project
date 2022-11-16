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
			<Link to=''>
				<SubMenu menuName='일정확인' />
			</Link>
			<Link to=''>
				<SubMenu menuName='일정등록' />
			</Link>
			<Link to='calendar'>
				<MainMenu menuName='캘린더' />
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
			<Link to='list'>
				<MainMenu menuName='직원조회' />
			</Link>
			<Link to=''>
				<SubMenu menuName='직원목록' />
			</Link>
			<Link to=''>
				<SubMenu menuName='직원계정생성' />
			</Link>
			<Link to=''>
				<SubMenu menuName='직원계정삭제' />
			</Link>
		</div>
	);
};

export default SideMenuContainer;