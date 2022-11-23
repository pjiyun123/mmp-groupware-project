import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CalCreate from './components/CalCreate';
import Calendar from './components/Calendar';
import axios from 'axios';

const CalendarContainer = () => {
	const [calList, setCalList] = useState([]);

	useEffect(() => {
    axios({
      method: "get",
      url: "//localhost:8080/calendar",
    }).then((response) => {
      setCalList(response.data);
    })
  }, []);

	return (
		<div className='calendarContainer'>
			<Routes>
				<Route path='/' element={<Calendar calList={calList} />} />
				<Route path="create" element={<CalCreate />} />
			</Routes>
		</div>
	);
};

export default CalendarContainer;