import React from "react";
import { Form } from "react-bootstrap";

const UploadDocuments = ({ formData, setFormData }) => {
  return (
    <Form>
      <h4>Upload Documents</h4>
      <Form.Group>
        <Form.Label>Aadhar Document</Form.Label>
        <Form.Control
          type="file"
          onChange={(e) =>
            setFormData({ ...formData, aadharDoc: e.target.files[0]?.name })
          }
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>PAN Document</Form.Label>
        <Form.Control
          type="file"
          onChange={(e) =>
            setFormData({ ...formData, panDoc: e.target.files[0]?.name })
          }
        />
      </Form.Group>
    </Form>
  );
};

export default UploadDocuments;
