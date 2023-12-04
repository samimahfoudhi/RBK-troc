import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css";
import { useNavigate } from "react-router";
const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    adress: "",
    email: "",
    password: "",
    phoneNumber: null,
    isAdmin: false,
    isUser: false,
    isSeller: false,
    codeAdmin: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.name === "phoneNumber"
          ? parseInt(e.target.value, 10)
          : e.target.value.trim(),
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      isAdmin: name === "isAdmin" ? checked : false,
      isUser: name === "isUser" ? checked : false,
      isSeller: name === "isSeller" ? checked : false,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.adress ||
      !formData.email ||
      !formData.password ||
      !formData.phoneNumber
    ) {
      console.error("Please fill in all required fields");
      return;
    }

    try {
      let signUpPath = "";

      if (formData.isAdmin && formData.codeAdmin === "rbk-troc2023") {
        signUpPath = "http://localhost:7000/createAdmin";
      } else if (formData.isSeller) {
        signUpPath = "http://127.0.0.1:7000/createSeller";
        console.log("first");
      } else {
        signUpPath = "http://localhost:7000/createUser";
      }

      const response = await axios.post(signUpPath, formData);
      console.log(response.data);
    } catch (error) {
      console.error("Error during signup:", error);
      if (error.response) {
        console.error("Server response:", error.response.data);
      }
    }
    navigate("/login");
  };

  return (
    <div className="signup">
      <h2 className="signuptitle">Signup</h2>

      <form onSubmit={handleSubmit} className="signupContainer">
        <label>Name:</label>
        <input type="text" name="name" onChange={handleInputChange} required />
        <br />

        <label>adress:</label>
        <input
          type="text"
          name="adress"
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
            checked={formData.isAdmin}
            onChange={handleCheckboxChange}
          />
        </label>

        <label>
          User:
          <input
            type="checkbox"
            name="isUser"
            checked={formData.isUser}
            onChange={handleCheckboxChange}
          />
        </label>

        <label>
          Seller:
          <input
            type="checkbox"
            name="isSeller"
            checked={formData.isSeller}
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
