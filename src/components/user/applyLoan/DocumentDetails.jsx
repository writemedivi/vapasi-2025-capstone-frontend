import React from "react";
import { Form } from "react-bootstrap";

const DocumentDetails = ({ formData, setFormData }) => {
  return (
    <Form>
      <h4>Document Details</h4>
      <Form.Group>
        <Form.Label>Aadhar Number</Form.Label>
        <Form.Control
          type="text"
          value={formData.aadhar || ""}
          onChange={(e) => setFormData({ ...formData, aadhar: e.target.value })}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>PAN Number</Form.Label>
        <Form.Control
          type="text"
          value={formData.pan || ""}
          onChange={(e) => setFormData({ ...formData, pan: e.target.value })}
        />
      </Form.Group>
    </Form>
  );
};

export default DocumentDetails;