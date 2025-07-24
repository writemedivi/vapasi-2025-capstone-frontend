import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ChecklistReview = ({ formData, acceptedTerms, setAcceptedTerms }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCheckboxChange = (event) => {
    setAcceptedTerms(event.target.checked);
  };

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <h4>Review Checklist</h4>
      <ul>
        <li>Personal Details: {formData.fullName}, {formData.email}</li>
        <li>Aadhar: {formData.aadharNo}</li>
        <li>PAN: {formData.panNo}</li>
        <li>Monthly Income: ₹{formData.monthlyIncome}</li>
        <li>Property: {formData.location}, ₹{formData.estimatedCost}</li>
        <li>EMI Amount:{formData.emi}</li>
        <li>EMI Tenure:{formData.tenure}</li>
      </ul>

      <div style={{ marginTop: "1em" }}>
        <input
          type="checkbox"
          id="terms"
          checked={acceptedTerms}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="terms" style={{ marginLeft: "0.5em" }}>
          I agree to the{" "}
          <span
            style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
            onClick={handleOpenModal}
          >
            Terms and Conditions
          </span>
        </label>
      </div>

      {/* Modal for Terms and Conditions */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Terms and Conditions</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: "400px", overflowY: "auto" }}>
          <p>
            By submitting this application, you agree to the following:
          </p>
          <ul>
            <li>Your information is true and accurate to the best of your knowledge.</li>
            <li>We may verify the documents you have submitted.</li>
            <li>Loan approval is subject to eligibility and documentation review.</li>
            <li>We may contact you for additional verification steps.</li>
            <li>All processing is in accordance with our privacy policy and applicable laws.</li>
          </ul>
          <p>
            Please read our full policy documents for more details.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ChecklistReview;
