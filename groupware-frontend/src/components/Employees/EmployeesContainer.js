import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AccountList from './components/AccountList';
import AccountCreate from './components/AccountCreate';
import AccountDelete from './components/AccountDelete';
import { useState } from 'react';

const EmployeesContainer = () => {
	const [isList, setIsList] = useState(true);

	return (
		<>
			<Routes>
				<Route path='/' element={<AccountList />} />
				<Route path='/create' element={<AccountCreate />} />
				<Route path='/delete' element={<AccountDelete isList={isList} setIsList={setIsList} />} />
			</Routes>
		</>
	);
};

export default EmployeesContainer;