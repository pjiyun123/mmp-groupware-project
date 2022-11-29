import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderContainer from './../../components/Header/HeaderContainer';
import SideMenuContainer from './../../components/SideMenu/SideMenuContainer';
import CalendarContainer from './../../components/Calendar/CalendarContainer';
import BoardContainer from './../../components/Board/BoardContainer';
import WritingContainer from './../../components/Writing/WritingContainer';
import MyPageContainer from '../../components/MyPage/MyPageContainer';
import EmployeesContainer from '../../components/Employees/EmployeesContainer';



const MainPage = () => {
	return (
		<div>
			<HeaderContainer />
			<SideMenuContainer />
			<Routes>
				<Route path="/mypage/*" element={<MyPageContainer />} />
				<Route path="/calendar/*" element={<CalendarContainer />} />
				<Route path="/businesslog/*" element={<BoardContainer menuType='업무일지' />} />
				<Route path="/appr/*" element={<BoardContainer menuType='결재' />} />
				<Route path="businesslog/writing/*" element={<WritingContainer menuType='업무일지' />} />
				<Route path="appr/writing/*" element={<WritingContainer menuType='결재' />} />
				<Route path="/employees/*" element={<EmployeesContainer />} />
			</Routes>
		</div>
	);
};

export default MainPage;