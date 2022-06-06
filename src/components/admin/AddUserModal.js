import React, { Component } from "react";
import { Modal, Row, Col, Form, Image } from "react-bootstrap";
import { variables } from "../../api/Variable";
import { Button, Dropdown } from "react-bootstrap";

export class AddUserModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: [],
      employeeId: "",
      name: "",
      email: "",
      gender: "",
      dob: "",
      pan: "",
      contact: "",
      address: "",
      doj: "",
      departmentName: "",
      designation: "",
      password: "",
      role: "Admin",
      a: "",
      errors: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileSelected = this.handleFileSelected.bind(this);
  }

  getUsername = async () => {
    let usernames = await fetch("http://localhost:5001/api/username", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => result);
    return await usernames;
  };

  handleValidation = async () => {
    let errors = {};
    let formIsValid = true;
    let usernaslist = await this.getUsername();
    console.log(usernaslist);
    if (usernaslist.includes(this.state.email)) {
      formIsValid = false;
      errors["userid"] = "Username already present";
    }
    this.setState({ errors: errors });
    return await formIsValid;
  };

  async componentDidMount() {
    await fetch(variables.API_URL + "departments")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ deps: data });
      });
    console.log(this.state.deps);
    this.setState({ departmentName: this.state.deps[0].departmentName });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.handleValidation()) {
      let deptId = 0;
      this.state.deps.forEach((element) => {
        console.log(element);
        if (element.departmentName === event.target.DepartmentName.value) {
          deptId = element.departmentId;
        }
      });

      console.log(deptId);
      let obj = {
        employeeId: this.state.employeeId,
        name: this.state.name,
        email: this.state.email,
        gender: this.state.gender,
        dob: this.state.dob,
        pan: this.state.pan,
        contact: this.state.contact,
        address: this.state.address,
        doj: this.state.doj,
        departmentName: this.state.departmentName,
        designation: this.state.designation,
        password: this.state.password,
        role: this.state.role,
      };
      console.log(obj);
      fetch(variables.API_URL + "Users", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      })
        .then((res) => res.json())
        .then(
          (result) => {
            this.setState({ a: "User Added Suucessfully" });

            setTimeout(() => {
              window.location = "/user";
            }, 2000);
          },
          (error) => {
            alert("Failed");
          }
        );
    }
  }

  handleFileSelected(event) {
    event.preventDefault();
    this.photofilename = event.target.files[0].name;
    const formData = new FormData();
    formData.append(
      "myFile",
      event.target.files[0],
      event.target.files[0].name
    );

    fetch(variables.API_URL + "users/SaveFile", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(
        (result) => {
          this.imagesrc = variables.API_URL + result;
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  render() {
    let s;
    if (this.state.a !== "") {
      s = (
        <div className="alert alert-primary" role="alert">
          {this.state.a}
        </div>
      );
    }
    return (
      <div className="container">
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header clooseButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add Employee
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {s}
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="EmployeeId">
                    <Form.Label>EmployeeId</Form.Label>
                    <Form.Control
                      type="text"
                      name="EmployeeId"
                      required
                      placeholder="EmployeeId"
                      value={this.state.employeeId}
                      onChange={(e) =>
                        this.setState({ employeeId: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group
                    controlId="EmployeeName"
                    style={{ paddingTop: 20 }}
                  >
                    <Form.Label>Employee Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="EmployeeName"
                      required
                      placeholder="EmployeeName"
                      value={this.state.name}
                      onChange={(e) => this.setState({ name: e.target.value })}
                    />
                  </Form.Group>

                  <Form.Group controlId="Email" style={{ paddingTop: 20 }}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="Email"
                      required
                      placeholder="Email"
                      value={this.state.email}
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                    <span style={{ color: "red" }}>
                      {this.state.errors["userid"]}
                    </span>
                  </Form.Group>

                  <Form.Group controlId="Address" style={{ paddingTop: 20 }}>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      name="Address"
                      required
                      placeholder="Address"
                      value={this.state.address}
                      onChange={(e) =>
                        this.setState({ address: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group
                    controlId="DepartmentName"
                    style={{ paddingTop: 20 }}
                  >
                    <Form.Label>Department Name</Form.Label>
                    <Form.Control
                      as="select"
                      value={this.state.departmentName}
                      onChange={(e) =>
                        this.setState({ departmentName: e.target.value })
                      }
                    >
                      {this.state.deps.map((dep) => (
                        <option key={dep.departmentId}>
                          {dep.departmentName}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>

                  <Form.Group
                    controlId="DateOfJoining"
                    style={{ paddingTop: 20 }}
                  >
                    <Form.Label>Date Of Joining</Form.Label>
                    <Form.Control
                      type="date"
                      name="DateOfJoining"
                      required
                      placeholder="DateOfJoining"
                      value={this.state.doj}
                      onChange={(e) => this.setState({ doj: e.target.value })}
                    />
                  </Form.Group>

                  <Form.Group controlId="Role" style={{ paddingTop: 20 }}>
                    <Form.Label>Role</Form.Label>

                    <Form.Select
                      aria-label="Default select example"
                      value={this.state.role}
                      onChange={(e) => this.setState({ role: e.target.value })}
                    >
                      <option value="Admin">Admin</option>
                      <option value="Employee">Employee</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group style={{ paddingTop: 20 }}>
                    <Button variant="primary" type="submit">
                      Add Employee
                    </Button>
                  </Form.Group>
                </Form>
              </Col>

              <Col>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="DateOfBirth">
                    <Form.Label>Date Of Birth</Form.Label>
                    <Form.Control
                      type="date"
                      name="DateOfBirth"
                      required
                      placeholder="DateOfBirth"
                      value={this.state.dob}
                      onChange={(e) => this.setState({ dob: e.target.value })}
                    />
                  </Form.Group>

                  <Form.Group controlId="Gender" style={{ paddingTop: 20 }}>
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                      type="text"
                      name="Gender"
                      required
                      placeholder="Gender"
                      value={this.state.gender}
                      onChange={(e) =>
                        this.setState({ gender: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group controlId="Contact" style={{ paddingTop: 20 }}>
                    <Form.Label>Contact</Form.Label>
                    <Form.Control
                      type="text"
                      name="Contact"
                      required
                      placeholder="Contact"
                      value={this.state.contact}
                      onChange={(e) =>
                        this.setState({ contact: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group controlId="PAN" style={{ paddingTop: 20 }}>
                    <Form.Label>PAN</Form.Label>
                    <Form.Control
                      type="text"
                      name="PAN"
                      required
                      placeholder="PAN"
                      value={this.state.pan}
                      onChange={(e) => this.setState({ pan: e.target.value })}
                    />
                  </Form.Group>

                  <Form.Group
                    controlId="Designation"
                    style={{ paddingTop: 20 }}
                  >
                    <Form.Label>Designation</Form.Label>
                    <Form.Control
                      type="text"
                      name="Designation"
                      required
                      placeholder="Designation"
                      value={this.state.designation}
                      onChange={(e) =>
                        this.setState({ designation: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group controlId="Password" style={{ paddingTop: 20 }}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="Password"
                      required
                      placeholder="Password"
                      value={this.state.password}
                      onChange={(e) =>
                        this.setState({ password: e.target.value })
                      }
                    />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
