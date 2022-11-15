import React from 'react';
import HeaderContainer from './../../components/Header/HeaderContainer';
import SideMenuContainer from './../../components/SideMenu/SideMenuContainer';
import { Routes, Route } from 'react-router-dom';
import CalendarContainer from './../../components/Calendar/CalendarContainer';
import BoardContainer from './../../components/Board/BoardContainer';
import WritingContainer from './../../components/Writinig/WritingContainer';
import MyPageContainer from '../../components/MyPage/MyPageContainer';

const MainPage = () => {
	return (
		<div>
			<HeaderContainer />
			<SideMenuContainer />
			<Routes>
				<Route path="/mypage/*" element={<MyPageContainer />} />
				<Route path="/calendar/*" element={<CalendarContainer />} />
				<Route path="/board/*" element={<BoardContainer />} />
				<Route path="/writing/*" element={<WritingContainer />} />
			</Routes>
		</div>
	);
};

export default MainPage;