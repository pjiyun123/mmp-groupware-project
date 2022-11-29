import React from 'react';

const WriteButton = ({ menuType, onClick }) => {
	return (
		<button onClick={onClick}>
			{menuType} 작성
		</button>
	);
};

export default WriteButton;