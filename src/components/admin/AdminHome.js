import React, { Component } from "react";
import { Navigation } from "../Navigation";
import bgImage from "../../images/backgroundImage.png";

export class AdminHome extends Component {
  render() {
    return (
      <div
        className="App container"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1
          className="d-flex justify-content-center m-3"
          style={{
            color: "darkblue",
            fontWeight: "bold",
          }}
        >
          Employee Management System - Admin
        </h1>

        <Navigation />
      </div>
    );
  }
}
