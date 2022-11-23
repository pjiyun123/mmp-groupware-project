import React from 'react';

const MyInformation = () => {
	const user = localStorage.getItem("user");
	const userInfo = JSON.parse(user);

	return (
		<div className='MyInformationContainer'>
			<h1>{userInfo[0].userName}</h1>
			<table>
				<tr>
					<td>사번</td>
					<td align="center">{userInfo[0].userId}</td>
				</tr>
				<tr>
					<td>부서</td>
					<td align="center">{userInfo[0].deptId}</td>
				</tr>
				<tr>
					<td>직급</td>
					<td align="center">{userInfo[0].rankId}</td>
				</tr>
				<tr>
					<td>연락처</td>
					<td align="center">{userInfo[0].phone}</td>
				</tr>
				<tr>
					<td>이메일</td>
					<td align="center">{userInfo[0].email}</td>
				</tr>
				<tr>
					<td>생년월일</td>
					<td align="center">{userInfo[0].birthDate}</td>
				</tr>
			</table>
		</div>
	);
};

export default MyInformation;