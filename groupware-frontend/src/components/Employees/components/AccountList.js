import React, { useEffect, useState } from 'react';
import axios from 'axios';
import baseUrl from '../../../assets/baseUrl';
import UsersPagination from './UsersPagination';

const AccountList = () => {
	const [list, setList] = useState([]);

	const url = baseUrl + "/users/list"
	useEffect(() => {
		axios({
			method: "get", 
			url: url, 
		})
		.then((response) => {
			setList(response.data);
		})
	} , []);
	return (
		<div>
			<UsersPagination data={list} />
		</div>
	);
};

export default AccountList;