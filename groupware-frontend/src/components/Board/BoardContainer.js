import React from 'react';
import axios from 'axios';
import BoardPagination from './components/BoardPagination';
import TopBar from './components/TopBar';
import baseUrl from './../../assets/baseUrl';
import { useState, useEffect } from 'react';
import classes from './styles/BoardContainer.module.css';

const BoardContainer = ({ menuType }) => {
	const [data, setData] = useState([]);
	const menuUrl = menuType === "업무일지" ? "/businesslog/" : "/apprform/";
	const user = localStorage.getItem("user");
	const userInfo = JSON.parse(user);
	const getUrl = baseUrl + menuUrl + "list";

	useEffect(() => {
		axios({
			method: "get", 
			url: getUrl, 
		})
		.then((response) => {
			setData(response.data);
		})
	} , [getUrl, menuType]);

	
	return (
		<div className={classes.boardContainer}>
			<TopBar menuType={menuType} />
			<BoardPagination menuType={menuType} data={data} />
		</div>
	);
};

export default BoardContainer;