import React, { Component } from "react";
import "../css/LoginStyle.css";
import { Form } from "react-bootstrap";
import bgImage from "../images/bgimg.png";
import { variables } from "../api/Variable.js";

export default class LoginIn extends Component {
  render() {
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
          <form>
            <h2>Employee Management System</h2>
            <h3>LogIn</h3>
            <div className="mb-3">
              <label>UserID</label>
              <input
                type="id"
                className="form-control"
                placeholder="Enter userid"
              />
            </div>
            <div className="mb-3" style={{ paddingTop: "15px" }}>
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <div class="form-check form-check-inline m-3">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
                checked
              />
              <label class="form-check-label" for="inlineRadio1">
                Admin
              </label>
            </div>
            <div class="form-check form-check-inline m-3">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">
                Employee
              </label>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
