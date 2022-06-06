import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class UserNavigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item m-1">
            <NavLink
              className="btn btn-light btn-outline-primary"
              to="/userhome"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item m-1">
            <NavLink
              className="btn btn-light btn-outline-primary"
              to="/userdepartment"
            >
              Department
            </NavLink>
          </li>
          <li className="nav-item m-1">
            <NavLink
              className="btn btn-light btn-outline-primary"
              to="/userinfo"
            >
              Employee Info
            </NavLink>
          </li>
          <li className="nav-item m-1">
            <NavLink
              className="btn btn-light btn-outline-primary"
              to="/usersalaryreport"
            >
              Salary Report
            </NavLink>
          </li>
          <li className="nav-item m-1 justify-content-end">
            <NavLink className="btn btn-light btn-outline-primary" to="/login">
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
