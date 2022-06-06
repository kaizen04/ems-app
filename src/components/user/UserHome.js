import React, { Component } from "react";
import { UserNavigation } from "../UserNavigation.js";

export class UserHome extends Component {
  render() {
    return (
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

        <UserNavigation />
      </div>
    );
  }
}
