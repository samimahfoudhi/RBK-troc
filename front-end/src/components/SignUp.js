import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css";

const SignUp = () => {
  const [referrer, setReferrer] = useState("");
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setNumber] = useState("");
  const handleSubmit = () => {
    const member = {
      name,
      adress,
      email,
      password,
      phoneNumber,
    };

    if (referrer === "1") {
      axios
        .post("http://localhost:7000/createAdmin", member)
        .then((response) => console.log("done"))
        .catch((err) => console.log(err));
    }
    if (referrer === "2") {
      axios
        .post("http://localhost:7000/createSeller", member)
        .then((response) => console.log("done"))
        .catch((err) => console.log(err));
    }
    if (referrer === "3") {
      axios
        .post("http://localhost:7000/createUser", member)
        .then((response) => console.log("done"))
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="signup">
      <h2>Signup</h2>
      <form className="signupContainer">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />

        <label>Address:</label>
        <input
          type="text"
          name="address"
          required
          onChange={(e) => {
            setAdress(e.target.value);
          }}
        />
        <br />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />

        <label>Contact Number:</label>
        <input
          type="text"
          name="phoneNumber"
          required
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <br />
        <select
          id="referrer"
          name="referrer"
          onChange={(e) => setReferrer(e.target.value)}
        >
          <option value="">(select one)</option>
          <option value="1">Admin</option>
          <option value="2">Seller</option>
          <option value="3">User</option>
        </select>
        <br />

        <button type="submit" onClick={handleSubmit}>
          Signup
        </button>
      </form>
    </div>
  );
};

export default SignUp;
