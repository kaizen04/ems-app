import React, { Component } from "react";
import { variables } from "../../api/Variable.js";
import { UserNavigation } from "../UserNavigation.js";

export class UserInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deps: [],
      emps: {},
    };
  }

  async refreshList() {
    await fetch(variables.API_URL + "Users/" + sessionStorage.getItem("email"))
      .then((response) => response.json())
      .then((data) => {
        this.setState({ emps: data });
      });

    fetch(variables.API_URL + "departments")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ deps: data });
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
                <td>{this.state.emps.employeeId}</td>
              </tr>
              <tr>
                <td scope="row">
                  <label>Employee Name:</label>
                </td>
                <td>{this.state.emps.name}</td>
              </tr>
              <tr>
                <td scope="row">
                  <label>Email:</label>
                </td>
                <td>{this.state.emps.email}</td>
              </tr>
              <tr>
                <td scope="row">
                  <label>DOB</label>
                </td>
                <td>{this.state.emps.dob}</td>
              </tr>
              <tr>
                <td scope="row">
                  <label>Gender</label>
                </td>
                <td>{this.state.emps.gender}</td>
              </tr>
              <tr>
                <td scope="row">
                  <label>PAN</label>
                </td>
                <td>{this.state.emps.pan}</td>
              </tr>
              <tr>
                <td scope="row">
                  <label>Contact: </label>
                </td>
                <td>{this.state.emps.contact}</td>
              </tr>
              <tr>
                <td scope="row">
                  <label>Address:</label>
                </td>
                <td>{this.state.emps.address}</td>
              </tr>
              <tr>
                <td scope="row">
                  <label>DOJ:</label>
                </td>
                <td>{this.state.emps.doj}</td>
              </tr>
              <tr>
                <td scope="row">
                  <label>Department Name:</label>
                </td>
                <td>{this.state.emps.departmentName}</td>
              </tr>
              <tr>
                <td scope="row">
                  <label>Designation :</label>
                </td>
                <td>{this.state.emps.designation}</td>
              </tr>
              <tr>
                <td scope="row">
                  <label>Role:</label>
                </td>
                <td>{this.state.emps.role}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
