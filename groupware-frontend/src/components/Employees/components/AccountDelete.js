import React, { useState } from 'react';
import axios from 'axios';
import InquiryResult from './InquiryResult';

const AccountDelete = () => {
	const [idInput, setIdInput] = useState("");
	const [list, setList] = useState([]);

	const onChange = (e) => {
		setIdInput(e.target.value);
	}

	const searchHandler = () => {
		axios({
			method: "get", 
			url: "//localhost:8080/users", 
		})
		.then((response) => {
			setList(response.data.filter((employee) => employee.userId == idInput));
		});
	};

	const deleteHandler = () => {
		const deleteUrl = "//localhost:8080/users/delete/" + idInput
		axios({
			method: "delete",
			url: deleteUrl, 
		}).then((response) => console.log(response))
	}

	return (
		<div className='deleteContainer'>
			<div className='accountInquiry'>
				<h1>
					삭제할 계정 조회 <input type='text' placeholder='사번입력창' onChange={onChange} />
					<button className='inquiryBtn' onClick={searchHandler}>조회</button>
				</h1>
			</div>
			<h3>조회결과</h3>
			<InquiryResult list={list} />
			<button className='accountDeleteBtn' onClick={deleteHandler}>삭제</button>
		</div>
	);
};

export default AccountDelete;