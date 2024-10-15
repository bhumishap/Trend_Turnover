import React, { useState } from 'react';
import axios from 'axios';
import email_icon from '../../assets/email_icon.png';
import pass_icon from '../../assets/password_icon.png';
import user_icon from '../../assets/username_icon.png';
import "./LoginSignin.css";

const Login = () => {
  const [action, setAction] = useState("Login");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({ username: "", email: "", password: "" });

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = { username: "", email: "", password: "" };

    if (action === "Sign Up" && !username) {
      newErrors.username = "Username is required.";
      valid = false;
    }

    if (!email) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = "Email is not valid.";
      valid = false;
    }

    if (!password) {
      newErrors.password = "Password is required.";
      valid = false;
    } else if (!validatePassword(password)) {
      newErrors.password = "Password must be at least 6 characters long.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleLogin = async () => {
    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:5000/login', { email, password });
        alert(response.data);
      } catch (error) {
        alert('Error logging in');
      }
    }
  };

  const handleSignup = async () => {
    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:5000/signup', { username, email, password });
        alert(response.data);
      } catch (error) {
        alert('Error signing up');
      }
    }
  };

  const handleSubmit = () => {
    if (action === "Login") {
      handleLogin();
    } else {
      handleSignup();
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <div className="login-text">{action}</div>
        <div className="login-underline"></div>
      </div>
      <div className="login-inputs">
        {action === "Sign Up" && (
          <div className="login-input">
            <img src={user_icon} alt="Icon for username" height="40px" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        )}
        <div className="error-message" style={{ minHeight: '20px' }}>{errors.username}</div>
        <div className="login-input">
          <img src={email_icon} alt="Icon for email" height="45px" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
          <div className="error-message" style={{ minHeight: '20px' }}>{errors.email}</div>
        <div className="login-input">
          <img src={pass_icon} alt="Icon for password" height="45px" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
          <div className="error-message" style={{ minHeight: '20px' }}>{errors.password}</div>
      </div>
      {action === "Login" && (
        <div className="login-forgot-password">
          Forgot Password? <span>Click Here</span>
        </div>
      )}
      <div className="login-submit-container">
        <div
          className={action === "Login" ? "login-submit login-gray" : "login-submit"}
          onClick={() => { setAction("Sign Up"); }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "login-submit login-gray" : "login-submit"}
          onClick={() => { setAction("Login"); }}
        >
          Login
        </div>
      </div>
      <div className='parent-container'>
        <button onClick={handleSubmit} className='btn-sz'>
          {action === "Login" ? "Login" : "Sign Up"}
        </button>
      </div>
    </div>
  );
}

export default Login;
