import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [userData, setUserData] = useState([]);
  // const handleLogOut = () => {
  //   logOut(); // Call the parent logOut function
  // };
  const handleLogOut = () => {
    localStorage.setItem("loggedIn", "false"); 
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/employeeData"
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div className="Admin-panel">
        {/* profile img,Admin name */}
        <label>Features</label>
        <br />
        <button type="submit">Dashboard</button>
        <br />
        <br />
        <label>Organization</label>
        <br />
        <ul>
          <li>Employee Management</li>
          <li>Leave Management</li>
          <li>Attendance Management</li>
        </ul>
        <br />
      </div><br/>
      
      <button type="submit">
        <Link to="/register">
          Register Data
        </Link>
      </button><br/><br/> 

      <h2>User Data</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>&nbsp;
            <th>Date of Birth</th>&nbsp;
            <th>Date of Join</th>&nbsp;
            <th>Designation</th>&nbsp;
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{`${user.firstname} ${user.lastname}`}</td>&nbsp;
              <td>{user.dob}</td>&nbsp;
              <td>{user.doj}</td>&nbsp;
              <td>{user.designation}</td>&nbsp;
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <br />
      <button type="submit" 
      onClick={handleLogOut}
      >
        <Link to="/">Log Out</Link>
      </button>
    </div>
  );
};
export default AdminDashboard;
