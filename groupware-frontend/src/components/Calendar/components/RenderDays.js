import React from 'react';
import '../styles/calendar.css';

const RenderDays = () => {
	const days = [];
	const date = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	for (let i=0; i<7; i++) {
		days.push(
			<div className='col' key={i}>
				{date[i]}
			</div>
		);
	}
	return (
		<div className='days row'>
			{days}
		</div>
	);
};

export default RenderDays;