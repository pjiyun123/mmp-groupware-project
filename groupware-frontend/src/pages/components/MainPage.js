import React from "react";
import { Routes, Route } from "react-router-dom";
import HeaderContainer from "./../../components/Header/HeaderContainer";
import SideMenuContainer from "./../../components/SideMenu/SideMenuContainer";
import CalendarContainer from "./../../components/Calendar/CalendarContainer";
import BoardContainer from "./../../components/Board/BoardContainer";
import WritingContainer from "./../../components/Writing/WritingContainer";
import MyPageContainer from "../../components/MyPage/MyPageContainer";
import EmployeesContainer from "../../components/Employees/EmployeesContainer";
import ApprForm from "./../../components/Board/components/ApprForm";
import AddApprForm from "../../components/Board/components/AddApprForm";
import classes from "../styles/MainPage.module.css";
import BusinesslogDetail from "../../components/Board/components/BusinesslogDetail";
import ApprFormDetail from "../../components/Board/components/ApprFormDetail";
import MyAppr from "../../components/Board/components/MyAppr";
import RequestAppr from "../../components/Board/components/RequestAppr";
import ApprDetail from './../../components/Board/components/ApprDetail';

const MainPage = () => {
  return (
    <>
      <HeaderContainer />
      <div className={classes.container}>
        <SideMenuContainer />
        <Routes>
          <Route path="/mypage/*" element={<MyPageContainer />} />
          <Route path="/calendar/*" element={<CalendarContainer />} />
          <Route
            path="/businesslog/*"
            element={<BoardContainer menuType="업무일지" />}
          />
          <Route path="/businesslog/:no" element={<BusinesslogDetail />} />
          <Route path="/businesslog/modify/:no" element={<BusinesslogDetail />} />
          <Route path="/appr/*" element={<BoardContainer menuType="결재" />} />
          <Route path="/appr/:no" element={<ApprDetail />} />
          <Route path="/appr/my" element={<MyAppr />} />
          <Route path="/appr/my/:no" element={<ApprDetail />} />
          <Route path="/appr/request" element={<RequestAppr />} />
          <Route path="/appr/request/:no" element={<ApprDetail />} />
          <Route path="/appr/form" element={<ApprForm />} />
          <Route path="/appr/form/:no" element={<ApprFormDetail />} />
          <Route path="/appr/form/add" element={<AddApprForm />} />
          <Route
            path="businesslog/writing/*"
            element={<WritingContainer menuType="업무일지" />}
          />
          <Route
            path="appr/writing/*"
            element={<WritingContainer menuType="결재" />}
          />
          <Route path="/employees/*" element={<EmployeesContainer />} />
        </Routes>
      </div>
    </>
  );
};

export default MainPage;
