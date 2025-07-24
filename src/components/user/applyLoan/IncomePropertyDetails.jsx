import React, { useEffect } from "react";
import { Form } from "react-bootstrap";

const IncomePropertyDetails = ({ formData, setFormData, formErrors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // EMI calculation logic
  const calculateEMI = () => {
    const principal = parseFloat(formData.loanAmount);
    const rate = 8.5 / 12 / 100; // monthly interest rate (8.5% annual)
    const n = parseFloat(formData.tenure)*12; // assuming tenure in months

    if (!principal || !rate || !n || principal < 0) {
      setFormData((prev) => ({ ...prev, emi: "" }));
      return;
    }

    if (principal < 100000) {
      setFormData((prev) => ({ ...prev, emi: "" }));
      alert("Loan amount should be at least ₹1,00,000");
      return;
    }

    const emi =
      (principal * rate * Math.pow(1 + rate, n)) /
      (Math.pow(1 + rate, n) - 1);

    setFormData((prev) => ({
      ...prev,
      emi: Math.round(emi),
    }));
  };

  // Recalculate EMI when loanAmount or tenure changes
  useEffect(() => {
    if (formData.loanAmount && formData.tenure) {
      calculateEMI();
    }
  }, [formData.loanAmount, formData.tenure]);

  return (
    <Form>
      <h4>Income & Property Details</h4>

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

      <Form.Group>
        <Form.Label>Loan Tenure (in years)</Form.Label>
        <Form.Control
          type="number"
          name="tenure"
          value={formData.tenure || ""}
          onChange={handleChange}
          isInvalid={!!formErrors?.tenure}
          placeholder="Enter loan tenure in years"
        />
        <Form.Control.Feedback type="invalid">
          {formErrors?.tenure}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label>Estimated EMI (<strong>Rate of Interest is 8.5%</strong>)</Form.Label>
        <Form.Control
          type="number"
          name="emi"
          value={formData.emi || ""}
          readOnly
          isInvalid={!!formErrors?.emi}
          placeholder="Calculated EMI will appear here"
        />
        <Form.Control.Feedback type="invalid">
          {formErrors?.emi}
        </Form.Control.Feedback>
      </Form.Group>
    </Form>
  );
};

export default IncomePropertyDetails;
