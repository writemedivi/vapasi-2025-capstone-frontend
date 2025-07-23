import React,{ useEffect, useState } from "react";
import { Button, Card, Container, Row, Col, Navbar, Nav  } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./userDashboard.css";
import Footer from "../Common/Footer/Footer";
import axios from "axios";

const UserDashboard = () => {
  const navigate = useNavigate();
  const [customerName, setCustomerName] = useState("");

  // useEffect(() => {
  //   const storedName = localStorage.getItem("customerName");
  //   if (storedName) {
  //     setCustomerName(storedName);
  //   }

    useEffect(() => {
    const customerId = localStorage.getItem("customerId");

    if (customerId) {
      axios
        .get(`http://localhost:8080/api/customers/${customerId}`) // update URL as per your backend
        .then((response) => {
          setCustomerName(response.data.name);
        })
        .catch((error) => {
          console.error("Failed to fetch customer details:", error);
        });
    }
  }, []);

  const handleApplyLoan = () => {
    navigate("/apply-loan");
  };

  return (
    <div className="d-flex flex-column min-vh-100">
       <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">🏠 VW Home Loan</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
             <Nav>
              <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    {/* Welcome Message */}
      <div className="bg-light text-center py-3 border-bottom">
        <h5 className="text-dark m-0">
          Welcome, <span className="text-primary">{customerName || "Customer"}</span> 👋
        </h5>
      </div>

    <div className="user-dashboard-wrapper">
      <Container>
        <h3 className="text-center mb-4 text-primary">User Dashboard</h3>
        <Row>
          <Col md={4}>
            <Card className="user-dashboard-card shadow rounded-4 p-3 mb-4">
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="mb-3">Apply For Home Loan</Card.Title>
                <Card.Text>
                  Start a new loan application process.
                </Card.Text>
                <Button onClick={handleApplyLoan} variant="primary">
                  Apply Now
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={8}>
            <Card className="user-dashboard-card shadow rounded-4 p-3 mb-4">
              <Card.Body>
                <Card.Title className="mb-4">Existing Applications</Card.Title>
                <ul>
                  <li>Application No: HML123456 - Status: Verified</li>
                  <li>Application No: HML789101 - Status: Document Pending</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    <Footer />
     </div>
  );
};

export default UserDashboard;