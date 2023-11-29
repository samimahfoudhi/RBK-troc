import { useContext, useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  makeStyles,
  Paper,
} from "@material-ui/core";
import axios from "axios";
import { Redirect } from "react-router-dom";

import PasswordInput from "../lib/PasswordInput";
import EmailInput from "../lib/EmailInput";
import { SetPopupContext } from "../App";

import apiList from "../lib/apiList";
import isAuth from "../lib/isAuth";

const useStyles = makeStyles((theme) => ({
  body: {
    padding: "60px 60px",
    display: "flex",
    justifyContent: "space-between",
  },
  leftSide: {
    flex: 1,
    marginRight: "20px",
  },
  rightSide: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  inputBox: {
    width: "300px",
    marginBottom: "20px",
  },
  submitButton: {
    width: "300px",
  },
  welcomeMessage: {
    fontSize: "24px",
    color: "#555",
    marginBottom: "20px",
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const setPopup = useContext(SetPopupContext);

  const [loggedin, setLoggedin] = useState(isAuth());

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const [inputErrorHandler, setInputErrorHandler] = useState({
    email: {
      error: false,
      message: "",
    },
    password: {
      error: false,
      message: "",
    },
  });

  const handleInput = (key, value) => {
    setLoginDetails({
      ...loginDetails,
      [key]: value,
    });
  };

  const handleInputError = (key, status, message) => {
    setInputErrorHandler({
      ...inputErrorHandler,
      [key]: {
        error: status,
        message: message,
      },
    });
  };

  const handleLogin = () => {
    const verified = !Object.keys(inputErrorHandler).some((obj) => {
      return inputErrorHandler[obj].error;
    });
    if (verified) {
      axios
        .post(apiList.login, loginDetails)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("type", response.data.type);
          setLoggedin(isAuth());
          setPopup({
            open: true,
            severity: "success",
            message: "Logged in successfully",
          });
          console.log(response);
        })
        .catch((err) => {
          setPopup({
            open: true,
            severity: "error",
            message: err.response.data.message,
          });
          console.log(err.response);
        });
    } else {
      setPopup({
        open: true,
        severity: "error",
        message: "Incorrect Input",
      });
    }
  };

  return loggedin ? (
    <Redirect to="/" />
  ) : (
    <Paper elevation={3} className={classes.body}>
      <div className={classes.leftSide}>
        <img
          src="https://cdn-res.keymedia.com/cms/images/us/036/0223_637123482318135213.jpg" 
          alt="Welcome"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className={classes.rightSide}>
        
        <Typography variant="h3" className={classes.welcomeMessage}>
          explore the word with rbk-troc
        </Typography>
        <EmailInput
          label="Email"
          value={loginDetails.email}
          onChange={(event) => handleInput("email", event.target.value)}
          inputErrorHandler={inputErrorHandler}
          handleInputError={handleInputError}
          className={classes.inputBox}
        />
        <PasswordInput
          label="Password"
          value={loginDetails.password}
          onChange={(event) => handleInput("password", event.target.value)}
          className={classes.inputBox}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleLogin()}
          className={classes.submitButton}
        >
          Login
        </Button>
      </div>
    </Paper>
  );
};

export default Login;

