import React, { useState, useRef } from "react";
import axios from "axios";
import CalDropdownInput from "./CalDropdownInput";
import calCategoryTypes from "../../../assets/calCategoryTypes";
import baseUrl from "../../../assets/baseUrl";
import { useNavigate } from "react-router-dom";
import classes from "../styles/CalCreate.module.css";

const CalCreate = ({ setNewCreated }) => {
  // const [created, setCreated] = useState(false);
  const navigate = useNavigate();

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
    // console.log(newCalInfo);
    const user = localStorage.getItem("user");
    const userInfo = JSON.parse(user);
    const calPostUrl = baseUrl + "/calendar/" + userInfo[0].userNo;
    axios({
      method: "post",
      url: calPostUrl,
      data: newCalInfo,
    }).then((response) => {
      // setCreated(true);
      setNewCreated(true);
      alert("일정이 등록되었습니다.");
      navigate("/calendar");
    });
  };

  return (
    <div className={classes.container}>
      <h2>일정등록</h2>
      <form onSubmit={submitHandler}>
        <table className={classes.ccTable}>
          <tbody>
            <tr>
              <td className={classes.type}>일정 제목</td>
              <td>
                <input
                  className={classes.inputWindow}
                  type="text"
                  placeholder="일정 제목을 입력하세요."
                  ref={titleRef}
                />
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className={classes.type}>카테고리</td>
              <td>
                <CalDropdownInput
                  dropdownList={calCategoryTypes}
                  setSelectedDropValue={setEnteredCategory}
                />
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className={classes.type}>날짜</td>
              <td>
                <input
                  className={classes.inputWindow}
                  type="date"
                  ref={dateRef}
                />
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className={classes.type}>시작 시간</td>
              <td>
                <input
                  className={classes.inputWindow}
                  type="time"
                  ref={startRef}
                />
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className={classes.type}>완료 시간</td>
              <td>
                <input
                  className={classes.inputWindow}
                  type="time"
                  ref={finishRef}
                />
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className={classes.type}>일정 장소</td>
              <td>
                <input
                  className={classes.inputWindow}
                  type="text"
                  placeholder="일정 장소를 입력하세요."
                  ref={placeRef}
                />
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className={classes.type}>일정 내용</td>
              <td>
                <textarea
                  className={`${classes.inputWindow} ${classes.writearea}`}
                  type="text"
                  placeholder="일정 내용을 입력하세요."
                  ref={contentRef}
                />
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className={classes.type}>중요 일정 여부</td>

              <td className={`${classes.inputWindow} ${classes.radio}`}>
                <input type="radio" name="majorYn" value="Y" />
                예
                <input type="radio" name="majorYn" value="N" />
                아니오
              </td>
            </tr>
          </tbody>
        </table>
        <div className={classes.btnContainer}>
          <button className={classes.btn}>저장</button>
        </div>
      </form>
      {/* {created ? <h4>일정이 등록되었습니다.</h4> : null} */}
    </div>
  );
};

export default CalCreate;
