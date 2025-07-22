// src/components/ApplyLoan/PersonalDetails.jsx
import React from "react";
import { Form } from "react-bootstrap";

const PersonalDetails = ({ formData, setFormData }) => {
  return (
    <Form>
      <h4>Personal Details</h4>
      
      <Form.Group>
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          value={formData.fullName || ""}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          placeholder="Enter your full name"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          value={formData.email || ""}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Enter your email"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          value={formData.phone || ""}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="Enter your phone number"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control
          type="date"
          value={formData.dob || ""}
          onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Gender</Form.Label>
        <Form.Control
          as="select"
          value={formData.gender || ""}
          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
        >
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default PersonalDetails;
