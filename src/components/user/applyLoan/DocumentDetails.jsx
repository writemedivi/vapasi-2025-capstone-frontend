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
          name="aadharNo"
          value={formData.aadharNo || ""}
          onChange={handleChange}
          isInvalid={!!formErrors?.aadharNo}
          placeholder="Enter your 12-digit Aadhar Number"
        />
        <Form.Control.Feedback type="invalid">
          {formErrors?.aadharNo}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label>PAN Number</Form.Label>
        <Form.Control
          type="text"
          name="panNo"
          value={formData.panNo || ""}
          onChange={handleChange}
          isInvalid={!!formErrors?.panNo}
          placeholder="Enter your PAN Number"
        />
        <Form.Control.Feedback type="invalid">
          {formErrors?.panNo}
        </Form.Control.Feedback>
      </Form.Group>
    </Form>
  );
};

export default DocumentDetails;
