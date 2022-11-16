import React from 'react';
import InquiryResult from './InquiryResult';

const AccountDelete = () => {
	return (
		<div className='deleteContainer'>
			<div className='accountInquiry'>
				<h1>
					삭제할 계정 조회 <input type='text' placeholder='사번입력창' />
					<button className='inquiryBtn'>조회</button>
				</h1>
			</div>
			<h3>조회결과</h3>
			<InquiryResult />
			<button className='accountDeleteBtn'>삭제</button>
		</div>
	);
};

export default AccountDelete;