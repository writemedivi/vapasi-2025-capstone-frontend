// src/pages/LoanApplication.jsx
import React, { useState } from "react";
import DocumentDetails from "../components/user/applyLoan/DocumentDetails";
import IncomePropertyDetails from "../components/user/applyLoan/IncomePropertyDetails";
import UploadDocuments from "../components/user/applyLoan/UploadDocuments";
import ChecklistReview from "../components/user/applyLoan/ChecklistReview";
import Success from "../components/user/applyLoan/Success";
import { Button, Container } from "react-bootstrap";
import PersonalDetails from "../components/user/applyLoan/PersonalDetails";

const LoanApplication = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const next = () => setStep((prev) => prev + 1);
  const prev = () => setStep((prev) => prev - 1);


  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalDetails formData={formData} setFormData={setFormData} />;
      case 2:
        return <DocumentDetails formData={formData} setFormData={setFormData} />;
      case 3:
        return <IncomePropertyDetails formData={formData} setFormData={setFormData} />;
      case 4:
        return <UploadDocuments formData={formData} setFormData={setFormData} />;
      case 5:
        return <ChecklistReview formData={formData} />;
      case 6:
        return <Success />;
      default:
        return <PersonalDetails formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <Container style={{ padding: "2rem" }}>
      <h3>Loan Application Form</h3>
      {renderStep()}
      <div style={{ marginTop: "1rem" }}>
        {step > 1 && step < 6 && <Button onClick={prev} variant="secondary" style={{ marginRight: "1rem" }}>Back</Button>}
        {step < 5 && <Button onClick={next}>Next</Button>}
        {step === 5 && (
          <Button onClick={next} variant="success">
            Submit Application
          </Button>
        )}
      </div>
          </Container>
  );
};

export default LoanApplication;
