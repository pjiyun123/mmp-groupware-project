import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import LoginedPage from "./LoginedPage";

const RootPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [loginedUser, setLoginedUser] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            isLogin === true ? (
              <LoginedPage loginedUser={loginedUser} />
            ) : (
              <LoginPage
                setIsLogin={setIsLogin}
                setLoginedUser={setLoginedUser}
              />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RootPage;
