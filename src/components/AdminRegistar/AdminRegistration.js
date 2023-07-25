import React, { useState } from "react";
import axios from "axios";

const AdminRegistration = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    dob: "",
    doj: "",
    designation: "",
    password: "",
    confirmpassword: "",
  });

  const [dateOfJoinError, setDateOfJoinError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    if (name === "doj" && new Date(value) < new Date(formData.dob)) {
      setDateOfJoinError("Date of Join cannot be less than Date of Birth.");
    } else {
      setDateOfJoinError("");
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmpassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "https://64b11825062767bc4825a958.mockapi.io/data",
        formData
      );

      console.log(response.data);

      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phonenumber: "",
        dob: "",
        doj: "",
        designation: "",
        password: "",
        confirmpassword: "",
      });
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  return (
    <div>
      <h1>Welcome to Jyoti Technosoft LLP</h1>
      <h4>Register your account</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        {/* for first name */}
        <label>First Name</label><br/>
        <input
          type="text"
          name="firstname"
          placeholder="Enter a firstname"
          required
          value={formData.firstname}
          onChange={handleChange}
        /><br/>

        {/* for last name */}
        <label>Last Name</label><br/>
        <input
          type="text"
          name="lastname"
          placeholder="Enter a lastname"
          required
          value={formData.lastname}
          onChange={handleChange}
        /><br/>

        {/* for Email */}
        <label>E-mail Address</label><br/>
        <input
          type="email"
          name="email"
          placeholder="Enter an email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          title="Enter a valid email address"
          value={formData.email}
          onChange={handleChange}
        /><br/>

        {/* for phone number */}
        <label>Phone Number</label><br/>
        <input
          type="text"
          name="phonenumber"
          placeholder="Enter a phone number"
          required
          pattern="[0-9]{10}"
          title="Enter a 10-digit phone number"
          value={formData.phonenumber}
          onChange={handleChange}
        /><br/>

        {/* for date of birth */}
        <label>Date of Birth</label><br/>
        <input
          type="date"
          name="dob"
          placeholder="Enter birthdate"
          required
          pattern="\d{4}-\d{2}-\d{2}"
          title="Enter a valid date in the format yyyy-mm-dd"
          value={formData.dob}
          onChange={handleChange}
        /><br/>

        {/* for date of join */}
        <label>Date of Join</label><br/>
        <input
          type="date"
          name="doj"
          placeholder="Enter date of join"
          required
          pattern="\d{4}-\d{2}-\d{2}"
          title="Enter a valid date in the format yyyy-mm-dd"
          value={formData.doj}
          onChange={handleChange}
        /><br/>
        {dateOfJoinError && <p style={{ color: "red" }}>{dateOfJoinError}</p>}<br/>

        {/* for designation */}
        <label>Designation</label><br/>
        <select
          name="designation"
          required
          value={formData.designation}
          onChange={handleChange}
        >
          <option value="">Select a designation</option>
          <option value="HR">HR</option>
          <option value="Manager">Manager</option>
          <option value="Designer">Designer</option>
          <option value="Developer">Developer</option>
          <option value="Jr.Developer">Jr.Developer</option>
        </select><br/>

        {/* for password */}
        <label>Password</label><br/>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          required
          value={formData.password}
          onChange={handleChange}
        /><br/>

        {/* for confirm password */}
        <label>Confirm Password</label><br/>
        <input
          type="password"
          name="confirmpassword"
          placeholder="Confirm password"
          required
          value={formData.confirmpassword}
          onChange={handleChange}
        /><br/>

        {/* for check-box */}
        <input type="checkbox" id="exampleCheck2" required />
        <label htmlFor="exampleCheck1">
          I agree to all the Terms and Privacy Policy
        </label><br/>
        {/* for create button */}
        <button type="submit">Create Account</button><br/>
        <p>
          Already have an account?{" "}
          <u style={{ cursor: "pointer", color: "#0d6efd" }}>Log In</u>
        </p>
      </form>
    </div>
  );
};

export default AdminRegistration;
