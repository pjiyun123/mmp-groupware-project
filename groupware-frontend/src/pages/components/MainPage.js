import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderContainer from './../../components/Header/HeaderContainer';
import SideMenuContainer from './../../components/SideMenu/SideMenuContainer';
import CalendarContainer from './../../components/Calendar/CalendarContainer';
import BoardContainer from './../../components/Board/BoardContainer';
import WritingContainer from './../../components/Writinig/WritingContainer';
import MyPageContainer from '../../components/MyPage/MyPageContainer';
import EmployeesContainer from '../../components/Employees/EmployeesContainer';



const MainPage = ({ loginedUser }) => {
	console.log(loginedUser);
	return (
		<div>
			<HeaderContainer />
			<SideMenuContainer />
			<Routes>
				<Route path="/mypage/*" element={<MyPageContainer />} />
				<Route path="/calendar/*" element={<CalendarContainer />} />
				<Route path="/board/*" element={<BoardContainer />} />
				<Route path="/writing/*" element={<WritingContainer />} />
				<Route path="/employees/*" element={<EmployeesContainer />} />
			</Routes>
		</div>
	);
};

export default MainPage;