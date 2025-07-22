import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [emi, setEmi] = useState(null);

  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [eligibleAmount, setEligibleAmount] = useState(null);

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 12 / 100;
    const n = parseFloat(tenure) * 12;

    if (!principal || !rate || !n) {
      setEmi(null);
      return;
    }

    const emiVal = (principal * rate * Math.pow(1 + rate, n)) / (Math.pow(1 + rate, n) - 1);
    setEmi(emiVal.toFixed(2));
  };

  const calculateEligibility = () => {
    const income = parseFloat(monthlyIncome);
    if (!income) {
      setEligibleAmount(null);
      return;
    }

    const eligibleLoan = 60 * (0.6 * income);
    setEligibleAmount(eligibleLoan.toFixed(2));
  };


  return (
    <>
      {/* Navbar */}
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">🏠 VW Home Loan</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
             <Nav>
              <Nav.Link onClick={() => navigate('/')}>About Us</Nav.Link>
              {/* <Nav.Link onClick={() => navigate('/register')}>Register</Nav.Link> */}
            </Nav>
             <Nav>
              <Nav.Link onClick={() => navigate('/login')}>FAQs</Nav.Link>
              {/* <Nav.Link onClick={() => navigate('/register')}>Register</Nav.Link> */}
            </Nav>
            <Nav>
              <Nav.Link onClick={() => navigate('/login')}>Login</Nav.Link>
              {/* <Nav.Link onClick={() => navigate('/register')}>Register</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <div className="bg-light text-center p-5">
        <h1>Welcome to VW Home Loan</h1>
        <p>Turn your dream of owning a home into reality with VW Home Loans. Whether you are buying an apartment, constructing a house or renovating your home, we have the right Home Loan for you. Apply online for your VW Home Loan today!Apply for easy home loans and calculate your EMI instantly</p>
      </div>

      {/* EMI Calculator Section */}
      <Container className="mb-3">
        <Row className="p-2 shadow-sm">
          <Col md={6}>
            <Card>
              <Card.Header as="h6">📊 EMI Calculator</Card.Header>
              <Card.Body className="p-2"></Card.Body>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-1">
                    <Form.Label>Loan Amount (₹)</Form.Label>
                    <Form.Control
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                      placeholder="e.g. 500000"
                    />
                  </Form.Group>

                  <Form.Group className="mb-2">
                    <Form.Label className="fs-6">Interest Rate (% p.a.)</Form.Label>
                    <Form.Control
                      size="sm"
                      type="number"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                      placeholder="e.g. 8.5"
                    />
                  </Form.Group>

                  <Form.Group className="mb-2">
                    <Form.Label className="fs-6">Tenure (Years)</Form.Label>
                    <Form.Control
                      size="sm"
                      type="number"
                      value={tenure}
                      onChange={(e) => setTenure(e.target.value)}
                      placeholder="e.g. 10"
                    />
                  </Form.Group>

                  <Button variant="success" size ="sm" onClick={calculateEMI}>
                    Calculate EMI
                  </Button>
                </Form>

                {emi && (
                  <div className="alert alert-success mt-3">
                    <strong>Your Monthly EMI:</strong> ₹{emi}
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>

          {/* Eligibility Calculator */}
          <Col md={6} className="mb-4">
            <Card>
              <Card.Header as="h5">📈 Eligibility Calculator</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Net Monthly Income (₹)</Form.Label>
                    <Form.Control
                      type="number"
                      value={monthlyIncome}
                      onChange={(e) => setMonthlyIncome(e.target.value)}
                      placeholder="e.g. 50000"
                    />
                  </Form.Group>

                  <Button variant="success" onClick={calculateEligibility}>
                    Check Eligibility
                  </Button>
                </Form>
                {eligibleAmount && (
                  <div className="alert alert-info mt-3">
                    <strong>Eligible Loan Amount:</strong> ₹{eligibleAmount}
                  </div>
                )}

        </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white text-center p-3 mt-5">
        &copy; {new Date().getFullYear()} VW Home Loan. All rights reserved.
      </footer>
    </>
  );
}

export default HomePage;
