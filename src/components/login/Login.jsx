import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container,  Navbar, Nav } from 'react-bootstrap';
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
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

  //   const PasswordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\\d)(?=.[@$!%?&])[A-Za-z\\d@$!%?&]{6,}$/;
    
  //   if (!PasswordRegex.test(loginData.password)) {
  //     newErrors.password="Not a strong password"
  //     valid = false;
  //   } 
  //   setErrors(newErrors);
  //   return valid;
  // };

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
      "http://localhost:8080/users/login",
      loginData
    );
    console.log("Login successful", response.data);
    localStorage.setItem("userId", response.data.data.id);
    localStorage.setItem("userName", response.data.data.name);

    localStorage.setItem("user",JSON.stringify(response.data.data) );


    if(response.data.data.role == "Customer"){
navigate("/customer-dashboard");
}
else{
  navigate("/admin-dashboard");
}
  } catch (error) {
    console.error("Login failed", error);
    alert(error.response.data);
  }
};


  return (
    <div >
      <Header screen="login"/>

      <div className="addUser">
      <h3>Login</h3>
      <form className="addUserForm" onSubmit={handleSubmit} noValidate>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
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

          <label htmlFor="password">Password</label>
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
        <Link to="/signup" className="btn btn-success">
          Sign Up
        </Link>
      </div>
    </div>
     <Footer /> 
    </div>
  );
};

export default Login;
