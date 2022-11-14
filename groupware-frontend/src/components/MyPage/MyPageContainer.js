import React from "react";
import InfoModiBtn from "./components/InfoModiBtn";
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
  return (
    <div className="MyPageContainer">
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
			<InfoModiBtn />
    </div>
  );
};

export default MyPageContainer;
