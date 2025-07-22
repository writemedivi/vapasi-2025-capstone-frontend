// src/pages/LoanApplication.jsx
import React, { useState } from "react";
import DocumentDetails from "../components/user/applyLoan/DocumentDetails";
import IncomePropertyDetails from "../components/user/applyLoan/IncomePropertyDetails";
import UploadDocuments from "../components/user/applyLoan/UploadDocuments";
import ChecklistReview from "../components/user/applyLoan/ChecklistReview";
import Success from "../components/user/applyLoan/Success";
import { Button, Container } from "react-bootstrap";
import PersonalDetails from "../components/user/applyLoan/PersonalDetails";
import Header from "../components/Common/Header/Header";
import Footer from "../components/Common/Footer/Footer";

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

  // const next = () => setStep((prev) => prev + 1);
  // const prev = () => setStep((prev) => prev - 1);

  const prevHandler = () => {
    setCurrentStep(currentStep - 1);
  }
  const nextHandler = () => {
    const updatedStep = currentStep + 1; 
    const updateSteps = steps.map((obj) => {
      if(obj.step === currentStep){
        return { ...obj, completed: true }
      }
      return obj;
    })
    setSteps(updateSteps)
    setCurrentStep(updatedStep);
  }

  const submitApplicationHandler = () => {
    alert("Applied Loan Successfully")
  }


  const renderStep = () => {
    switch (currentStep) {
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
      // case 6:
      //   return <Success />;
      // default:
      //   return <PersonalDetails formData={formData} setFormData={setFormData} />;
    }
  };
console.log("steps", steps);
  return (
    <> 
    <Header />
    <Container style={{ padding: "2rem" }}>
      <h3>Loan Application Form</h3>
        <div className="container mt-5">
          <div className="progress mb-3" style={{ height: '8px' }}>
            <div
              className="progress-bar bg-primary"
              role="progressbar"
              style={{ width: `${(steps.filter(s => s.completed).length / steps.length) * 100}%` }}
              aria-valuenow={steps.filter(s => s.completed).length * 25}
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
          <div className="d-flex justify-content-between">
            {steps.map((step, index) => (
              <div key={step.id} className="text-center">
                <div
                  className={`rounded-circle ${
                    step.completed ? 'bg-primary text-white' : 'bg-light text-secondary'
                  }`}
                  style={{
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                  }}
                >
                  {step.completed ? '✓' : '○'}
                </div>
                <small className="d-block mt-1">{step.stepName}</small>
              </div>
            ))}
          </div>
        </div>
      {renderStep()}
      <div style={{ marginTop: "1rem" }}>
        {currentStep !== 1 && (
          <Button onClick={prevHandler} variant="secondary" style={{ marginRight: "1rem" }}>Back</Button>
        )}
        {currentStep < steps.length && (
          <Button onClick={nextHandler}>Next</Button>
        )}
        
        {(currentStep === steps.length) && (
          <Button onClick={submitApplicationHandler} variant="success">
            Submit Application
          </Button>
        )}
      </div>
      {/* <div style={{ marginTop: "1rem" }}>
        {step > 1 && step < 6 && <Button onClick={prev} variant="secondary" style={{ marginRight: "1rem" }}>Back</Button>}
        {step < 5 && <Button onClick={next}>Next</Button>}
        {step === 5 && (
          <Button onClick={next} variant="success">
            Submit Application
          </Button>
        )}
      </div> */}
      </Container>

      <Footer />
      </>
  );
};

export default LoanApplication;