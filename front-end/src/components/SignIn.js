import React from "react";
import "./SignIn.css";
import { useState } from "react";
import { useNavigate } from "react-router";
const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSign = () => {
    props.importSeller({
      email: email,
      password: password,
    });
    navigate("/test");
  };
  return (
    <div className="signin">
      <div className="signInContainer">
        <form>
          <label>Email</label>
          <br />
          <input
            type="text"
            placeholder="email adress"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <label>Password</label>
          <br />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </form>
        <button onClick={handleSign}>submit</button>
      </div>
    </div>
  );
};

export default SignIn;
