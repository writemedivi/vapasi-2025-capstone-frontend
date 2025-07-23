import React from "react";
import { Form } from "react-bootstrap";

const IncomePropertyDetails = ({ formData, setFormData, formErrors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Form>
      <h4>Income & Property Details</h4>

      <Form.Group>
        <Form.Label>Monthly Income</Form.Label>
        <Form.Control
          type="number"
          name="income"
          value={formData.income || ""}
          onChange={handleChange}
          isInvalid={!!formErrors?.income}
          placeholder="Enter your monthly income"
        />
        <Form.Control.Feedback type="invalid">
          {formErrors?.income}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label>Property Location</Form.Label>
        <Form.Control
          type="text"
          name="propertyLocation"
          value={formData.propertyLocation || ""}
          onChange={handleChange}
          isInvalid={!!formErrors?.propertyLocation}
          placeholder="Enter the property location"
        />
        <Form.Control.Feedback type="invalid">
          {formErrors?.propertyLocation}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label>Estimated Property Value</Form.Label>
        <Form.Control
          type="number"
          name="propertyValue"
          value={formData.propertyValue || ""}
          onChange={handleChange}
          isInvalid={!!formErrors?.propertyValue}
          placeholder="Enter estimated property value"
        />
        <Form.Control.Feedback type="invalid">
          {formErrors?.propertyValue}
        </Form.Control.Feedback>
      </Form.Group>
    </Form>
  );
};

export default IncomePropertyDetails;
