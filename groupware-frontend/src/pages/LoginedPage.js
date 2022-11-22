import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import MenuPage from "./components/MenuPage";
import MainPage from "./components/MainPage";

const LoginedPage = ({ loginedUser }) => {
	return (
		<Routes>
        <Route
          path="/"
          element={<MenuPage />}
        />
				<Route path='*' element={<MainPage loginedUser={loginedUser} />} />
    </Routes>
	);
};

export default LoginedPage;