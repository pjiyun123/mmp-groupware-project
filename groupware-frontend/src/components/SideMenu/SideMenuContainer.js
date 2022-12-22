import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainMenu from "./components/MainMenu";
import SubMenu from "./components/SubMenu";
import classes from "./styles/SideMenuContainer.module.css";

const SideMenuContainer = () => {
  const user = localStorage.getItem("user");
	const userInfo = JSON.parse(user);
  const [clickedMenu, setClickedMenu] = useState('');
  
  return (
    <div className={classes.sideMenuContainer}>
      {/* <div className={classes.sideMainMenu}>
        <Link to="/">
          <MainMenu menuName="HOME" />
        </Link>
      </div> */}
      <div onClick={() => {setClickedMenu('calendar')}} className={clickedMenu.includes('calendar') ? `${classes.sideMainMenu} ${classes.clickedMenu}` : classes.sideMainMenu}>
        <Link to="calendar">
          <MainMenu menuName="캘린더" />
        </Link>
      </div>
      <div onClick={() => {setClickedMenu('calendar')}} className={clickedMenu === 'calendar' ? `${classes.sideSubMenu} ${classes.clickedMenu}` : classes.sideSubMenu}>
        <Link to="calendar">
          <SubMenu menuName="일정확인" />
        </Link>
      </div>
      <div onClick={() => {setClickedMenu('calendar2')}} className={clickedMenu === 'calendar2' ? `${classes.sideSubMenu} ${classes.clickedMenu}` : classes.sideSubMenu}>
				<Link to="calendar/create">
					<SubMenu menuName="일정등록" />
				</Link>
			</div>
      <div onClick={() => {setClickedMenu('bl')}} className={clickedMenu.includes('bl') ? `${classes.sideMainMenu} ${classes.clickedMenu}` : classes.sideMainMenu}>
        <Link to="businesslog">
          <MainMenu menuName="업무일지" />
        </Link>
      </div>

      <div onClick={() => {setClickedMenu('ap')}} className={clickedMenu.includes('ap') ? `${classes.sideMainMenu} ${classes.clickedMenu}` : classes.sideMainMenu}>
        <Link to="appr">
          <MainMenu menuName="보고/결재" />
        </Link>
      </div>
      <div onClick={() => {setClickedMenu('ap')}} className={clickedMenu === 'ap' ? `${classes.sideSubMenu} ${classes.clickedMenu}` : classes.sideSubMenu}>
        <Link to="appr">
          <SubMenu menuName="완료된 결재 목록" />
        </Link>
      </div>
      <div onClick={() => {setClickedMenu('ap2')}} className={clickedMenu === 'ap2' ? `${classes.sideSubMenu} ${classes.clickedMenu}` : classes.sideSubMenu}>
        <Link to="appr/writing">
          <SubMenu menuName="결재신청" />
        </Link>
      </div>
      <div onClick={() => {setClickedMenu('ap3')}} className={clickedMenu === 'ap3' ? `${classes.sideSubMenu} ${classes.clickedMenu}` : classes.sideSubMenu}>
        <Link to="appr/form">
          <SubMenu menuName="결재양식" />
        </Link>
      </div>
      <div onClick={() => {setClickedMenu('ap4')}} className={clickedMenu === 'ap4' ? `${classes.sideSubMenu} ${classes.clickedMenu}` : classes.sideSubMenu}>
        <Link to="appr/my">
          <SubMenu menuName="신청한 결재" />
        </Link>
      </div>
      {userInfo[0].userLv < 3 ? (
        <div onClick={() => {setClickedMenu('ap5')}} className={clickedMenu === 'ap5' ? `${classes.sideSubMenu} ${classes.clickedMenu}` : classes.sideSubMenu}>
          <Link to="appr/request">
            <SubMenu menuName="결재할 문서" />
          </Link>
        </div>
      ) : null}
      
      <div onClick={() => {setClickedMenu('em')}} className={clickedMenu.includes('em') ? `${classes.sideMainMenu} ${classes.clickedMenu}` : classes.sideMainMenu}>
        <Link to="employees">
          <MainMenu menuName="직원조회" />
        </Link>
      </div>
      <div onClick={() => {setClickedMenu('em')}} className={clickedMenu === 'em' ? `${classes.sideSubMenu} ${classes.clickedMenu}` : classes.sideSubMenu}>
        <Link to="employees">
          <SubMenu menuName="직원목록" />
        </Link>
      </div>
      {userInfo[0].userLv < 3 ? (
        <div onClick={() => {setClickedMenu('em2')}} className={clickedMenu === 'em2' ? `${classes.sideSubMenu} ${classes.clickedMenu}` : classes.sideSubMenu}>
          <Link to="employees/create">
            <SubMenu menuName="직원계정생성" />
          </Link>
        </div>
      ) : null}
      {userInfo[0].userLv < 3 ? (
        <div onClick={() => {setClickedMenu('em3')}} className={clickedMenu === 'em3' ? `${classes.sideSubMenu} ${classes.clickedMenu}` : classes.sideSubMenu}>
          <Link to="employees/delete">
            <SubMenu menuName="직원계정삭제" />
          </Link>
        </div>
      ) : null}
      
      <div onClick={() => {setClickedMenu('mp')}} className={clickedMenu.includes('mp') ? `${classes.sideMainMenu} ${classes.clickedMenu}` : classes.sideMainMenu}>
        <Link to="mypage">
          <SubMenu menuName="마이페이지" />
        </Link>
      </div>
    </div>
  );
};

export default SideMenuContainer;
