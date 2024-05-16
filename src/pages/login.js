import React, { useState, useEffect } from "react";
import basestyle from "./Base.module.css";
import loginstyle from "./Login.module.css";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
const Login = ({ setUserState }) => {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };
  const validateForm = (values) => {
    const error = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      error.email = "Email is required";
    } else if (!regex.test(values.email)) {
      error.email = "Please enter a valid email address";
    }
    if (!values.password) {
      error.password = "Password is required";
    }
    return error;
  };

  const loginHandler =async (e) => {
    e.preventDefault();
    // setFormErrors(validateForm(user));
    // setIsSubmit(true);
    // if (!formErrors) {

    // }

    try {
      const response = await fetch('http://localhost:9090/api/users/login', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const json = await response.json();
      if(!response.ok){
        console.log("not authenticated")
      }
      if (response.ok) {
        console.log("Login successful");
        console.log(json);
        navigate('/'); // redirect to login page or another page
      } 
    } catch (error) {
      console.error("Error:", error);
    }
  };

  
  return (
    <div className={loginstyle.login}>
      <form onSubmit={loginHandler}>
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={changeHandler}
          value={user.email}
        />
        <p className={basestyle.error}>{formErrors.email}</p>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={changeHandler}
          value={user.password}
        />
        <p className={basestyle.error}>{formErrors.password}</p>
        <button type="submit" className={basestyle.button_common}>
          Login
        </button>
      </form>

      <NavLink to="/signup">Not yet registered? Register Now</NavLink>
    </div>
  );
};
export default Login;
