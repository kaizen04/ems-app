import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { variables } from "../../api/Variable.js";

export class AddDepartmentModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departmentId: "",
      departmentName: "",
      a: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    let obj = {
      departmentId: this.state.departmentId,
      departmentName: this.state.departmentName,
    };
    fetch(variables.API_URL + "Departments", {
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
          this.setState({ a: "Department Added Sucessfully" });

          setTimeout(() => {
            window.location = "/department";
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
              Add Department
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {s}
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group
                    controlId="DepartmentId"
                    style={{ paddingTop: 20 }}
                  >
                    <Form.Label>DepartmentId</Form.Label>
                    <Form.Control
                      type="text"
                      name="DepartmentId"
                      required
                      placeholder="DepartmentId"
                      value={this.state.departmentId}
                      onChange={(e) =>
                        this.setState({ departmentId: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="DepartmentName"
                    style={{ paddingTop: 20 }}
                  >
                    <Form.Label>DepartmentName</Form.Label>
                    <Form.Control
                      type="text"
                      name="DepartmentName"
                      required
                      placeholder="DepartmentName"
                      value={this.state.departmentName}
                      onChange={(e) =>
                        this.setState({ departmentName: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group style={{ paddingTop: 20 }}>
                    <Button variant="primary" type="submit">
                      Add Department
                    </Button>
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
