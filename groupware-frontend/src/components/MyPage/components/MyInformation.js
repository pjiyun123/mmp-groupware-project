import React from 'react';
import deptTypes from './../../../assets/deptTypes';
import jobTypes from './../../../assets/jobTypes';

const MyInformation = () => {
	const user = localStorage.getItem("user");
	const userInfo = JSON.parse(user);

	return (
		<div className='MyInformationContainer'>
			<h1>{userInfo[0].userName}</h1>
			<table>
				<tr>
					<td>사번</td>
					<td align="center">{userInfo[0].userNum}</td>
				</tr>
				<tr>
					<td>부서</td>
					<td align="center">{deptTypes[userInfo[0].deptNo].value}</td>
				</tr>
				<tr>
					<td>직급</td>
					<td align="center">{jobTypes[userInfo[0].jobNo].value}</td>
				</tr>
				<tr>
					<td>연락처</td>
					<td align="center">{userInfo[0].userPhone}</td>
				</tr>
				<tr>
					<td>이메일</td>
					<td align="center">{userInfo[0].userEmail}</td>
				</tr>
				<tr>
					<td>생년월일</td>
					<td align="center">{userInfo[0].userBirth}</td>
				</tr>
			</table>
		</div>
	);
};

export default MyInformation;