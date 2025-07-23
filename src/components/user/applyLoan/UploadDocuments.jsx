// src/components/user/applyLoan/UploadDocuments.jsx
import React from "react";
import { Form } from "react-bootstrap";

const UploadDocuments = ({ formData, setFormData, formErrors }) => {
  return (
    <Form>
      <h4>Upload Documents</h4>

      <Form.Group>
        <Form.Label>Aadhar Document</Form.Label>
        <Form.Control
          type="file"
          isInvalid={!!formErrors?.aadharDoc}
          onChange={(e) =>
            setFormData({ ...formData, aadharDoc: e.target.files[0] })
          }
        />
        <Form.Control.Feedback type="invalid">
          {formErrors?.aadharDoc}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label>PAN Document</Form.Label>
        <Form.Control
          type="file"
          isInvalid={!!formErrors?.panDoc}
          onChange={(e) =>
            setFormData({ ...formData, panDoc: e.target.files[0] })
          }
        />
        <Form.Control.Feedback type="invalid">
          {formErrors?.panDoc}
        </Form.Control.Feedback>
      </Form.Group>
    </Form>
  );
};

export default UploadDocuments;
