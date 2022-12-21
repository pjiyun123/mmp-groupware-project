import React, { useEffect, useState } from 'react';
import axios from 'axios';
import baseUrl from '../../../assets/baseUrl';
import UsersPagination from './UsersPagination';

const AccountList = () => {
	const [list, setList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const url = baseUrl + "/users/list"
	useEffect(() => {
		axios({
			method: "get", 
			url: url, 
		})
		.then((response) => {
			setIsLoading(false);
			setList(response.data);
		})
	} , []);
	return (
		<>
			<UsersPagination data={list} isLoading={isLoading} />
			
		</>
	);
};

export default AccountList;