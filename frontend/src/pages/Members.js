import React, { useState } from "react";
import axios from "axios";

const Members = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    birthDate: "",
    totalMember: "",
    societyName: "",
    houseNumber: "",
    photo: "",
    userName: "",
    password: "",
  });
  const handlechange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/members", data);

      if (response.status === 201) {
        window.alert(response.data.message);
      } else {
        window.alert(response.data.error);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      window.alert("Error occurs");
    }
  };

  return (
    <div>
      {/* The outer form tag is redundant, since you already have a form tag inside the card-body. Removed it */}
      <form className="Container text-center">
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="card w-75">
            <div className="card-header bg-success text-white text-center">
              <h2>Allocate House to Member</h2>
            </div>
            <div className="card-body">
              {/* Form tag should be properly closed */}
              <form>
                <div className="mb-1 row">
                  <label
                    htmlFor="firstName"
                    className="col-sm-2 col-form-label text-end"
                  >
                    First Name
                  </label>
                  <div className="col-sm-2 ">
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      value={data.firstName}
                      onChange={handlechange}
                    />
                  </div>
                </div>
                <div className="mb-1 row">
                  <label
                    htmlFor="lastName"
                    className="col-sm-2 col-form-label text-end"
                  >
                    Last Name
                  </label>
                  <div className="col-sm-2">
                    {/* Missing closing quotation mark for the name attribute */}
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      value={data.lastName}
                      onChange={handlechange}
                    />
                  </div>
                </div>
                <div className="mb-1 row">
                  <label
                    htmlFor="email"
                    className="col-sm-2 col-form-label text-end"
                  >
                    Email
                  </label>
                  <div className="col-sm-2">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={data.email}
                      onChange={handlechange}
                    />
                  </div>
                </div>
                <div className="mb-1 row">
                  <label
                    htmlFor="mobile"
                    className="col-sm-2 col-form-label text-end"
                  >
                    Mobile
                  </label>
                  <div className="col-sm-2">
                    <input
                      type="text"
                      className="form-control"
                      id="mobile"
                      name="mobile"
                      value={data.mobile}
                      onChange={handlechange}
                    />
                  </div>
                </div>
                <div className="mb-1 row">
                  <label
                    htmlFor="birthDate"
                    className="col-sm-2 col-form-label text-end"
                  >
                    Birthdate
                  </label>
                  <div className="col-sm-2">
                    {/* Missing closing quotation mark in id and name attributes */}
                    <input
                      type="date"
                      className="form-control"
                      id="birthDate"
                      name="birthDate"
                      value={data.birthDate}
                      onChange={handlechange}
                    />
                  </div>
                </div>
                <div className="mb-1 row">
                  <label
                    htmlFor="totalMember"
                    className="col-sm-2 col-form-label text-end"
                  >
                    Total Members
                  </label>
                  <div className="col-sm-2">
                    {/* Missing name attribute */}
                    <input
                      type="number"
                      className="form-control"
                      id="totalMember"
                      name="totalMember"
                      value={data.totalMember}
                      onChange={handlechange}
                    />
                  </div>
                </div>
                <div className="mb-1 row">
                  <label
                    htmlFor="societyName"
                    className="col-sm-2 col-form-label text-end"
                  >
                    Society Name
                  </label>
                  <div className="col-sm-2">
                    <select
                      className="form-control"
                      id="societyName"
                      name="societyName"
                      value={data.societyName}
                      onChange={handlechange}
                    >
                      <option value="">SELECT</option>
                      {/* Add options here */}
                    </select>
                  </div>
                </div>
                <div className="mb-1 row">
                  <label
                    htmlFor="houseNo"
                    className="col-sm-2 col-form-label text-end"
                  >
                    House No
                  </label>
                  <div className="col-sm-2">
                    {/* Missing closing quotation mark for the name attribute */}
                    <input
                      type="text"
                      className="form-control"
                      id="houseNumber"
                      name="houseNumber"
                      value={data.houseNumber}
                      onChange={handlechange}
                    />
                  </div>
                </div>
                <div className="mb-1 row">
                  <label
                    htmlFor="photo"
                    className="col-sm-2 col-form-label text-end"
                  >
                    Photo
                  </label>
                  <div className="col-sm-2">
                    <input
                      type="file"
                      className="form-control"
                      id="photo"
                      name="photo"
                      value={data.photo}
                      onChange={handlechange}
                    />
                  </div>
                </div>
                <div className="mb-1 row">
                  <label
                    htmlFor="username"
                    className="col-sm-2 col-form-label text-end"
                  >
                    Username
                  </label>
                  <div className="col-sm-2">
                    {/* Missing name attribute */}
                    <input
                      type="text"
                      className="form-control"
                      id="userName"
                      name="userName"
                      value={data.userName}
                      onChange={handlechange}
                    />
                  </div>
                </div>
                <div className="mb-1 row">
                  <label
                    htmlFor="password"
                    className="col-sm-2 col-form-label text-end"
                  >
                    Password
                  </label>
                  <div className="col-sm-2">
                    {/* Missing name attribute */}
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={data.password}
                      onChange={handlechange}
                    />
                  </div>
                </div>
                {/* Ensure the submit function is defined or replace it with a simple console.log */}
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={submit}
                >
                  Add Member
                </button>
              </form>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Members;
