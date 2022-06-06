import React, { Component } from "react";
import { Modal, Button, Row, Col, Form, Image } from "react-bootstrap";
import { variables } from "../../api/Variable";

export class ViewUserModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: [],
      contact: this.props.data.contact,
      address: this.props.data.address,
      departmentName: this.props.data.departmentName,
      designation: this.props.data.designation,
      role: this.props.data.role,
      a: "",
      count: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch(variables.API_URL + "departments")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ deps: data });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      if (this.props.data.contact !== undefined && this.state.count === 0) {
        this.setState({
          contact: this.props.data.contact,
          address: this.props.data.address,
          departmentName: this.props.data.departmentName,
          designation: this.props.data.designation,
          role: this.props.data.role,
          count: 1,
        });
      }
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    let obj = {
      employeeId: this.props.data.employeeId,
      name: this.props.data.name,
      email: this.props.data.email,
      gender: this.props.data.gender,
      dob: this.props.data.dob,
      pan: this.props.data.pan,
      contact: this.state.contact,
      address: this.state.address,
      doj: this.props.data.doj,
      departmentName: this.state.departmentName,
      designation: this.state.designation,
      password: this.props.data.password,
      role: this.state.role,
    };

    fetch(`http://localhost:5001/api/Users/${this.props.data.email}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    }).then(
      (result) => {
        this.setState({ a: "User Updated Suucessfully" });

        setTimeout(() => {
          window.location = "/user";
        }, 2000);
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
              Edit Employee
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
                      disabled
                      defaultValue={this.props.data.employeeId}
                    />
                  </Form.Group>

                  <Form.Group
                    controlId="EmployeeName"
                    style={{ paddingTop: 20 }}
                  >
                    <Form.Label>EmployeeName</Form.Label>
                    <Form.Control
                      type="text"
                      name="EmployeeName"
                      required
                      defaultValue={this.props.data.name}
                      placeholder="Employee Name"
                      disabled
                    />
                  </Form.Group>

                  <Form.Group controlId="Email" style={{ paddingTop: 20 }}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="Email"
                      required
                      placeholder="Email"
                      defaultValue={this.props.data.email}
                      disabled
                    />
                  </Form.Group>

                  <Form.Group controlId="Address" style={{ paddingTop: 20 }}>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      name="Address"
                      required
                      placeholder="Address"
                      defaultValue={this.props.data.address}
                      value={this.state.address}
                      onChange={(e) =>
                        this.setState({ address: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group controlId="Department" style={{ paddingTop: 20 }}>
                    <Form.Label>Department</Form.Label>
                    <Form.Control
                      as="select"
                      defaultValue={this.props.data.departmentName}
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
                    <Form.Label>DateOfJoining</Form.Label>
                    <Form.Control
                      type="date"
                      name="DateOfJoining"
                      required
                      placeholder="DateOfJoining"
                      defaultValue={this.props.data.doj}
                      disabled
                    />
                  </Form.Group>

                  <Form.Group controlId="Role" style={{ paddingTop: 20 }}>
                    <Form.Label>Role</Form.Label>
                    <Form.Control
                      type="text"
                      name="Role"
                      required
                      placeholder="Role"
                      defaultValue={this.props.data.role}
                      value={this.state.role}
                      onChange={(e) => this.setState({ role: e.target.value })}
                    />
                  </Form.Group>

                  <Form.Group style={{ paddingTop: 20 }}>
                    <Button variant="primary" type="submit">
                      Update Employee
                    </Button>
                  </Form.Group>
                </Form>
              </Col>

              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="DateOfBirth">
                    <Form.Label>Date Of Birth</Form.Label>
                    <Form.Control
                      type="date"
                      name="DateOfBirth"
                      required
                      placeholder="DateOfBirth"
                      defaultValue={this.props.data.dob}
                      disabled
                    />
                  </Form.Group>

                  <Form.Group controlId="Gender" style={{ paddingTop: 20 }}>
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                      type="text"
                      name="Gender"
                      required
                      placeholder="Gender"
                      defaultValue={this.props.data.gender}
                      disabled
                    />
                  </Form.Group>

                  <Form.Group controlId="Contact" style={{ paddingTop: 20 }}>
                    <Form.Label>Contact</Form.Label>
                    <Form.Control
                      type="text"
                      name="Contact"
                      required
                      placeholder="Contact"
                      defaultValue={this.props.data.contact}
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
                      defaultValue={this.props.data.pan}
                      disabled
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
                      defaultValue={this.props.data.designation}
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
                      defaultValue={this.props.data.dob}
                      disabled
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
