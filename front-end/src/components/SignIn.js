import React from "react";
import "./SignIn.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logadmin, setLogadmin] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:7000/getAllAdmins")
      .then(({ data }) => setLogadmin(data))
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();
  const handleSign = () => {
    const isAdmin = logadmin.some((admin) => admin.email === email);
    if (isAdmin) {
      navigate("/test4");
    } else {
      props.importSeller({
        email: email,
        password: password,
      });
      navigate("/test");
    }
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
