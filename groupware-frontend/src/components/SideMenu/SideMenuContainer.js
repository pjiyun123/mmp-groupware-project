import React from "react";
import { Link } from "react-router-dom";
import MainMenu from "./components/MainMenu";
import SubMenu from "./components/SubMenu";
import classes from "./styles/SideMenuContainer.module.css";

const SideMenuContainer = () => {
  return (
    <div className={classes.sideMenuContainer}>
      <div className={classes.sideMainMenu}>
        <Link to="/">
          <MainMenu menuName="HOME" />
        </Link>
      </div>
      <div className={classes.sideMainMenu}>
        <Link to="calendar">
          <MainMenu menuName="캘린더" />
        </Link>
      </div>
      <div className={classes.sideSubMenu}>
        <Link to="calendar">
          <SubMenu menuName="일정확인" />
        </Link>
      </div>
      <div className={classes.sideSubMenu}>
				<Link to="calendar/create">
					<SubMenu menuName="일정등록" />
				</Link>
			</div>
      <div className={classes.sideMainMenu}>
        <Link to="businesslog">
          <MainMenu menuName="업무일지" />
        </Link>
      </div>

      <div className={classes.sideMainMenu}>
        <Link to="appr">
          <MainMenu menuName="보고/결재" />
        </Link>
      </div>
      <div className={classes.sideSubMenu}>
        <Link to="appr">
          <SubMenu menuName="결재" />
        </Link>
      </div>
      <div className={classes.sideSubMenu}>
        <Link to="appr/">
          <SubMenu menuName="결재신청" />
        </Link>
      </div>
      <div className={classes.sideSubMenu}>
        <Link to="appr/form">
          <SubMenu menuName="결재양식" />
        </Link>
      </div>
      <div className={classes.sideSubMenu}>
        <Link to="appr/request">
          <SubMenu menuName="결재할 문서" />
        </Link>
      </div>
      <div className={classes.sideMainMenu}>
        <Link to="employees">
          <MainMenu menuName="직원조회" />
        </Link>
      </div>
      <div className={classes.sideSubMenu}>
        <Link to="employees">
          <SubMenu menuName="직원목록" />
        </Link>
      </div>
      <div className={classes.sideSubMenu}>
        <Link to="employees/create">
          <SubMenu menuName="직원계정생성" />
        </Link>
      </div>
      <div className={classes.sideSubMenu}>
        <Link to="employees/delete">
          <SubMenu menuName="직원계정삭제" />
        </Link>
      </div>
      <div className={classes.sideMainMenu}>
        <Link to="mypage">
          <SubMenu menuName="마이페이지" />
        </Link>
      </div>
    </div>
  );
};

export default SideMenuContainer;
