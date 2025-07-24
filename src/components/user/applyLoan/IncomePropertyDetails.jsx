import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

const IncomePropertyDetails = ({ formData, setFormData, formErrors }) => {
  const [eligibleAmount, setEligibleAmount] = useState(null);
  const [loanWarning, setLoanWarning] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Calculate EMI based on current form data
  const calculateEMI = () => {
    const principal = parseFloat(formData.loanAmount);
    const rate = 8.5 / 12 / 100;
    const n = parseFloat(formData.tenure) * 12;

    if (!principal || !rate || !n || principal < 100000) {
      setFormData((prev) => ({ ...prev, emi: "" }));
      return;
    }

    const emi =
      (principal * rate * Math.pow(1 + rate, n)) / (Math.pow(1 + rate, n) - 1);

    setFormData((prev) => ({
      ...prev,
      emi: Math.round(emi),
    }));
  };

  // Calculate maximum eligible loan and validate
  const validateLoanAmount = () => {
    const income = parseFloat(formData.monthlyIncome);
    const requestedLoan = parseFloat(formData.loanAmount);

    if (!income || income <= 0 || !requestedLoan) {
      setEligibleAmount(null);
      setLoanWarning("");
      return;
    }

    const maxEligible = 60 * 0.6 * income;
    setEligibleAmount(maxEligible.toFixed(0));

    // Validation logic
    if (requestedLoan < 100000) {
      setLoanWarning("Minimum loan amount is ₹1,00,000.");
    } else if (requestedLoan > maxEligible) {
      setLoanWarning(
        `Requested amount exceeds eligibility. Max allowed: ₹${maxEligible.toFixed(
          0
        )}.`
      );
    } else {
      setLoanWarning(""); // Valid case
    }
  };

  // Run validations and calculations on relevant changes
  useEffect(() => {
    validateLoanAmount();

    if (formData.loanAmount && formData.tenure) {
      calculateEMI();
    }
  }, [formData.loanAmount, formData.tenure, formData.monthlyIncome]);

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
          min={0}
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
          min={0}
        />
        <Form.Control.Feedback type="invalid">
          {formErrors?.monthlyIncome}
        </Form.Control.Feedback>
        {eligibleAmount && (
          <small className="text-muted">
            Eligible Loan Amount: ₹{eligibleAmount}
          </small>
        )}
      </Form.Group>

      <Form.Group>
        <Form.Label>Loan Amount Required</Form.Label>
        <Form.Control
          type="number"
          min={100000}
          name="loanAmount"
          value={formData.loanAmount || ""}
          onChange={handleChange}
          isInvalid={!!formErrors?.loanAmount}
          placeholder="Enter the loan amount you are applying for"
        />
        <Form.Control.Feedback type="invalid">
          {formErrors?.loanAmount}
        </Form.Control.Feedback>
        {loanWarning && <small style={{ color: "red" }}>{loanWarning}</small>}
      </Form.Group>

      <Form.Group>
        <Form.Label>Loan Tenure (in years)</Form.Label>
        <Form.Control
          as="select"
          name="tenure"
          value={formData.tenure || ""}
          onChange={handleChange}
          isInvalid={!!formErrors?.tenure}
        >
          <option value="5">5 Years</option>
          <option value="10">10 Years</option>
          <option value="15">15 Years</option>
          <option value="20">20 Years</option>
        </Form.Control>
        <Form.Control.Feedback type="invalid">
          {formErrors?.tenure}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label>
          Estimated EMI (<strong>Rate of Interest is 8.5%</strong>)
        </Form.Label>
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
