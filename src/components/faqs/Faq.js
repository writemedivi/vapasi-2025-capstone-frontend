import React from 'react';
import { Container, Accordion,Navbar, Nav  } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


const Faq = () => {

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
    
    <Container className="my-5">
      <h2 className="mb-4 text-start">Frequently Asked Questions</h2>
      <Accordion defaultActiveKey="0" alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>1. How do I calculate my EMI?</Accordion.Header>
          <Accordion.Body>
            You can use our built-in EMI Calculator on the homepage. Just enter the loan amount, interest rate, and tenure to get your monthly EMI.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>2. How is loan eligibility determined?</Accordion.Header>
          <Accordion.Body>
            Loan eligibility depends on your monthly income. We calculate it using the formula: <br />
            <strong>Loan amount = 60 × (0.6 × Net Monthly Income)</strong>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>3. Can I apply for a loan online?</Accordion.Header>
          <Accordion.Body>
            Yes, you can register and fill out the loan application form directly through our portal. You’ll also be able to track your application status.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>4. What documents are needed for a home loan?</Accordion.Header>
          <Accordion.Body>
            Generally, you’ll need identity proof, address proof, income proof (salary slips, bank statements), and property documents.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
    </div>
  );
};

export default Faq;
