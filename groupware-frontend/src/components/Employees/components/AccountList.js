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
			// setIsLoading(false);
			setList(response.data);
		})
	} , []);
	return (
		<>
			<UsersPagination data={list} />
			{isLoading ? <img style={{width: '30px', textAlign: 'center'}} src='image/buffering.gif' alt='로딩중입니다.' /> : null}
		</>
	);
};

export default AccountList;