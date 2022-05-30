import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Department } from "./Department";
import { Employee } from "./Employee";
import { SalaryReport } from "./SalaryReport";

export class AdminHome extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App container">
          <h1
            className="d-flex justify-content-center m-3"
            style={{
              color: "darkblue",
              fontWeight: "bold",
            }}
          >
            Employee Management System
          </h1>

          <Navigation />

          <Routes>
            <Route path="/department" element={<Department />} />
            <Route path="/department" element={<Department />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/salaryreport" element={<SalaryReport />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
