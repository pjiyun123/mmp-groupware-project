import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CalCreate from './components/CalCreate';
import Calendar from './components/Calendar';

const CalendarContainer = () => {
	return (
		<div className='calendarContainer'>
			<Routes>
				<Route path='/' element={<Calendar />} />
				<Route path="create" element={<CalCreate />} />
			</Routes>
		</div>
	);
};

export default CalendarContainer;