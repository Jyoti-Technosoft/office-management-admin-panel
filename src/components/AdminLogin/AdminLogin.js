import React, { useState } from "react";
import Logo from "./../../assets/img/LogoSVG.svg";
import Login from "./../../assets/img/AdminLoginSVG.svg";
import "./AdminLogin.css"; // Import the CSS file
import { Link, useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    //   if (email === "admin@gmail.com" && password === "Admin@123") {
    //     console.log("Admin logged in successfully!");
    //     alert('Login successful')
    //     navigate('/dashboard');
    //   } else {
    //     setErrorMessage("Invalid email or password");
    //   }

    if (email === "admin@gmail.com" && password === "Admin@123") {
      console.log(email === "admin@gmail.com" && password === "Admin@123");
      localStorage.setItem("loggedIn", "true");
      alert("Login successful");
      navigate("/dashboard");
    } else {
      setErrorMessage("Invalid email or password");
    }
  };

  return (
    <div className="container">
      {/* main container */}
      <div
        className="d-flex m-auto align-items-center justify-content-center main"
        style={{
          width: "1200px",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        }}
      >
        {/* for login img */}
        <div className="container w-50 m-auto">
          <img
            src={Login}
            alt="loginImg"
            style={{ maxWidth: "500px" /* WebkitBoxReflect:"below" */ }}
          />
        </div>
        {/* for form component and logo img */}
        <div className="w-50 login-right">
          {/* for form detail */}
          <div className="main-down">
            {/* for logo */}
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="main-up">
                <img src={Logo} alt="logo" style={{ width: "350px" }} />
              </div>
              <h1
                className="fw-normal mb-5 fs-1 mt-5"
                style={{ color: "#2875B0" }}
              >
                <b>Login</b>
                <br />
                <small style={{ color: "black" }}>
                  Login to your account
                </small>
              </h1>
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
              <div className="form-group">
                <label
                  className="form-label fs-4 fw-bold"
                  htmlFor="exampleInputEmail1"
                  style={{ color: "#2875B0" }}
                >
                  E-mail Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label
                  className="form-label fs-4 fw-bold"
                  htmlFor="exampleInputPassword1"
                  style={{ color: "#2875B0" }}
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  style={{ width: "1.5rem", height: "1.5rem" }}
                />
                <p
                  className="form-check-label fs-5 mb-3 ml-2"
                  htmlFor="exampleCheck1"
                  style={{ textAlign: "left" }}
                >
                  Remember me
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                    className="fs-5 bold"
                    style={{ color: "#2875B0", textAlign: "right" }}
                  >
                    Reset Password?
                  </span>
                </p>
              </div>
              <button
                type="submit"
                className="btn btn-primary mb-3 mt-3"
                style={{ backgroundColor: "#9bc31c", borderColor: "#9bc31c" }}
              >
                Log In
              </button>
              <p >
                Don't have an account yet?
                <span style={{ color: "#2875B0" }}>
                 <Link to="/signup">Join JyotiTechnosoft today.</Link> 
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
