import React, { Component } from "react";
import { Modal, Button, Row, Col, Form, Image } from "react-bootstrap";
import { variables } from "../../api/Variable";

export class EditSalaryModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      designation: this.props.data.designation,
      pfAccount: this.props.data.pfAccount,
      bankAccount: this.props.data.bankAccount,
      uan: this.props.data.uan,
      availableDays: this.props.data.availableDays,
      paidDays: this.props.data.paidDays,
      salary: this.props.data.salary,
      a: "",
      count: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      if (this.props.data.contact !== undefined && this.state.count === 0) {
        this.setState({
          designation: this.props.data.designation,
          pfAccount: this.props.data.pfAccount,
          bankAccount: this.props.data.bankAccount,
          uan: this.props.data.uan,
          availableDays: this.props.data.availableDays,
          paidDays: this.props.data.paidDays,
          salary: this.props.data.salary,
          count: 1,
        });
      }
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    let obj = {
      employeeId: this.props.data.employeeId,
      employeeName: this.props.data.employeeName,
      email: this.props.data.email,
      pan: this.props.data.pan,
      doj: this.props.data.doj,
      designation: this.state.designation,
      pfAccount: this.state.pfAccount,
      bankAccount: this.state.bankAccount,
      uan: this.state.uan,
      availableDays: this.state.availableDays,
      paidDays: this.state.paidDays,
      salary: this.state.salary,
    };

    fetch(`http://localhost:5001/api/SalaryReports/${this.props.data.pan}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    }).then(
      (result) => {
        this.setState({ a: "Salary Updated Suucessfully" });

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
                    <Form.Label>Employee Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="EmployeeName"
                      required
                      placeholder="EmployeeName"
                      disabled
                      defaultValue={this.props.data.employeeName}
                    />
                  </Form.Group>

                  <Form.Group controlId="Email" style={{ paddingTop: 20 }}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      name="Email"
                      required
                      placeholder="Email"
                      disabled
                      defaultValue={this.props.data.email}
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
                      defaultValue={this.props.data.designation}
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
                      defaultValue={this.props.data.uan}
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
                      defaultValue={this.props.data.availableDays}
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
                      disabled
                      defaultValue={this.props.data.doj}
                    />
                  </Form.Group>

                  <Form.Group controlId="PAN" style={{ paddingTop: 20 }}>
                    <Form.Label>PAN</Form.Label>
                    <Form.Control
                      type="text"
                      name="PAN"
                      required
                      placeholder="PAN"
                      disabled
                      defaultValue={this.props.data.pan}
                    />
                  </Form.Group>

                  <Form.Group controlId="PFAccount" style={{ paddingTop: 20 }}>
                    <Form.Label>PF Account</Form.Label>
                    <Form.Control
                      type="text"
                      name="PFAccount"
                      required
                      placeholder="PF Account"
                      disabled
                      defaultValue={this.props.data.pfAccount}
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
                      defaultValue={this.props.data.bankAccount}
                    />
                  </Form.Group>

                  <Form.Group controlId="PaidDays" style={{ paddingTop: 20 }}>
                    <Form.Label>Paid Days</Form.Label>
                    <Form.Control
                      type="text"
                      name="PaidDays"
                      required
                      placeholder="Paid Days"
                      defaultValue={this.props.data.paidDays}
                    />
                  </Form.Group>

                  <Form.Group controlId="Salary" style={{ paddingTop: 20 }}>
                    <Form.Label>Salary</Form.Label>
                    <Form.Control
                      type="text"
                      name="Salary"
                      required
                      placeholder="Salary"
                      defaultValue={this.props.data.salary}
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
