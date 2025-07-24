import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Modal,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./userDashboard.css";
import Footer from "../Common/Footer/Footer";
import axios from "axios";
import Header from "../Common/Header/Header";

const UserDashboard = () => {
  const navigate = useNavigate();
  const [customerName, setCustomerName] = useState("");
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [canApply, setCanApply] = useState(true);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      axios
        .get(`http://localhost:8080/users/${userId}/loan/check-active`)
        .then((response) => {
          setCanApply(response.data === false); // if no active loan, allow apply
        })
        .catch((error) => {
          console.error("Failed to check active loan:", error);
          setCanApply(false); // fallback: allow apply if error
        });
    }
  }, []);

  useEffect(() => {
    const customerId = localStorage.getItem("customerId");

    if (customerId) {
      axios
        .get(`http://localhost:8080/api/customers/${customerId}`)
        .then((response) => {
          setCustomerName(response.data.name);
        })
        .catch((error) => {
          console.error("Failed to fetch customer details:", error);
        });
    }
  }, []);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const url = `http://localhost:8080/users/${userId}/loan`;

    if (userId) {
      axios
        .get(url)
        .then((response) => {
          setApplications(response.data);
        })
        .catch((error) => {
          console.error("Failed to fetch applications:", error);
        });
    }
  }, []);

  const handleApplyLoan = () => {
    navigate("/apply-loan");
  };

  const handleApplicationClick = (app) => {
    setSelectedApplication(app);
    setShowModal(true);
  };

  const handleCustomerApprove = async (applicationNo) => {
    try {
      const userId = localStorage.getItem("userId");
      const response = await axios.put(
        `http://localhost:8080/users/${userId}/loan/${applicationNo}`,
        {
          status: "Approved",
        }
      );
      alert("Loan approved successfully!");
      setShowModal(false);
      console.log(response.data);
      // Reload the loan list or update state as needed
    } catch (error) {
      console.error("Error approving loan:", error);
      alert("Failed to approve loan.");
    }
  };
  const handleCustomerReject = async (applicationNo) => {
    try {
      const userId = localStorage.getItem("userId");

      const response = await axios.put(
        `http://localhost:8080/users/${userId}/loan/${applicationNo}`,
        {
          status: "Rejected",
        }
      );
      alert("Loan rejected successfully!");
      setShowModal(false);
      console.log(response.data);
      // Update loan list if needed
    } catch (error) {
      console.error("Error rejecting loan:", error);
      alert("Failed to reject loan.");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedApplication(null);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
     
     <Header />

      <div className="bg-light text-center py-3 border-bottom">
        <h5 className="text-dark m-0">
          Hi {" "}
          <span className="text-primary">
            {localStorage.getItem("userName") || "Customer"}
          </span>{" "}
          👋
        </h5>
      </div>

      <div className="user-dashboard-wrapper flex-grow-1">
        <Container>
          <h3 className="text-center mb-4 text-primary">Welcome to User Dashboard</h3>
          <Row>
            <Col md={4}>
              <Card  style={{minHeight:"182px"}}  className="user-dashboard-card shadow rounded-4 p-3 mb-4">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="mb-3">Apply For Home Loan</Card.Title>
                  <Card.Text>Start a new loan application process.</Card.Text>
                  <Button
                    onClick={handleApplyLoan}
                    variant="primary"
                    disabled={!canApply}
                  >
                    {canApply ? "Apply Now" : "Application In Progress"}
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={8}>
              <Card style={{minHeight:"182px"}} className="user-dashboard-card shadow rounded-4 p-3 mb-4">
                <Card.Body>
                  <Card.Title className="mb-4">
                    Existing Applications
                  </Card.Title>
                  {applications.length > 0 ? (
                    <ul className="list-unstyled">
                      {applications.map((app) => (
                        <li key={app.applicationNo} className="mb-2">
                          Application No:{" "}
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              handleApplicationClick(app);
                            }}
                            className="text-primary text-decoration-underline"
                          >
                            {app.applicationNo}
                          </a>{" "}
                          - Status: <strong>{app.status}</strong>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No existing applications found.</p>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />

      {/* Modal for Application Details */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Loan Application Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedApplication ? (
            <div>
              <p>
                <strong>Application No:</strong>{" "}
                {selectedApplication.applicationNo}
              </p>
              <p>
                <strong>Status:</strong> {selectedApplication.status}
              </p>
              <p>
                <strong>Loan Amount:</strong> ₹{selectedApplication.loanAmount}
              </p>
              <p>
                <strong>Tenure:</strong> {selectedApplication.tenure} years
              </p>
              <p>
                <strong>Interest Rate:</strong>{" "}
                {selectedApplication.interestRate}%
              </p>

              {/* Add more fields here if needed */}
            </div>
          ) : (
            <p>Loading application details...</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          {selectedApplication?.status?.trim().toUpperCase() !== "APPROVED" &&
            selectedApplication?.status?.trim().toUpperCase() !==
              "REJECTED" && (
              <>
                <Button
                  variant="success"
                  onClick={() =>
                    handleCustomerApprove(selectedApplication?.applicationNo)
                  }
                  disabled={
                    selectedApplication?.status !== "Pending Customer Approval"
                  }
                  className={
                    selectedApplication?.status !== "Pending Customer Approval"
                      ? "blur-button"
                      : ""
                  }
                >
                  Approve
                </Button>

                <Button
                  variant="danger"
                  onClick={() =>
                    handleCustomerReject(selectedApplication?.applicationNo)
                  }
                  disabled={
                    selectedApplication?.status !== "Pending Customer Approval"
                  }
                  className={
                    selectedApplication?.status !== "Pending Customer Approval"
                      ? "blur-button"
                      : ""
                  }
                >
                  Reject
                </Button>
              </>
            )}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserDashboard;
