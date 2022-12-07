import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isSameMonth,
  isSameDay,
  format,
  parse,
  addDays,
} from "date-fns";
import React, { useState } from "react";
import DetailModal from "../../Common/DetailModal";
import "../styles/calendar.css";

const RenderCells = ({ currentMonth, selectedDate, onDateClick, calList }) => {
  const monthStart = startOfMonth(currentMonth); // Tue Nov 01 2022 00:00:00 GMT+0900 (한국 표준시) - Date 객체
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCalNo, setSelectedCalNo] = useState();
  const onClick = (e) => {
    setIsModalOpen(true);
    setSelectedCalNo(e.target.value);
  }
  const schedule = calList.map((sche) => {
    return {
      calDate: new Date(sche.calDate),
      scheduleContent: (
        <>
          <button
            className={sche.calMajor === "Y" ? "schedule major" : "schedule"}
            key={sche.calNo}
            value={sche.calNo}
            onClick={onClick}
          >
            {/* {sche.userNo == null ? null : "["+sche.userNm+"]"}*/}
            {sche.calTit}
            
          </button>
          {isModalOpen ? (
            <DetailModal
            calList={calList}
            setIsModalOpen={setIsModalOpen}
            calNo={selectedCalNo}
           />
          ) : null}
          
        </>
      ),
    };
  });

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");
      const cloneDay = day;

      days.push(
        <div
          className={`col cell ${
            !isSameMonth(day, monthStart)
              ? "disabled"
              : isSameDay(day, selectedDate)
              ? "selected"
              : format(currentMonth, "M") !== format(day, "M")
              ? "not-valid"
              : "valid"
          }`}
          key={day}
        >
          <span
            className={
              format(currentMonth, "M") !== format(day, "M")
                ? "text not-valid"
                : ""
            }
          >
            {formattedDate}
          </span>
          {
            schedule.map((s) =>
              isSameDay(day, s.calDate) ? s.scheduleContent : null
            )
          }
        </div>
      );
      day = addDays(day, 1);
    }
    rows.push(
      <div className="row" key={day}>
        {days}
      </div>
    );
    days = [];
  }

  return <div className="body">{rows}</div>;
};

export default RenderCells;