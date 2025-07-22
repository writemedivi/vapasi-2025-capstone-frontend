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
      
      </div>

      {/* About Content */}
      <Container className="my-5">
  <Row className="justify-content-start">
    <Col md={10} lg={8}>
      <h2 className="text-start">Who We Are</h2>
      <p className="text-start">
        At <strong>HomeLoanPro</strong>, we are dedicated to making the home loan process
        simpler, faster, and more transparent for every individual.
      </p>
            <h4 className="text-start mt-4">What We Offer</h4>
      <div className="text-start custom-list">
        <p>✔ Instant EMI and Eligibility Calculators</p>
        <p>✔ Simple and secure loan application tracking</p>
        <p>✔ Personalized offers from top lenders</p>
        <p>✔ 24/7 customer support</p>
      </div>
            <h4 className="text-start mt-4">Our Mission</h4>
      <p className="text-start">
        Empower every Indian household with the financial tools to achieve
        their dream of owning a home.
      </p>
      <h4 className="text-start mt-4">Contact Information</h4>
      <p className="text-start mb-1"><strong>Address:</strong> 123 HomeLoan Street, Bengaluru, India</p>
      <p className="text-start mb-1"><strong>Phone:</strong> +91 98765 43210</p>
      <p className="text-start mb-1"><strong>Email:</strong> support@homeloanpro.in</p>
      <p className="text-start"><strong>Working Hours:</strong> Mon–Sat, 9 AM – 7 PM</p>
            
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  );
}

export default About;
