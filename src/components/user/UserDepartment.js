import React, { Component } from "react";
import { variables } from "../../api/Variable.js";
import { UserNavigation } from "../UserNavigation.js";

export class UserDepartment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      departments: [],
    };
  }

  async refreshList() {
    console.log(variables.API_URL + "departments");
    await fetch(variables.API_URL + "departments")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ departments: data });
      });
  }

  async componentDidMount() {
    await this.refreshList();
  }

  componentDidUpdate() {
    this.refreshList();
  }

  render() {
    let departments = this.state.departments;
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
          <table className="table table-striped">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>Department Id</th>
                <th>Department Name</th>
              </tr>
            </thead>
            <tbody>
              {departments.map((dep) => (
                <tr key={dep.departmentId}>
                  <td></td>
                  <td></td>
                  <td>{dep.departmentId}</td>
                  <td>{dep.departmentName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
