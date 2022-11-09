import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import MenuPage from "./components/MenuPage";
import MainPage from "./components/MainPage";

const LoginedPage = () => {
	return (
		<Routes>
        <Route
          path="/"
          element={<MenuPage />}
        />
				<Route path='*' element={<MainPage />} />
    </Routes>
	);
};

export default LoginedPage;