import React, { useState } from "react";
import apiRequest from "../functions/requestApi";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setCurrentuser }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Username:", formData.username);
    console.log("Password:", formData.password);

    const settings = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData),
    };

    const user = await apiRequest("users/login", settings);
    if (user.error) {
      alert(user.error);
    } else {
      localStorage.setItem("currentuser",user);
      await setCurrentuser(JSON.parse(user))
      console.log('user:', user);
      navigate("/home");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <br />
          <input
            id="username"
            type="text"
            name="username" 
            value={formData.username}  
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password:</label>
          <br />
          <input
            id="password"
            type="password"
            name="password"  
            value={formData.password}  
            onChange={handleChange}
          />
        </div>
        <Link to="/register">dont have an acount? register here</Link><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

