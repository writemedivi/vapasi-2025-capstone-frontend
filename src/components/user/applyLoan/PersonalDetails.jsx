// src/components/ApplyLoan/PersonalDetails.jsx
import React from "react";
import { Form } from "react-bootstrap";

const PersonalDetails = ({ formData, setFormData, formErrors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Form>
      <h4>Personal Details</h4>

      <Form.Group>
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          name="fullName"
          value={formData.fullName || ""}
          onChange={handleChange}
          placeholder="Enter your full name"
          isInvalid={!!formErrors?.fullName}
        />
        <Form.Control.Feedback type="invalid">
          {formErrors?.fullName}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email || ""}
          onChange={handleChange}
          placeholder="Enter your email"
          isInvalid={!!formErrors?.email}
        />
        <Form.Control.Feedback type="invalid">
          {formErrors?.email}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          name="phone"
          value={formData.phone || ""}
          onChange={handleChange}
          placeholder="Enter your phone number"
          isInvalid={!!formErrors?.phone}
        />
        <Form.Control.Feedback type="invalid">
          {formErrors?.phone}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control
          type="date"
          name="dob"
          value={formData.dob || ""}
          onChange={handleChange}
          isInvalid={!!formErrors?.dob}
        />
        <Form.Control.Feedback type="invalid">
          {formErrors?.dob}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label>Gender</Form.Label>
        <Form.Control
          as="select"
          name="gender"
          value={formData.gender || ""}
          onChange={handleChange}
          isInvalid={!!formErrors?.gender}
        >
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </Form.Control>
        <Form.Control.Feedback type="invalid">
          {formErrors?.gender}
        </Form.Control.Feedback>
      </Form.Group>
    </Form>
  );
};

export default PersonalDetails;
