import { useState, useContext } from "react";
import { Grid, TextField, Button, Typography, Paper, MenuItem } from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";
import { Redirect } from "react-router-dom";
import PasswordInput from "../lib/PasswordInput";
import EmailInput from "../lib/EmailInput";
import { SetPopupContext } from "../App";
import apiList from "../lib/apiList";
import isAuth from "../lib/isAuth";

const MyPaper = styled(Paper)({
  padding: "60px 60px",
  display: "flex",
  justifyContent: "space-between",
});

const MyLeftSide = styled("div")({
  flex: 1,
  marginRight: "20px",
});

const MyRightSide = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const MyInputBox = styled(TextField)({
  width: "400px",
  marginBottom: "20px",
});

const MySubmitButton = styled(Button)({
  width: "400px",
});

const Login = (props) => {
  const classes = useStyles();
  const setPopup = useContext(SetPopupContext);

  const [loggedin, setLoggedin] = useState(isAuth());

  const [signupDetails, setSignupDetails] = useState({
    type: "user",
    email: "",
    password: "",
    name: "",
    contactNumber: "",
    confirmCode: "",
  });

  const [inputErrorHandler, setInputErrorHandler] = useState({
    email: {
      untouched: true,
      required: true,
      error: false,
      message: "",
    },
    password: {
      untouched: true,
      required: true,
      error: false,
      message: "",
    },
    name: {
      untouched: true,
      required: true,
      error: false,
      message: "",
    },
    confirmCode: {
      untouched: true,
      required: true,
      error: false,
      message: "",
    },
  });

  const handleInput = (key, value) => {
    setSignupDetails({
      ...signupDetails,
      [key]: value,
    });
  };

  const handleInputError = (key, status, message) => {
    setInputErrorHandler({
      ...inputErrorHandler,
      [key]: {
        required: true,
        untouched: false,
        error: status,
        message: message,
      },
    });
  };

  const handleLogin = () => {
    const tmpErrorHandler = {};
    Object.keys(inputErrorHandler).forEach((obj) => {
      if (inputErrorHandler[obj].required && inputErrorHandler[obj].untouched) {
        tmpErrorHandler[obj] = {
          required: true,
          untouched: false,
          error: true,
          message: `${obj[0].toUpperCase() + obj.substr(1)} is required`,
        };
      } else {
        tmpErrorHandler[obj] = inputErrorHandler[obj];
      }
    });

    if (signupDetails.type === "admin" && signupDetails.confirmCode !== "Rbk-troc2023") {
      tmpErrorHandler.confirmCode = {
        required: true,
        untouched: false,
        error: true,
        message: "Invalid confirmation code. Please contact admin to receive the code.",
      };
    }

    const verified = !Object.keys(tmpErrorHandler).some((obj) => {
      return tmpErrorHandler[obj].error;
    });

    if (verified) {
      axios
        .post(apiList.signup, signupDetails)
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
      setInputErrorHandler(tmpErrorHandler);
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
    <MyPaper elevation={3}>
      <MyLeftSide>
        <img
          src="https://cdn-res.keymedia.com/cms/images/us/036/0223_637123482318135213.jpg"
          alt="Welcome"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </MyLeftSide>
      <MyRightSide>
        <Typography variant="h3">Welcome to Signup</Typography>
        <MyInputBox
          select
          label="Category"
          variant="outlined"
          value={signupDetails.type}
          onChange={(event) => handleInput("type", event.target.value)}
        >
          <MenuItem value="user">User</MenuItem>
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="seller">Seller</MenuItem>
        </MyInputBox>
        <MyInputBox
          label="Name"
          value={signupDetails.name}
          onChange={(event) => handleInput("name", event.target.value)}
          error={inputErrorHandler.name.error}
          helperText={inputErrorHandler.name.message}
          onBlur={(event) => {
            if (event.target.value === "") {
              handleInputError("name", true, "Name is required");
            } else {
              handleInputError("name", false, "");
            }
          }}
          variant="outlined"
        />
        <EmailInput
          label="Email"
          value={signupDetails.email}
          onChange={(event) => handleInput("email", event.target.value)}
          inputErrorHandler={inputErrorHandler}
          handleInputError={handleInputError}
          className={MyInputBox}
          required={true}
        />
        <PasswordInput
          label="Password"
          value={signupDetails.password}
          onChange={(event) => handleInput("password", event.target.value)}
          className={MyInputBox}
          error={inputErrorHandler.password.error}
          helperText={inputErrorHandler.password.message}
          onBlur={(event) => {
            if (event.target.value === "") {
              handleInputError("password", true, "Password is required");
            } else {
              handleInputError("password", false, "");
            }
          }}
        />
        {signupDetails.type === "admin" ? (
          <MyInputBox
            label="Confirmation Code"
            value={signupDetails.confirmCode}
            onChange={(event) => handleInput("confirmCode", event.target.value)}
            error={inputErrorHandler.confirmCode.error}
            helperText={inputErrorHandler.confirmCode.message}
            onBlur={(event) => {
              if (event.target.value === "") {
                handleInputError("confirmCode", true, "Confirmation code is required");
              } else {
                handleInputError("confirmCode", false, "");
              }
            }}
            variant="outlined"
          />
        ) : null}

        <MySubmitButton
          variant="contained"
          color="primary"
          onClick={handleLogin}
        >
          Signup
        </MySubmitButton>
      </MyRightSide>
    </MyPaper>
  );
};

export default Login;

