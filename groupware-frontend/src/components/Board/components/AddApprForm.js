import React, { useState } from 'react';
import axios from 'axios';

const AddApprForm = () => {
	const [afNm, setafNm] = useState('');
	const [apNo, setapNo] = useState();

	return (
		<>
			<div>
				<span>보고/결재 {'>'} 결재양식등록</span>
			</div>
			<form>
				<label>결재 종류</label>
				<input type='text' />
				<input type='file' />
				<button>저장</button>
			</form>
			
		</>
	);
};

export default AddApprForm;