import React, { Component } from "react";
import { variables } from "../../api/Variable.js";
import { UserNavigation } from "../UserNavigation.js";

export class UserSalaryReport extends Component {
  constructor(props) {
    super(props);

    this.state = {
      salarys: {},
    };
  }

  refreshList() {
    fetch(variables.API_URL + "SalaryReports/" + sessionStorage.getItem("pan"))
      .then((response) => response.json())
      .then((data) => {
        this.setState({ salarys: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  render() {
    return (
      <div>
        <div
          className="App container"
          style={{
            backgroundColor: "#B8E8FF",
          }}
        >
          <h1
            className="d-flex justify-content-center m-3"
            style={{
              color: "darkblue",
              fontWeight: "bold",
            }}
          >
            Employee Management System
          </h1>

          <UserNavigation />

          <table className="table table-borderless">
            <tbody>
              <tr>
                <td scope="row">
                  <label>EmployeeID:</label>
                </td>
                <td>{this.state.salarys.employeeId}</td>
              </tr>
              <tr>
                <td scope="row">
                  <label>Employee Name:</label>
                </td>
                <td>{this.state.salarys.employeeName}</td>
              </tr>
              <tr>
                <td scope="row">
                  <label>Email</label>
                </td>
                <td>{this.state.salarys.email}</td>
              </tr>
              <tr>
                <td scope="row">
                  <label>Designation :</label>
                </td>
                <td>{this.state.salarys.designation}</td>
              </tr>
              <tr>
                <td scope="row">
                  <label>PAN</label>
                </td>
                <td>{this.state.salarys.pan}</td>
              </tr>
              <tr>
                <td scope="row">
                  <label>Bank Account</label>
                </td>
                <td>{this.state.salarys.bankAccount}</td>
              </tr>
              <tr>
                <td scope="row">
                  <label>DOJ:</label>
                </td>
                <td>{this.state.salarys.doj}</td>
              </tr>
              <tr>
                <td scope="row">
                  <label>PF Account</label>
                </td>
                <td>{this.state.salarys.pfAccount}</td>
              </tr>

              <tr>
                <td scope="row">
                  <label>UAN: </label>
                </td>
                <td>{this.state.salarys.uan}</td>
              </tr>
              <tr>
                <td scope="row">
                  <label>Available Days:</label>
                </td>
                <td>{this.state.salarys.availableDays}</td>
              </tr>
              <tr>
                <td scope="row">
                  <label>Paid Days:</label>
                </td>
                <td>{this.state.salarys.paidDays}</td>
              </tr>
              <tr>
                <td scope="row">
                  <label>Salary:</label>
                </td>
                <td>Rs. {this.state.salarys.salary}.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
