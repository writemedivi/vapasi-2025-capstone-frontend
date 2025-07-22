import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Navbar, Nav } from "react-bootstrap";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

   const validate = () => {
    const newErrors = {};
    const nameRegex = /^[A-Za-z ]{1,30}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name || !nameRegex.test(formData.name)) {
      newErrors.name = "Name should contain only letters (max 30 characters)";
    }

    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

     setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: "" }));

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post(
          "http://localhost:8080/users/signup",
          formData
        ); if (response.status === 201 || response.status === 200) {
        // Backend indicates success
        console.log("Signup Response:", response.data);

        const message = response.data.message || "Signup successful!";
        alert(message);

        // Navigate based on role or success
        navigate("/customer-dashboard");
      } else {
        // Unexpected success response
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      if (error.response) {
        // Server responded with an error status code
        console.error("Server error:", error.response.data);
        alert(error.response.data.message || "Signup failed!");
      } else if (error.request) {
        // Request was made but no response
        console.error("No response from server:", error.request);
        alert("Server not reachable. Please try again later.");
      } else {
        // Other errors
        console.error("Error:", error.message);
        alert("An error occurred. Please try again.");
      }
    }
  }
};

  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">🏠 VW Home Loan</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="addUser">
        <h3>Sign Up</h3>
        <form className="addUserForm" onSubmit={handleSubmit}>
          <div className="inputGroup">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              autoComplete="off"
            />
            {errors.name && <p className="text-danger">{errors.name}</p>}

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              autoComplete="off"
            />
            {errors.email && <p className="text-danger">{errors.email}</p>}

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              autoComplete="off"
            />
            {errors.password && (
              <p className="text-danger">{errors.password}</p>
            )}

            <button type="submit" className="btn btn-success">
              Sign Up
            </button>
          </div>
        </form>

        <div className="login">
          <p>Already have an Account?</p>
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;