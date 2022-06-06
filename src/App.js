import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { AdminHome } from "./components/admin/AdminHome";
import { Department } from "./components/admin/Department";
import { User } from "./components/admin/User";
import { SalaryReport } from "./components/admin/SalaryReport";
import { UserHome } from "./components/user/UserHome";
import { UserDepartment } from "./components/user/UserDepartment";
import { UserSalaryReport } from "./components/user/UserSalaryReport";
import { UserInfo } from "./components/user/UserInfo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/department" element={<Department />} />
          <Route path="/user" element={<User />} />
          <Route path="/salaryreport" element={<SalaryReport />} />
          <Route path="/userhome" element={<UserHome />} />
          <Route path="/userinfo" element={<UserInfo />} />
          <Route path="/userdepartment" element={<UserDepartment />} />
          <Route path="/usersalaryreport" element={<UserSalaryReport />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
