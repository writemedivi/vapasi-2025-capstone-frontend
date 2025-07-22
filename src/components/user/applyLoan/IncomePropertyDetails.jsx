import React from "react";
import { Form } from "react-bootstrap";

const IncomePropertyDetails = ({ formData, setFormData }) => {
  return (
    <Form>
      <h4>Income & Property Details</h4>
      <Form.Group>
        <Form.Label>Monthly Income</Form.Label>
        <Form.Control
          type="number"
          value={formData.income || ""}
          onChange={(e) => setFormData({ ...formData, income: e.target.value })}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Property Location</Form.Label>
        <Form.Control
          type="text"
          value={formData.propertyLocation || ""}
          onChange={(e) => setFormData({ ...formData, propertyLocation: e.target.value })}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Estimated Property Value</Form.Label>
        <Form.Control
          type="number"
          value={formData.propertyValue || ""}
          onChange={(e) => setFormData({ ...formData, propertyValue: e.target.value })}
        />
      </Form.Group>
    </Form>
  );
};

export default IncomePropertyDetails;