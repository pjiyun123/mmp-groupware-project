import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageNumbers from '../../Common/PageNumbers';
import InquiryResult from './InquiryResult';
import baseUrl from '../../../assets/baseUrl';

const AccountList = ({ isList, setIsList }) => {

	const [list, setList] = useState([]);
	const url = baseUrl + "/users/list"
	useEffect(() => {
		setIsList(true);
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
			<InquiryResult list={list} isList={isList} />
			<PageNumbers />
		</div>
	);
};

export default AccountList;