import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageNumbers from '../../Common/PageNumbers';
import InquiryResult from './InquiryResult';

const AccountList = ({ isList, setIsList }) => {

	const [list, setList] = useState([]);

	useEffect(() => {
		setIsList(true);
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
			<InquiryResult list={list} isList={isList} />
			<PageNumbers />
		</div>
	);
};

export default AccountList;