import React, { Component } from "react";
import { variables } from "../../api/Variable.js";
import { Navigation } from "../Navigation.js";
import bgImage from "../../images/bg.png";

import { ButtonToolbar } from "react-bootstrap";
import { AddDepartmentModal } from "./AddDepartmentModal.js";
import { EditDepartmentModal } from "./EditDepartmentModal";

export class Department extends Component {
  constructor(props) {
    super(props);

    this.state = {
      departments: [],
      addModalShow: false,
      editModalShow: false,
    };
  }

  async refreshList() {
    await fetch(variables.API_URL + "departments")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ departments: data });
      });
  }

  async componentDidMount() {
    await this.refreshList();
  }

  componentDidUpdate() {
    this.refreshList();
  }

  deleteDep(depid) {
    if (window.confirm("Are you sure?")) {
      fetch(variables.API_URL + "Departments/" + depid, {
        method: "DELETE",
        header: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    }
  }

  render() {
    let departments = this.state.departments;
    let addModalClose = () => this.setState({ addModalShow: false });
    let editModalClose = () => this.setState({ editModalShow: false });
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

          <Navigation />

          <ButtonToolbar className="float-end">
            <button
              type="button"
              className="btn btn-primary m-2"
              data-bs-toggle="modal"
              data-bs-target="exampleModal"
              onClick={() => this.setState({ addModalShow: true })}
            >
              Add Department
            </button>
            <AddDepartmentModal
              show={this.state.addModalShow}
              onHide={addModalClose}
            />
          </ButtonToolbar>

          <table
            bordered
            hover
            className="table table-striped"
            // style={{ backgroundColor: "white" }}
          >
            <thead>
              <tr>
                <th>Department Id</th>
                <th>Department Name</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {departments.map((dep) => (
                <tr key={dep.departmentId}>
                  <td>{dep.departmentId}</td>
                  <td>{dep.departmentName}</td>
                  <td>
                    <ButtonToolbar>
                      <button
                        type="button"
                        className="btn btn-light mr-1"
                        onClick={() =>
                          this.setState({
                            editModalShow: true,
                            depid: dep.departmentId,
                            depname: dep.departmentName,
                          })
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-pencil-square"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fillRule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                          />
                        </svg>
                      </button>

                      <button
                        type="button"
                        className="btn btn-light mr-1"
                        onClick={() => this.deleteDep(dep.departmentId)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-trash-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                        </svg>
                      </button>

                      <EditDepartmentModal
                        show={this.state.editModalShow}
                        onHide={editModalClose}
                        depid={this.departmentId}
                        depname={this.departmentName}
                      />
                    </ButtonToolbar>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
