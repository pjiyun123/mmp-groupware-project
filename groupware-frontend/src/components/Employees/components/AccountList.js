import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageNumbers from '../../Common/PageNumbers';
import InquiryResult from './InquiryResult';

const AccountList = () => {

	const [list, setList] = useState([]);

	useEffect(() => {
		axios({
			method: "get", 
			url: "//localhost:8080/users", 
		})
		.then((response) => {
			setList(response.data);
		})
	} , []);
	return (
		<div>
			<InquiryResult list={list} />
			<PageNumbers />
		</div>
	);
};

export default AccountList;