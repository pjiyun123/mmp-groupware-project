import React from 'react';
import { useState, useEffect } from 'react';
import baseUrl from './../../../assets/baseUrl';
import BoardPagination from './BoardPagination';
import TopBar from './TopBar';
import axios from 'axios';

const MyAppr = () => {
	const [data, setData] = useState([]);
	const menuType = "신청한 결재";
	const user = localStorage.getItem("user");
	const userInfo = JSON.parse(user);
	const getUrl = baseUrl + "/approval/list";

	useEffect(() => {
		axios({
			method: "get", 
			url: getUrl, 
		})
		.then((response) => {
			setData(response.data.filter(data => data.userNo === userInfo[0].userNo));
		})
	} , [getUrl, menuType]);
	
	return (
		<div>
			<TopBar menuType={menuType} />
			<BoardPagination menuType={menuType} data={data} />
		</div>
	);
};

export default MyAppr;