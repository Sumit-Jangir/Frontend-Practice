import { useState } from "react";
import "./App.css";
import Table from "./Table";

function App() {
  const [userDetail, setUserDetail] = useState({});

  const [localData, setLocalData] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  // console.log(userDetail)

  const userData = (e) => {
    e.preventDefault();
    const updatedUsers = [...localData, userDetail];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setLocalData(updatedUsers);
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    // console.log(storedUsers);
  };

  const getInputData = (e) => {
    const { name, value } = e.target;
    setUserDetail({ ...userDetail, [name]: value });
  };

  const deleteUser = (index) => {
    const updatedUsers = localData.filter((_, i) => i !== index);
    setLocalData(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <>
      <div className="wrapper">
        <div className="title">Registration Form</div>
        <div className="form">
          <div className="inputfield">
            <label>First Name</label>
            <input
              type="text"
              className="input"
              name="firstName"
              onChange={getInputData}
            />
          </div>
          <div className="inputfield">
            <label>Last Name</label>
            <input
              type="text"
              className="input"
              name="lastName"
              onChange={getInputData}
            />
          </div>
          <div className="inputfield">
            <label>Password</label>
            <input
              type="password"
              className="input"
              name="password"
              onChange={getInputData}
            />
          </div>
          <div className="inputfield">
            <label>Confirm Password</label>
            <input
              type="password"
              className="input"
              name="conformPassword"
              onChange={getInputData}
            />
          </div>
          <div className="inputfield">
            <label>Gender</label>
            <div className="custom_select">
              <select name="gender" onChange={getInputData}>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div className="inputfield">
            <label>Email Address</label>
            <input
              type="email"
              className="input"
              name="email"
              onChange={getInputData}
            />
          </div>
          <div className="inputfield">
            <label>Phone Number</label>
            <input
              type="tetx"
              className="input"
              name="phoneNumber"
              onChange={getInputData}
            />
          </div>
          <div className="inputfield">
            <label>Address</label>
            <textarea
              c
              lassName="textarea"
              name="address"
              onChange={getInputData}
            ></textarea>
          </div>
          <div className="inputfield">
            <label>Postal Code</label>
            <input
              type="text"
              className="input"
              name="postalCode"
              onChange={getInputData}
            />
          </div>
          <div className="inputfield terms">
            <label className="check">
              <input type="checkbox" name="cheakbox" onChange={getInputData} />
              <span className="checkmark"></span>
            </label>
            <p>Agreed to terms and conditions</p>
          </div>
          <div className="inputfield">
            <input
              type="submit"
              value="Register"
              className="btn"
              onClick={userData}
            />
          </div>
        </div>
      </div>

      <Table localData={localData} deleteUser={deleteUser} />
    </>
  );
}

export default App;
