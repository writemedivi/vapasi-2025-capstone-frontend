import React, { useState } from "react";
import {
  Card,
  Row,
  Col,
  Table,
  Container,
  Navbar,
  Nav,
  Modal,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BsEye } from "react-icons/bs";

const AdminDashboard = () => {
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [selectedLoan, setSelectedLoan] = useState(null);

  const loanData = [
    { id: 1, name: "Amit", amount: "₹5,00,000", status: "In Progress", email: "amit@example.com", mobile: "9876543210", pan: "ABCDE1234F" },
    { id: 2, name: "Priya", amount: "₹10,00,000", status: "Pending", email: "priya@example.com", mobile: "7890123456", pan: "XYZAB5678C" },
    { id: 3, name: "Rahul", amount: "₹3,00,000", status: "Inactive", email: "rahul@example.com", mobile: "9012345678", pan: "PQRST9012D" },
    { id: 4, name: "Anjali", amount: "₹8,00,000", status: "In Progress", email: "anjali@example.com", mobile: "7654321098", pan: "LMNOP3456Z" },
  ];

  const navigate = useNavigate();
  const statusList = ["All", "In Progress", "Pending", "Inactive"];

  const statusColors = {
    All: "#d6d8db",
    "In Progress": "#cfe2ff",
    Pending: "#fff3cd",
    Inactive: "#f8d7da",
  };

  const badgeTextColors = {
    All: "#495057",
    "In Progress": "#084298",
    Pending: "#664d03",
    Inactive: "#842029",
  };

  const statusCounts = statusList.reduce((counts, status) => {
    counts[status] =
      status === "All"
        ? loanData.length
        : loanData.filter((loan) => loan.status === status).length;
    return counts;
  }, {});

  const filteredLoans =
    selectedStatus === "All"
      ? loanData
      : loanData.filter((loan) => loan.status === selectedStatus);

  const handleViewClick = (loan) => {
    setSelectedLoan(loan);
    setShowModal(true);
  };

  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">🏠 VW Home Loan</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <h3 className="mb-4 text-primary">Admin Dashboard</h3>

        <Row className="mb-4">
          {statusList.map((status) => (
            <Col key={status} md={3}>
              <Card
                onClick={() => setSelectedStatus(status)}
                className={`mb-3 shadow-sm ${
                  selectedStatus === status ? "border border-dark border-2" : ""
                }`}
                style={{
                  backgroundColor: statusColors[status],
                  cursor: "pointer",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <Card.Body className="text-center">
                  <Card.Title className="fs-6">{status}</Card.Title>
                  <h4>{statusCounts[status]}</h4>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <h5 className="mb-3 text-secondary">
          {selectedStatus} Loan Applications
        </h5>

        <Table striped bordered hover responsive className="shadow-sm">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Customer</th>
              <th>Loan Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredLoans.map((loan) => (
              <tr key={loan.id}>
                <td>{loan.id}</td>
                <td>{loan.name}</td>
                <td>{loan.amount}</td>
                <td>
                  <span
                    className="badge"
                    style={{
                      backgroundColor: statusColors[loan.status],
                      color: badgeTextColors[loan.status],
                      padding: "0.5em 0.75em",
                      fontSize: "0.85em",
                    }}
                  >
                    {loan.status}
                  </span>
                </td>
                <td>
                  <BsEye
                    role="button"
                    title="View Details"
                    size={20}
                    onClick={() => handleViewClick(loan)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      {/* ✅ Loan Details Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Loan Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedLoan && (
            <div>
              <p><strong>Name:</strong> {selectedLoan.name}</p>
              <p><strong>Loan Amount:</strong> {selectedLoan.amount}</p>
              <p><strong>Status:</strong> {selectedLoan.status}</p>
              <p><strong>Email:</strong> {selectedLoan.email}</p>
              <p><strong>Mobile:</strong> {selectedLoan.mobile}</p>
              <p><strong>PAN:</strong> {selectedLoan.pan}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminDashboard;
