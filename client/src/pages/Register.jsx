import React, { useEffect } from 'react'
import { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({ name: "", password: "" });
  const [varifyPassword, setVarifyPassword] = useState("");
  const [varify, setVarify] = useState(null);

  useEffect(()=>{
   varifyPassword !== formData.password
      ? setVarify(
          <><br/><span style={{ color: "red", fontSize:"12px"}}>must be the same as password!</span></>
        )
      : setVarify(null);
  },[varifyPassword]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(varify){
      alert("varify password!")
      return;
    }
    console.log("Name:", formData.name);
    console.log("Password:", formData.password);
  };

  

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
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
        <div>
          <label htmlFor="repete-password">varify Password:</label>
          <br />
          <input
            id="repete-password"
            type="password"
            name="repete-password"
            value={varifyPassword}
            onChange={(e) => setVarifyPassword(e.target.value)}
          />
          {varify}
        </div>
        
      
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register
