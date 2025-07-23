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

      {/* New Property Name Field */}
      <Form.Group>
        <Form.Label>Property Name</Form.Label>
        <Form.Control
          type="text"
          name="propertyName"
          value={formData.propertyName || ""}
          onChange={handleChange}
          isInvalid={!!formErrors?.propertyName}
          placeholder="Enter the name of the property"
        />
        <Form.Control.Feedback type="invalid">
          {formErrors?.propertyName}
        </Form.Control.Feedback>
      </Form.Group>

      

      <Form.Group>
        <Form.Label>Property Location</Form.Label>
        <Form.Control
          type="text"
          name="location"
          value={formData.location || ""}
          onChange={handleChange}
          isInvalid={!!formErrors?.location}
          placeholder="Enter the property location"
        />
        <Form.Control.Feedback type="invalid">
          {formErrors?.location}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label>Estimated Property Value</Form.Label>
        <Form.Control
          type="number"
          name="estimatedCost"
          value={formData.estimatedCost || ""}
          onChange={handleChange}
          isInvalid={!!formErrors?.estimatedCost}
          placeholder="Enter estimated property value"
        />
        <Form.Control.Feedback type="invalid">
          {formErrors?.estimatedCost}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>Monthly Income</Form.Label>
        <Form.Control
          type="number"
          name="monthlyIncome"
          value={formData.monthlyIncome || ""}
          onChange={handleChange}
          isInvalid={!!formErrors?.monthlyIncome}
          placeholder="Enter your monthly income"
        />
        <Form.Control.Feedback type="invalid">
          {formErrors?.monthlyIncome}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label>Loan Amount Required</Form.Label>
        <Form.Control
          type="number"
          name="loanAmount"
          value={formData.loanAmount || ""}
          onChange={handleChange}
          isInvalid={!!formErrors?.loanAmount}
          placeholder="Enter the loan amount you are applying for"
        />
        <Form.Control.Feedback type="invalid">
          {formErrors?.loanAmount}
        </Form.Control.Feedback>
      </Form.Group>
    </Form>
  );
};

export default IncomePropertyDetails;
