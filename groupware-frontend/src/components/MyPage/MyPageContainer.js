import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom';
import InfoModiBtn from "./components/InfoModiBtn";
import InfoModify from "./components/InfoModify";
import MyInformation from "./components/MyInformation";
import ProfileImg from "./components/ProfileImg";

const MyPageContainer = () => {
  const dummyInformation = {
    name: "홍길동",
    userId: "ABCDE123",
    dept: "개발1팀",
    rank: "대리",
    phone: "010-1234-5678",
    email: "gildong@gmail.com",
    birthDate: "1990.01.01",
  };

  const [myInfo, setMyInfo] = useState([]);

  useEffect(() => {
		axios({
			method: "get", 
			url: "//localhost:8080/users", 
		})
		.then((response) => {
			setMyInfo(response.data);
		})
	} , []);

  return (
    <div className="MyPageContainer">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MyInformation
                name={dummyInformation.name}
                userId={dummyInformation.userId}
                dept={dummyInformation.dept}
                rank={dummyInformation.rank}
                phone={dummyInformation.phone}
                email={dummyInformation.email}
                birthDate={dummyInformation.birthDate}
              />
              <ProfileImg />
              <Link to="modify">
                <InfoModiBtn />
              </Link>
            </>
          }
        />
        <Route
          path="/modify"
          element={
            <InfoModify
              name={dummyInformation.name}
              userId={dummyInformation.userId}
              dept={dummyInformation.dept}
              rank={dummyInformation.rank}
              phone={dummyInformation.phone}
              email={dummyInformation.email}
              birthDate={dummyInformation.birthDate}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default MyPageContainer;
