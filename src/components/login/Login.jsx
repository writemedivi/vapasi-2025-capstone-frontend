import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const [errors, setErrors] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleChange = (e) => {

     const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });

  // Clear error for the current field
  setErrors({ ...errors, [name]: "" });

    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(loginData.email)) {
      newErrors.email = "Invalid email";
      valid = false;
    }

    if (loginData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  // ✅ Validate before submitting
  if (!validate()) {
    return; // ⛔ Stop if validation fails
  }

  try {
    const response = await axios.post(
      "http://localhost:8080/api/login",
      loginData
    );
    console.log("Login successful", response.data);
    alert("Login successful!");
    navigate("/dashboard");
  } catch (error) {
    console.error("Login failed", error);
    alert(error.response.data);
  }
};


  return (
    <div className="addUser">
      <h3>Sign in</h3>
      <form className="addUserForm" onSubmit={handleSubmit} noValidate>
        <div className="inputGroup">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            autoComplete="off"
            placeholder="Enter your Email"
            required
          />
          {errors.email && (
            <small style={{ color: "red" }}>{errors.email}</small>
          )}

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            autoComplete="off"
            placeholder="Enter your Password"
            required
            minLength={6}
          />

          {errors.password && (
          <small style={{ color: 'red' }}>{errors.password}</small>
        )}

          {/* {loginData.password && loginData.password.length < 6 && (
            <p style={{ color: "red", fontSize: "12px", marginTop: "2px" }}>
              Password must be at least 6 characters
            </p>
          )} */}

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
      <div className="login">
        <p>Don't have Account? </p>
        <Link to="/" className="btn btn-success">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
