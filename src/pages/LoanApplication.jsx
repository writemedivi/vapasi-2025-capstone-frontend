// src/pages/LoanApplication.jsx
import React, { useState } from "react";
import axios from "axios";
import DocumentDetails from "../components/user/applyLoan/DocumentDetails";
import IncomePropertyDetails from "../components/user/applyLoan/IncomePropertyDetails";
import UploadDocuments from "../components/user/applyLoan/UploadDocuments";
import ChecklistReview from "../components/user/applyLoan/ChecklistReview";
import PersonalDetails from "../components/user/applyLoan/PersonalDetails";
import Header from "../components/Common/Header/Header";
import Footer from "../components/Common/Footer/Footer";
import { Button, Container } from "react-bootstrap";

const LoanApplication = () => {
  const initialSteps = [
    { id: 1, step: 1, completed: false, stepName: "Personal Details" },
    { id: 2, step: 2, completed: false, stepName: "Document Details" },
    { id: 3, step: 3, completed: false, stepName: "Income/Property Details" },
    { id: 4, step: 4, completed: false, stepName: "Upload Document" },
    { id: 5, step: 5, completed: false, stepName: "Checklist Review" },
  ];

  const [steps, setSteps] = useState(initialSteps);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [acceptedTerms, setAcceptedTerms] = useState(false);


  // Step 1: Personal Details
  const validatePersonalDetails = () => {
    const errors = {};
    if (!formData.fullName?.trim()) errors.fullName = "Full Name is required";
    if (!formData.email?.trim()) {
      errors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid Email Address";
    }
    if (!formData.phone?.trim()) {
      errors.phone = "Phone Number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Phone Number must be 10 digits";
    }
    if (!formData.dob) errors.dob = "Date of Birth is required";
    if (!formData.gender) errors.gender = "Gender is required";
    return errors;
  };

  // Step 2: Document Details
  const validateDocumentDetails = () => {
    const errors = {};
    if (!formData.aadhar?.trim()) {
      errors.aadhar = "Aadhar Number is required";
    } else if (!/^\d{12}$/.test(formData.aadhar)) {
      errors.aadhar = "Aadhar Number must be 12 digits";
    }

    if (!formData.pan?.trim()) {
      errors.pan = "PAN Number is required";
    } else if (!/^[A-Z]{5}\d{4}[A-Z]$/.test(formData.pan)) {
      errors.pan = "Invalid PAN Number format";
    }
    return errors;
  };

  // Step 3: Income and Property
  const validateIncomePropertyDetails = () => {
    const errors = {};
    if (!formData.income || Number(formData.income) <= 0) {
      errors.income = "Monthly Income must be a positive number";
    }
    if (!formData.propertyLocation?.trim()) {
      errors.propertyLocation = "Property Location is required";
    }
    if (!formData.propertyValue || Number(formData.propertyValue) <= 0) {
      errors.propertyValue = "Property Value must be a positive number";
    }
    return errors;
  };

  // Step 4: Upload Documents
  const validateUploadDocuments = () => {
    const errors = {};
    if (!formData.aadharDoc) errors.aadharDoc = "Aadhar document is required";
    if (!formData.panDoc) errors.panDoc = "PAN document is required";
    return errors;
  };

  const prevHandler = () => {
    setFormErrors({});
    setCurrentStep(currentStep - 1);
  };

  const nextHandler = () => {
    let errors = {};
    if (currentStep === 1) errors = validatePersonalDetails();
    else if (currentStep === 2) errors = validateDocumentDetails();
    else if (currentStep === 3) errors = validateIncomePropertyDetails();
    else if (currentStep === 4) errors = validateUploadDocuments();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    const updatedSteps = steps.map((step) =>
      step.step === currentStep ? { ...step, completed: true } : step
    );
    setSteps(updatedSteps);
    setCurrentStep(currentStep + 1);
  };

  const submitApplicationHandler = async () => {
    try {
      const formPayload = new FormData();
      for (const key in formData) {
        formPayload.append(key, formData[key]);
      }

      const response = await axios.post(
        "http://localhost:8080/users/applyloan",
        formPayload,
       {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        alert("Loan application submitted successfully!");
        // Optionally reset formData and state
        // setFormData({});
        // setCurrentStep(1);
      } else {
        alert("Failed to submit loan application.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalDetails
            formData={formData}
            setFormData={setFormData}
            formErrors={formErrors}
          />
        );
      case 2:
        return (
          <DocumentDetails
            formData={formData}
            setFormData={setFormData}
            formErrors={formErrors}
          />
        );
      case 3:
        return (
          <IncomePropertyDetails
            formData={formData}
            setFormData={setFormData}
            formErrors={formErrors}
          />
        );
      case 4:
        return (
          <UploadDocuments
            formData={formData}
            setFormData={setFormData}
            formErrors={formErrors}
          />
        );
      case 5:
        return <ChecklistReview formData={formData} 
        acceptedTerms={acceptedTerms}
      setAcceptedTerms={setAcceptedTerms}/>;
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <Container style={{ padding: "2rem" }}>
        <h3>Loan Application Form</h3>
        <div className="container mt-5">
          <div className="progress mb-3" style={{ height: "8px" }}>
            <div
              className="progress-bar bg-primary"
              role="progressbar"
              style={{
                width: `${(steps.filter((s) => s.completed).length / steps.length) * 100}%`,
              }}
              aria-valuenow={steps.filter((s) => s.completed).length * 25}
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
          <div className="d-flex justify-content-between">
            {steps.map((step) => (
              <div key={step.id} className="text-center">
                <div
                  className={`rounded-circle ${
                    step.completed ? "bg-primary text-white" : "bg-light text-secondary"
                  }`}
                  style={{
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                  }}
                >
                  {step.completed ? "✓" : "○"}
                </div>
                <small className="d-block mt-1">{step.stepName}</small>
              </div>
            ))}
          </div>
        </div>

        {renderStep()}

        <div style={{ marginTop: "1rem" }}>
          {currentStep !== 1 && (
            <Button
              onClick={prevHandler}
              variant="secondary"
              style={{ marginRight: "1rem" }}
            >
              Back
            </Button>
          )}
          {currentStep < steps.length && (
            <Button onClick={nextHandler}>Next</Button>
          )}
          {currentStep === steps.length && (
            <Button onClick={submitApplicationHandler} variant="success" disabled={!acceptedTerms}>
              Submit Application
            </Button>
          )}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default LoanApplication;
