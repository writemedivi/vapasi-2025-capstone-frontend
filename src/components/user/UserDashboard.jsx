import React from "react";
import { Button, Card, Container, Row, Col, Navbar, Nav  } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./userDashboard.css";

const UserDashboard = () => {
  const navigate = useNavigate();

  const handleApplyLoan = () => {
    navigate("/apply-loan");
  };

  return (
    <div>
       <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">🏠 VW Home Loan</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
             <Nav>
              <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
              {/* <Nav.Link onClick={() => navigate('/register')}>Register</Nav.Link> */}
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
   
    <div className="user-dashboard-wrapper">
      <Container>
        <h3 className="dashboard-title">User Dashboard</h3>
        <Row>
          <Col md={4}>
            <Card className="user-dashboard-card shadow rounded-4 p-3 mb-4">
              <Card.Body>
                <Card.Title>Apply for Home Loan</Card.Title>
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
                <Card.Title>Your Existing Loan Applications</Card.Title>
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
     </div>
  );
};

export default UserDashboard;