import React from 'react';
import axios from 'axios';
import BoardPagination from './components/BoardPagination';
import TopBar from './components/TopBar';
import baseUrl from './../../assets/baseUrl';
import { useState, useEffect } from 'react';

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
			console.log(response.data);
			setData(response.data);
		})
	} , [menuType]);

	const list =[
    {
        "blNo": 4,
        "userNo": 1,
				"userNm": "홍길동",
        "blTit": "배고파",
        "blContent": "치킨먹고싶어",
        "createDt": "2022-11-27T02:10:53.196482",
        "updateDt": null,
        "deleteDt": null
    },
    {
        "blNo": 6,
        "userNo": 1,
				"userNm": "홍길동",
        "blTit": "배고파",
        "blContent": "치킨먹고싶어 떡볶이도 있으면 더 좋",
        "createDt": "2022-11-27T02:20:53.531444",
        "updateDt": "2022-11-27T02:58:28.490762",
        "deleteDt": null
    },
    {
        "blNo": 7,
        "userNo": 1,
				"userNm": "홍길동",
        "blTit": "스벅 신메",
        "blContent": "오로라 캐모마일 릴렉서 그리고 산타 벨벳 치즈케익",
        "createDt": "2022-11-27T03:05:22.364415",
        "updateDt": null,
        "deleteDt": null
    },
		{
			"blNo": 11,
			"userNo": 1,
			"userNm": "홍길동",
			"blTit": "배고파",
			"blContent": "치킨먹고싶어",
			"createDt": "2022-11-27T02:10:53.196482",
			"updateDt": null,
			"deleteDt": null
	},
	{
			"blNo": 12,
			"userNo": 1,
			"userNm": "홍길동",
			"blTit": "배고파",
			"blContent": "치킨먹고싶어 떡볶이도 있으면 더 좋",
			"createDt": "2022-11-27T02:20:53.531444",
			"updateDt": "2022-11-27T02:58:28.490762",
			"deleteDt": null
	},
	{
			"blNo": 13,
			"userNo": 1,
			"userNm": "홍길동",
			"blTit": "스벅 신메",
			"blContent": "오로라 캐모마일 릴렉서 그리고 산타 벨벳 치즈케익",
			"createDt": "2022-11-27T03:05:22.364415",
			"updateDt": null,
			"deleteDt": null
	}
];
	return (
		<div>
			<TopBar menuType={menuType} />
			<BoardPagination menuType={menuType} data={data} />
		</div>
	);
};

export default BoardContainer;