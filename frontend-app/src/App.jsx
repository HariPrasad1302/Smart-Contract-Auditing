import React from "react";
import Page from "./pages/Home/page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

const routes = (
  <Router>
    <Routes>
      <Route path="/" exact element={<Page />} />
      <Route path="/Login" exact element={<Login />} />
      <Route path="/Signup" exact element={<SignUp />} />
    </Routes>
  </Router>
);
const App = () => {
  return <div>{routes}</div>;
};

export default App;
