import React, { useState, useRef } from 'react';
import axios from 'axios';
import CalDropdownInput from './CalDropdownInput';
import calCategoryTypes from '../../../assets/calCategoryTypes';
import baseUrl from '../../../assets/baseUrl';

const CalCreate = () => {
	const [created, setCreated] = useState(false);

	const [enteredCategory, setEnteredCategory] = useState(
    calCategoryTypes[0].id
  );

	const titleRef = useRef();
	const dateRef = useRef();
	const startRef = useRef();
	const finishRef = useRef();
	const placeRef = useRef();
	const contentRef = useRef();

	const submitHandler = (e) => {
		e.preventDefault();

		const enteredTitle = titleRef.current.value;
		const enteredDate = dateRef.current.value;
		const enteredStart = startRef.current.value;
		const enteredFinish = finishRef.current.value;
		const enteredPlace = placeRef.current.value;
		const enteredContent = contentRef.current.value;
		const enteredMajorYn = e.target.majorYn.value;

		const newCalInfo = {
			ctNo: enteredCategory,
			calTit: enteredTitle,
			calContent: enteredContent,
			calDate: enteredDate,
			calStartTime: enteredStart,
			calEndTime: enteredFinish,
			calPlace: enteredPlace,
			calMajor: enteredMajorYn,
		};
		console.log(newCalInfo);
		const user = localStorage.getItem("user");
		const userInfo = JSON.parse(user);
		const calPostUrl = baseUrl + "/calendar/" + userInfo[0].userNo;
		axios({
			method: "post",
			url: calPostUrl,
			data: newCalInfo,
		}).then((response) => {
			setCreated(true);
		});
	}

	return (
		<div>
			<form onSubmit={submitHandler}>
				<h3 className="infoType">
          일정 제목 : <input type="text" ref={titleRef} />
        </h3>
				<h3 className="infoType">
          카테고리 :{" "}
          <CalDropdownInput
            dropdownList={calCategoryTypes}
            setSelectedDropValue={setEnteredCategory}
          />
        </h3>
				<h3 className="infoType">
          날짜 : <input type="date" ref={dateRef} />
        </h3>
				<h3 className="infoType">
					시간 :
          <label>시작 시간 :</label> <input type="time" ref={startRef} />
					<label>완료 시간 :</label> <input type="time" ref={finishRef} />
        </h3>
				<h3 className="infoType">
          일정 장소 : <input type="text" ref={placeRef} />
        </h3>
				<h3 className="infoType">
          일정 내용 : <textarea type="text" ref={contentRef} />
        </h3>
				<h3 className='infoType'>
					중요 일정 여부 : 
					<input type='radio' name='majorYn' value='Y' />예
					<input type='radio' name='majorYn' value='N' />아니오
				</h3>
				<button>저장</button>
			</form>
			{created ? <h4>일정이 등록되었습니다.</h4> : null}
		</div>
	);
};

export default CalCreate;