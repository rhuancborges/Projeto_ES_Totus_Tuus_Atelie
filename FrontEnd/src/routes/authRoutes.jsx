import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../pages/Login/Login';

const AuthRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default AuthRoutes;