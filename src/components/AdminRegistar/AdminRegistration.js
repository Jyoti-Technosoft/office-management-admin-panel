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
    <div className="container">
      <div className="registration-box">
        <h1>Welcome to Jyoti Technosoft LLP</h1>
        <h4>Register your account</h4>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  placeholder="Enter a firstname"
                  className="form-control"
                  required
                  value={formData.firstname}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">E-mail Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter an email"
                  className="form-control"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  title="Enter a valid email address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  placeholder="Enter birthdate"
                  className="form-control"
                  required
                  pattern="\d{4}-\d{2}-\d{2}"
                  title="Enter a valid date in the format yyyy-mm-dd"
                  value={formData.dob}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Designation</label>
                <select
                  name="designation"
                  className="form-control"
                  required
                  value={formData.designation}
                  onChange={handleChange}
                >
                  <option value="">Select a designation</option>
                  <option value="Manager">Manager</option>
                  <option value="Developer">Developer</option>
                  <option value="HR">HR</option>
                  <option value="Jr.Developer">Jr.Developer</option>
                  <option value="Designer">Designer</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  name="confirmpassword"
                  placeholder="Confirm password"
                  className="form-control"
                  required
                  value={formData.confirmpassword}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Enter a lastname"
                  className="form-control"
                  required
                  value={formData.lastname}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="text"
                  name="phonenumber"
                  placeholder="Enter a phone number"
                  className="form-control"
                  required
                  pattern="[0-9]{10}"
                  title="Enter a 10-digit phone number"
                  value={formData.phonenumber}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Date of Join</label>
                <input
                  type="date"
                  name="doj"
                  placeholder="Enter date of join"
                  className="form-control"
                  required
                  pattern="\d{4}-\d{2}-\d{2}"
                  title="Enter a valid date in the format yyyy-mm-dd"
                  value={formData.doj}
                  onChange={handleChange}
                />
                {dateOfJoinError && (
                  <p style={{ color: "red" }}>{dateOfJoinError}</p>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className="form-control"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck2"
                    required
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    I agree to all the Terms and Privacy Policy
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <button type="submit" className="btn btn-primary mt-4 mb-4">
                  Create Account
                </button>
              </div>
            </div>
            <p>
              Already have an account?{" "}
              <u style={{ cursor: "pointer", color: "#0d6efd" }}>Log In</u>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminRegistration;
