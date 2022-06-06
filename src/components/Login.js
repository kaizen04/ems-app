import React, { Component } from "react";
import "../css/LoginStyle.css";
import { Form } from "react-bootstrap";
import bgImage from "../images/bgimg.png";
import { variables } from "../api/Variable.js";

export default class LoginIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      pass: "",
      errors: {},
    };
  }

  resetForm = () => {
    this.setState({
      email: "",
      pass: "",
      errors: {},
    });
  };

  handleValidations = () => {
    let errors = {};
    let formIsValid = true;

    if (typeof this.state.email !== "undefined") {
      if (!this.state.email) {
        formIsValid = false;
        errors["email"] = "Cannot be empty";
      }
    }

    if (typeof this.state.pass !== "undefined") {
      if (!this.state.pass) {
        formIsValid = false;
        errors["pass"] = "Cannot be empty";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  };

  handleLogin = async (e) => {
    e.preventDefault();
    if (this.handleValidations()) {
      let obj = {
        employeeId: 0,
        name: "string",
        email: this.state.email,
        gender: "string",
        dob: "string",
        pan: "string",
        contact: "string",
        address: "string",
        doj: "string",
        departmentId: 0,
        department: {
          departmentId: 0,
          departmentName: "string",
        },
        departmentName: "string",
        designation: "string",
        password: this.state.pass,
        photoFileName: "string",
        role: "string",
      };

      const data = await fetch(variables.API_URL + "Authenticate", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      })
        .then((res) => res.json())
        .then((result) => result);
      if (data === "Invalid Credentials") {
        this.resetForm();
        this.setState({ errors: { pass: "Enter valid password or userid" } });
      } else {
        sessionStorage.setItem("token", data[0]);
        sessionStorage.setItem("id", data[1]);
        sessionStorage.setItem("email", data[2]);
        sessionStorage.setItem("pan", data[3]);
        sessionStorage.setItem("userType", data[4]);
        if (data[4] === "Admin") window.location = "/adminhome";
        if (data[4] === "Employee") window.location = "./userhome";
      }
    }
  };

  render() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("pan");
    sessionStorage.removeItem("userType");

    return (
      <div
        className="SignIn-Container"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="SignIn-SubContainer">
          <Form>
            <h2>Employee Management System</h2>
            <h3>LogIn</h3>
            <div className="mb-3">
              <label>UserID</label>
              <input
                type="id"
                className="form-control"
                placeholder="Enter userid"
                value={this.state.email}
                onChange={(e) => {
                  this.setState({ email: e.target.value });
                }}
              />
              <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
            </div>
            <div className="mb-3" style={{ paddingTop: "15px" }}>
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={this.state.pass}
                onChange={(e) => {
                  this.setState({ pass: e.target.value });
                }}
              />
              <span style={{ color: "red" }}>{this.state.errors["pass"]}</span>
            </div>
            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.handleLogin}
              >
                Submit
              </button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
