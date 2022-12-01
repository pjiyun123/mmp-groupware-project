import React from 'react';

const InfoModiBtn = ( {onClick} ) => {
	return (
		<>
			<button className='InfoModiBtn' onClick={onClick}>내 정보 수정</button>
		</>
	);
};

export default InfoModiBtn;