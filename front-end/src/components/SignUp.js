import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    password: "",
    phoneNumber: "",
    isAdmin: false,
    isUser: false,
    isSeller: false,
    codeAdmin: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.address ||
      !formData.email ||
      !formData.password ||
      !formData.phoneNumber
    ) {
      console.error("Please fill in all required fields");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:7000/api/auth/signup",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div className="signup">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} className="signupContainer">
        <label>Name:</label>
        <input type="text" name="name" onChange={handleInputChange} required />
        <br />

        <label>Address:</label>
        <input
          type="text"
          name="address"
          onChange={handleInputChange}
          required
        />
        <br />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          onChange={handleInputChange}
          required
        />
        <br />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          onChange={handleInputChange}
          required
        />
        <br />

        <label>Contact Number:</label>
        <input
          type="text"
          name="phoneNumber"
          onChange={handleInputChange}
          required
        />
        <br />

        <label>
          Admin:
          <input
            type="checkbox"
            name="isAdmin"
            onChange={handleCheckboxChange}
          />
        </label>

        <label>
          User:
          <input
            type="checkbox"
            name="isUser"
            onChange={handleCheckboxChange}
          />
        </label>

        <label>
          Seller:
          <input
            type="checkbox"
            name="isSeller"
            onChange={handleCheckboxChange}
          />
        </label>

        {formData.isAdmin && (
          <>
            <br />
            <label>Admin Code:</label>
            <input
              type="text"
              name="codeAdmin"
              onChange={handleInputChange}
              required
            />
          </>
        )}
        <br />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignUp;
