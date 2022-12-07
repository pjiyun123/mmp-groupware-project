import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import InfoModiBtn from "./components/InfoModiBtn";
import InfoModify from "./components/InfoModify";
import MyInformation from "./components/MyInformation";
import ProfileImg from "./components/ProfileImg";
import { useNavigate } from 'react-router-dom';

const MyPageContainer = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('modify');
  }
  return (
    <div className="MyPageContainer">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MyInformation />
              {/* <ProfileImg /> */}
              <InfoModiBtn onClick={onClick} />
              {/* <Link to="modify">
                <InfoModiBtn />
              </Link> */}
            </>
          }
        />
        <Route
          path="/modify"
          element={
            <InfoModify />
          }
        />
      </Routes>
    </div>
  );
};

export default MyPageContainer;
