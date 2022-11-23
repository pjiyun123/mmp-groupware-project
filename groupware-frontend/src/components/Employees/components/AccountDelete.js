import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InquiryResult from './InquiryResult';

const AccountDelete = ({ isList, setIsList }) => {
	const [idInput, setIdInput] = useState("");
	const [list, setList] = useState([]);

	const [searchClicked, setSearchClicked] = useState(false);

	useEffect(() => {
		setIsList(false);
		setSearchClicked(false);
	}, []);


	const onChange = (e) => {
		setIdInput(e.target.value);
		if (idInput.length === 0) {
			setSearchClicked(false);
		}
	}

	const searchHandler = () => {
		setSearchClicked(true);
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
			<InquiryResult list={list} searchClicked={searchClicked} isList={isList} />
			<button className='accountDeleteBtn' onClick={deleteHandler}>삭제</button>
		</div>
	);
};

export default AccountDelete;