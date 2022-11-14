import React from 'react';

const MyInformation = ({ name, userId, dept, rank, phone, email, birthDate }) => {
	return (
		<div className='MyInformationContainer'>
			<h1>{name}</h1>
			<h3>사번 <span>{userId}</span></h3>
			<h3>부서 <span>{dept}</span></h3>
			<h3>직급 <span>{rank}</span></h3>
			<h3>연락처 <span>{phone}</span></h3>
			<h3>이메일 <span>{email}</span></h3>
			<h3>생년월일 <span>{birthDate}</span></h3>
		</div>
	);
};

export default MyInformation;