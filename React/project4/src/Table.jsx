import React from "react";
import './App.css'; // Import the CSS file for styling

const Table = ({ localData, deleteUser }) => {
  return (
    <div>
      <h2>User Details</h2>
      {localData.length > 0 ? (
        <table className="styled-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Password</th>
              <th>Confirm Password</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Postal Code</th>
              <th>Agreed to Terms</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {localData.map((user, index) => (
              <tr key={index}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.password}</td>
                <td>{user.conformPassword}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.address}</td>
                <td>{user.postalCode}</td>
                <td>{user.cheakbox ? "Yes" : "No"}</td>
                <td><button onClick={() => deleteUser(index)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users registered yet.</p>
      )}
    </div>
  );
};

export default Table;
