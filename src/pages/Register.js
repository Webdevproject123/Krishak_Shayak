import React, { useState } from "react";
import basestyle from "./Base.module.css";
import registerstyle from "./Register.module.css";
import { useNavigate, NavLink } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [user, setUserDetails] = useState({
    name: '',
    email: "",
    password: "",
    about: ''
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
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      error.name = "Name is required";
    }
    if (!values.email) {
      error.email = "Email is required";
    } else if (!regex.test(values.email)) {
      error.email = "This is not a valid email format!";
    }
    if (!values.password) {
      error.password = "Password is required";
    } else if (values.password.length < 4) {
      error.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      error.password = "Password cannot exceed more than 10 characters";
    }
    if (!values.about) {
      error.about = "About is required";
    }
    return error;
  };

  const signupHandler = async (e) => {
    e.preventDefault();
    

      try {
        const response = await fetch('http://localhost:9090/api/users/', {
          method: 'POST',
          body: JSON.stringify(user),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const json = await response.json();
        if(!response.ok){
          console.log("User already exists");
        }
       else if (response.ok) {
          console.log("Registration successful");
          console.log(json);
          navigate('/login'); // redirect to login page or another page
        } 
      } catch (error) {
        console.error("Error:", error);
      }
    
  };

  return (
    <div className={registerstyle.register}>
      <form onSubmit={signupHandler}>
        <h1>Create your account</h1>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          onChange={changeHandler}
          value={user.name}
        />
        <p className={basestyle.error}>{formErrors.name}</p>
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
        <input
          type="text"
          name="about"
          id="about"
          placeholder="About"
          onChange={changeHandler}
          value={user.about}
        />
        <p className={basestyle.error}>{formErrors.about}</p>
        <button className={basestyle.button_common} type="submit">
          Register
        </button>
      </form>
      <NavLink to="/login">Already registered? Login</NavLink>
    </div>
  );
};

export default Register;
