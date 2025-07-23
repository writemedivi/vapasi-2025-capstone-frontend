// src/components/user/applyLoan/DocumentDetails.jsx
import React from "react";
import { Form } from "react-bootstrap";

const DocumentDetails = ({ formData, setFormData, formErrors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Form>
      <h4>Document Details</h4>

      <Form.Group>
        <Form.Label>Aadhar Number</Form.Label>
        <Form.Control
          type="text"
          name="aadhar"
          value={formData.aadhar || ""}
          onChange={handleChange}
          isInvalid={!!formErrors?.aadhar}
          placeholder="Enter your 12-digit Aadhar Number"
        />
        <Form.Control.Feedback type="invalid">
          {formErrors?.aadhar}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label>PAN Number</Form.Label>
        <Form.Control
          type="text"
          name="pan"
          value={formData.pan || ""}
          onChange={handleChange}
          isInvalid={!!formErrors?.pan}
          placeholder="Enter your PAN Number"
        />
        <Form.Control.Feedback type="invalid">
          {formErrors?.pan}
        </Form.Control.Feedback>
      </Form.Group>
    </Form>
  );
};

export default DocumentDetails;
