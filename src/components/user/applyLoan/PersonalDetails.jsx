import React, { useEffect } from "react";
import { Form } from "react-bootstrap";

const PersonalDetails = ({ formData, setFormData, formErrors }) => {

    const getUser = localStorage.getItem("user")
   const userDetails = getUser?JSON.parse(getUser): null ;
   console.log("userDetails" ,userDetails);

const get18YearsAgoDate = () => {
  const today = new Date();
  today.setFullYear(today.getFullYear() - 18);
  return today.toISOString().split("T")[0]; // Format: yyyy-mm-dd
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    setFormData({...formData, fullName: userDetails.name || "", email: userDetails.email || "" })
  }, [] )


  return (
    <Form>
      <h4>Personal Details</h4>

      <Form.Group>
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          name="fullName"
          value={formData.fullName || ""}
          onChange={handleChange}
          placeholder="Enter your full name"
          isInvalid={!!formErrors?.fullName}
          disabled
        />
        <Form.Control.Feedback type="invalid">
          {formErrors?.fullName}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email || ""}
          onChange={handleChange}
          placeholder="Enter your email"
          isInvalid={!!formErrors?.email}
          disabled
        />
        <Form.Control.Feedback type="invalid">
          {formErrors?.email}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          name="mobileNo"
          value={formData.mobileNo || ""}
          onChange={handleChange}
          placeholder="Enter your phone number"
          isInvalid={!!formErrors?.mobileNo}
        />
        <Form.Control.Feedback type="invalid">
          {formErrors?.mobileNo}
        </Form.Control.Feedback>
      </Form.Group>

      {/* New Address Field */}
      <Form.Group>
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          name="address"
          value={formData.address || ""}
          onChange={handleChange}
          placeholder="Enter your address"
          isInvalid={!!formErrors?.address}
        />
        <Form.Control.Feedback type="invalid">
          {formErrors?.address}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control
          type="date"
          name="dob"
          value={formData.dob || ""}
          onChange={handleChange}
          isInvalid={!!formErrors?.dob}
          max={get18YearsAgoDate()}
        />
        <Form.Control.Feedback type="invalid">
          {formErrors?.dob}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label>Gender</Form.Label>
        <Form.Control
          as="select"
          name="gender"
          value={formData.gender || ""}
          onChange={handleChange}
          isInvalid={!!formErrors?.gender}
        >
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </Form.Control>
        <Form.Control.Feedback type="invalid">
          {formErrors?.gender}
        </Form.Control.Feedback>
      </Form.Group>
    </Form>
  );
};

export default PersonalDetails;
