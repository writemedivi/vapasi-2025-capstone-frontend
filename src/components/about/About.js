import React from 'react';
import { Container, Row, Col,Navbar,Nav } from 'react-bootstrap';
import backgroundImg from '../../assets/homeloan-hero.jpg';
import { useNavigate } from "react-router-dom";
 

function About() {
    const navigate = useNavigate();
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
    
   
    <div className="about-us-page">
      {/* Hero Section */}
      <div
        className="about-hero text-black d-flex align-items-up   justify-content-center"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          height: '500px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          fontSize: '2.5rem',
          fontWeight: 'bold',
        }}
      >
        <h1 className="text-center"></h1>
      </div>

      {/* About Content */}
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <h2>Who We Are</h2>
            <p>
              At <strong>VW HomeLoan</strong>, we are dedicated to making the home loan process
              simpler, faster, and more transparent for every individual.
            </p>
            <h4 >What We Offer</h4>
            <ul>
              <li>Instant EMI and Eligibility Calculators</li>
              <li>Simple and secure loan application tracking</li>
              <li>Personalized offers from top lenders</li>
              <li>24/7 customer support</li>
            </ul>
            <h4>Our Mission</h4>
            <p>
              Empower every Indian household with the financial tools to achieve
              their dream of owning a home.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  );
}

export default About;
