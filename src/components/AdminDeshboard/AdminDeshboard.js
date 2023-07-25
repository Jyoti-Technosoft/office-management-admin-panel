import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDeshboard = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://64b11825062767bc4825a958.mockapi.io/data"
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
      <h1>Admin Deshboard</h1>
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
      </div>

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
      <button type="submit">Log Out</button>
    </div>
  );
};
export default AdminDeshboard;
