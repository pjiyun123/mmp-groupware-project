import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import LoginedPage from "./LoginedPage";

const RootPage = () => {
  const user = localStorage.getItem("user");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={user ? <LoginedPage /> : <LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootPage;
