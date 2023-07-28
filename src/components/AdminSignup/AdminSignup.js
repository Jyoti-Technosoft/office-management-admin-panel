import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AdminSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    position: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmpassword) {
      alert("Passwords do not match");
      return;
    }
    

    try {
      const response = await axios.post(
        " http://localhost:8001/adminData",
        formData
      );

      console.log(response.data);

      setFormData({
        name: "",
        email: "",
        phonenumber: "",
        position: "",
        password: "",
        confirmpassword: "",
      });
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Admin Signup Page</h1>
        <label>Name</label>
        <br />
        <input
          type="text"
          name="name"
          placeholder="Enter a name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <label>E-mail</label>
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter an email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          title="Enter a valid email address"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <label>Phone no.</label>
        <br />
        <input
          type="text"
          name="phonenumber"
          placeholder="Enter a phone number"
          required
          pattern="[0-9]{10}"
          title="Enter a 10-digit phone number"
          value={formData.phonenumber}
          onChange={handleChange}
        />
        <br />
        <label>Position</label>
        <br />
        <select
          name="position"
          required
          value={formData.position}
          onChange={handleChange}
        >
          <option value="">Select a Position</option>
          <option value="CEO">CEO</option>
          <option value="HR">HR</option>
          <option value="Manager">Manager</option>
          <option value="Designer">Designer</option>
          <option value="Developer">Developer</option>
          <option value="Jr.Developer">Jr.Developer</option>
        </select>
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          required
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <label>Confirm Password</label>
        <br />
        <input
          type="password"
          name="confirmpassword"
          placeholder="Confirm password"
          required
          value={formData.confirmpassword}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Sign Up</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="submit">
          <Link to="/">Back</Link>
        </button>
        <br />
      </form>
    </div>
  );
};
export default AdminSignup;
