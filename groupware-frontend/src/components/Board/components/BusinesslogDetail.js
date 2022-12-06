import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import baseUrl from './../../../assets/baseUrl';
import { useNavigate } from 'react-router-dom';
import Modal from '../../Common/Modal';

const BusinesslogDetail = () => {
	let { no } = useParams();
	const navigate = useNavigate();
	const user = localStorage.getItem("user");
  const userInfo = JSON.parse(user);

	const [isLoading, setIsLoading] = useState(true);
	const [detail, setDetail] = useState([]);
	const [file, setFile] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const getUrl = baseUrl + "/businesslog/" + no;
	const fileUrl = baseUrl + "/businesslog/" + no + "/atc";
	const deleteUrl = baseUrl + "/businesslog/" + no;

	useEffect(() => {
		axios({
			method: "get",
			url: getUrl
		}).then((response) => {
			setDetail(response.data);
		});

		axios({
			method: "get",
			url: fileUrl,
			responseType: 'blob'
		}).then((response) => {
			setFile(response);
		});
	}, [no, getUrl, fileUrl,isLoading]);

	const onModify = () => {
		navigate('')
	}

	const onDelete = () => {
		axios({
			method: "delete",
			url: deleteUrl
		}).then(() => {
			setIsModalOpen(false);
			navigate('/businesslog');
		})
	}

	const onDownload = () => {

	}
	
	return (
		<>
			<div>
				<h2>{detail.blTit}</h2>
				<span>{detail.createDt ? detail.createDt.slice(0, 10) : null}</span>
				<span>{detail.userNm}</span>
				<div>
					{detail.blContent}
				</div>
				<button onClick={onDownload}>다운로드</button>
			</div>
			{userInfo[0].userNo === detail.userNo ? (
				<div>
					<button onClick={onModify}>수정</button>
					<button onClick={() => setIsModalOpen(true)}>삭제</button>
					{isModalOpen ? (
						<Modal onCancel={onDelete} onConfirm={() => setIsModalOpen(false)} />
					) : null} 
				</div>
			) : null}
		</>
	);
};

export default BusinesslogDetail;