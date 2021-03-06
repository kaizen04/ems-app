import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item m-1">
            <NavLink
              className="btn btn-light btn-outline-primary"
              to="/adminhome"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item m-1">
            <NavLink
              className="btn btn-light btn-outline-primary"
              to="/department"
            >
              Department
            </NavLink>
          </li>
          <li className="nav-item m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/user">
              Employee Info
            </NavLink>
          </li>
          <li className="nav-item m-1">
            <NavLink
              className="btn btn-light btn-outline-primary"
              to="/salaryreport"
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
