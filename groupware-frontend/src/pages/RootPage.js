import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import LoginedPage from "./LoginedPage";


const RootPage = () => {
  const isLogin = false;
  
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={isLogin === true ? <LoginedPage /> : <LoginPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RootPage;
