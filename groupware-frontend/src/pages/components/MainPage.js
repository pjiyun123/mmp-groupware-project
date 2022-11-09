import React from 'react';
import HeaderContainer from './../../components/Header/HeaderContainer';
import SideMenuContainer from './../../components/SideMenu/SideMenuContainer';
import { Routes, Route } from 'react-router-dom';
import CalendarContainer from './../../components/Calendar/CalendarContainer';
import BoardContainer from './../../components/Board/BoardContainer';
import WritingContainer from './../../components/Writinig/WritingContainer';

const MainPage = () => {
	return (
		<div>
			<HeaderContainer />
			<SideMenuContainer />
			<Routes>
				<Route path="/calendar" element={<CalendarContainer />} />
				<Route path="/board" element={<BoardContainer />} />
				<Route path="/writing" element={<WritingContainer />} />
				<Route path="*" element={<CalendarContainer />} />
			</Routes>
		</div>
	);
};

export default MainPage;