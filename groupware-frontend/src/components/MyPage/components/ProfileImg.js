import React from 'react';

const ProfileImg = ({ imgPath }) => {
	return (
		<div className='ProfileImgContainer'>
			<img src='imgPath' alt='profile image' />
		</div>
	);
};

export default ProfileImg;