import React from "react";

const ChecklistReview = ({ formData }) => {
  return (
    <div>
      <h4>Review Checklist</h4>
      <ul>
        <li>Personal Details: {formData.name}, {formData.email}</li>
        <li>Aadhar: {formData.aadhar}</li>
        <li>PAN: {formData.pan}</li>
        <li>Monthly Income: ₹{formData.income}</li>
        <li>Property: {formData.propertyLocation}, ₹{formData.propertyValue}</li>
      </ul>
    </div>
  );
};

export default ChecklistReview;