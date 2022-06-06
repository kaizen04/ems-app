import React, { Component } from "react";
import { Modal, Row, Col, Form, Image } from "react-bootstrap";
import { variables } from "../../api/Variable";
import { Button } from "react-bootstrap";

export class AddSalaryModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: [],
      employeeId: "",
      employeeName: "",
      email: "",
      designation: "",
      pan: "",
      bankAccount: "",
      doj: "",
      pfAccount: "",
      uan: "",
      availableDays: "",
      paidDays: "",
      salary: "",
      a: "",
      errors: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // async componentDidMount() {
  //   fetch(variables.API_URL + "departments")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       this.setState({ deps: data });
  //     });
  // }

  handleSubmit(event) {
    event.preventDefault();
    let obj = {
      employeeId: this.state.employeeId,
      employeeName: this.state.employeeName,
      email: this.state.email,
      designation: this.state.designation,
      pan: this.state.pan,
      bankAccount: this.state.bankAccount,
      doj: this.state.doj,
      pfAccount: this.state.pfAccount,
      uan: this.state.uan,
      availableDays: this.state.availableDays,
      paidDays: this.state.paidDays,
      salary: this.state.salary,
    };
    fetch(variables.API_URL + "salaryreports", {
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
          this.setState({ a: "Salary Added Suucessfully" });
          setTimeout(() => {
            window.location = "/salaryreport";
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
              Add Salary
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
                      type="text"
                      name="Email"
                      required
                      placeholder="Email"
                      value={this.state.email}
                      onChange={(e) => this.setState({ email: e.target.value })}
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

                  <Form.Group
                    controlId="AvailableDays"
                    style={{ paddingTop: 20 }}
                  >
                    <Form.Label>UAN</Form.Label>
                    <Form.Control
                      type="text"
                      name="uan"
                      required
                      placeholder="uan"
                      value={this.state.uan}
                      onChange={(e) => this.setState({ uan: e.target.value })}
                    />
                  </Form.Group>

                  <Form.Group
                    controlId="AvailableDays"
                    style={{ paddingTop: 20 }}
                  >
                    <Form.Label>Available Days</Form.Label>
                    <Form.Control
                      type="text"
                      name="AvailableDays"
                      required
                      placeholder="Available Days"
                      value={this.state.availableDays}
                      onChange={(e) =>
                        this.setState({ availableDays: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group style={{ paddingTop: 20 }}>
                    <Button variant="primary" type="submit">
                      Add Salary
                    </Button>
                  </Form.Group>
                </Form>
              </Col>

              <Col>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="DateOfJoining">
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

                  <Form.Group controlId="PFAccount" style={{ paddingTop: 20 }}>
                    <Form.Label>PF Account</Form.Label>
                    <Form.Control
                      type="text"
                      name="PFAccount"
                      required
                      placeholder="PF Account"
                      value={this.state.pfAccount}
                      onChange={(e) =>
                        this.setState({ pfAccount: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group
                    controlId="BankAccount"
                    style={{ paddingTop: 20 }}
                  >
                    <Form.Label>Bank Account</Form.Label>
                    <Form.Control
                      type="text"
                      name="BankAccount"
                      required
                      placeholder="BankAccount"
                      value={this.state.bankAccount}
                      onChange={(e) =>
                        this.setState({ bankAccount: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group controlId="PaidDays" style={{ paddingTop: 20 }}>
                    <Form.Label>Paid Days</Form.Label>
                    <Form.Control
                      type="text"
                      name="PaidDays"
                      required
                      placeholder="Paid Days"
                      value={this.state.paidDays}
                      onChange={(e) =>
                        this.setState({ paidDays: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group controlId="Salary" style={{ paddingTop: 20 }}>
                    <Form.Label>Salary</Form.Label>
                    <Form.Control
                      type="text"
                      name="Salary"
                      required
                      placeholder="Salary"
                      value={this.state.salary}
                      onChange={(e) =>
                        this.setState({ salary: e.target.value })
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
