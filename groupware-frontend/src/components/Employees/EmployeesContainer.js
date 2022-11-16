import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AccountList from './components/AccountList';
import AccountCreate from './components/AccountCreate';
import AccountDelete from './components/AccountDelete';

const EmployeesContainer = () => {
	return (
		<div className='employeesContainer'>
			<Routes>
				<Route path='/' element={<AccountList />} />
				<Route path='/create' element={<AccountCreate />} />
				<Route path='/delete' element={<AccountDelete />} />
			</Routes>
		</div>
	);
};

export default EmployeesContainer;