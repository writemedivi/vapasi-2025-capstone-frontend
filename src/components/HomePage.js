import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Navbar,
  Nav,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "./Common/Header/Header";
import Footer from "./Common/Footer/Footer";

function HomePage() {
  const navigate = useNavigate();
  const [loanAmount, setLoanAmount] = useState("");
  // const [interestRate, setInterestRate] = useState('');
  const [tenure, setTenure] = useState("");
  const [emi, setEmi] = useState(null);

  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [eligibleAmount, setEligibleAmount] = useState(null);

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(8.5) / 12 /100;
    const n = parseFloat(tenure) * 12;

    

    if (!principal || !rate || !n || principal<0) {
      setEmi(null);
      return;
    }

    if (principal < 100000) {
    setEmi(null);
    alert('Loan amount should be at least ₹1,00,000');
    return;
  }

    const emiVal =
      (principal * rate * Math.pow(1 + rate, n)) / (Math.pow(1 + rate, n) - 1);
    setEmi(emiVal.toFixed(2));
  };

  const calculateEligibility = () => {
    const income = parseFloat(monthlyIncome);
    if (!income || income <0) {
      setEligibleAmount(null);
      return;
    }

    const eligibleLoan = 60 * (0.6 * income);
    setEligibleAmount(eligibleLoan.toFixed(2));
  };

  return (
    <>
      {/* Navbar */}
      <Header  screen="home"/>

      {/* Hero Section */}
      <div className="bg-light text-center p-5">
        <h1 className="primary-color">Welcome to VW Home Loan</h1>
        <p>
          Turn your dream of owning a home into reality with VW Home Loans.
          Whether you are buying an apartment, constructing a house or
          renovating your home, we have the right Home Loan for you. Apply
          online for your VW Home Loan today!Apply for easy home loans and
          calculate your EMI instantly
        </p>
      </div>

      {/* EMI Calculator Section */}
      <Container className="mt-5 mb-5">
        <Row className="pt-4 pb-4 ps-3 pe-3 shadow-sm">
          {/* Eligibility Calculator */}
          <Col md={6}>
            <Card>
              <Card.Header as="h6">📈 Eligibility Calculator</Card.Header>
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
                    <strong>Eligible Loan Amount:</strong> {''}
                    {
                        new Intl.NumberFormat('en-IN', {
                        style: 'currency',
                        currency: 'INR',
                        minimumFractionDigits: 2,
                       }).format(eligibleAmount)
                    }
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card>
              <Card.Header as="h6">
                📊 EMI Calculator (Rate of Interest 8.5%), (Min loan amount: ₹1000,000){" "}
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Loan Amount</Form.Label>
                          <Form.Control
                            type="number"
                            value={loanAmount}
                            onChange={(e) => setLoanAmount(e.target.value)}
                            placeholder="e.g. 100000"
                          />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fs-6">Tenure (Years)</Form.Label>
                        <Form.Select
                          value={tenure}
                          onChange={(e) => setTenure(e.target.value)}
                        >
                          <option value="">Select Tenure</option>
                          <option value="5">5</option>
                          <option value="10">10</option>
                          <option value="15">15</option>
                          <option value="20">20</option>
                          <option value="25">25</option>
                          <option value="30">30</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* <Form.Group className="mb-2">
                    <Form.Label className="fs-6">Tenure (Years)</Form.Label>
                    <Form.Control
                      size="sm"
                      type="number"
                      value={tenure}
                      onChange={(e) => setTenure(e.target.value)}
                      placeholder="e.g. 10"
                    />
                  </Form.Group> */}

                  <Button variant="success" onClick={calculateEMI}>
                    Calculate EMI
                  </Button>
                </Form>

                {emi && (
                  <div className="alert alert-success mt-3">
                    <strong>Your Monthly EMI:</strong> {''}
                    {
                        new Intl.NumberFormat('en-IN', {
                        style: 'currency',
                        currency: 'INR',
                        minimumFractionDigits: 2,
                       }).format(emi)
                    }
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default HomePage;