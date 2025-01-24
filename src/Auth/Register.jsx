import "./login.css";
import Logo from "../assets/images/logo.png";
import { Grid, Paper, TextField, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import { handleError, handleSuccess } from "../assets/utils/utils";

export const Register = () => {
  const paperStyle = {
    padding: 40,
    height: "65vh",
    width: 400,
  };
  const btnstyle = { margin: "8px 0" };
  const textFieldStyle = { marginBottom: "20px" };

  const navigate = useNavigate();
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    const copyLoginInfo = { ...signupInfo };
    copyLoginInfo[name] = value;
    setSignupInfo(copyLoginInfo);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      return handleError("All fields are required to fill!!!");
    }
    try {
      const url = "http://localhost:3000/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      });
      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }

      console.log(result);
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <>
      <div className="container">
        <Grid
          container
          style={{ height: "90%" }}
          justifyContent="center"
          alignItems="center"
        >
          <Paper elevation={12} style={paperStyle} align="center">
            <form onSubmit={handleSignup}>
              <Grid align="center"></Grid>
              <img className="logInImg" src={Logo} alt="Logo" />
              <p>Enter Fullname:</p>
              <TextField
                onChange={handleChange}
                value={signupInfo.name}
                className="userinput"
                label="name"
                name="name"
                placeholder="Enter name"
                variant="outlined"
                fullWidth
                style={textFieldStyle}
              />
              <p>Enter Email:</p>
              <TextField
                onChange={handleChange}
                value={signupInfo.email}
                className="userinput"
                label="email"
                name="email"
                placeholder="Enter Email"
                variant="outlined"
                fullWidth
                style={textFieldStyle}
              />
              <p>Create Password:</p>
              <TextField
                onChange={handleChange}
                value={signupInfo.password}
                label="password"
                name="password"
                placeholder="Enter password"
                type="password"
                variant="outlined"
                fullWidth
                style={textFieldStyle}
              />
              <FormControlLabel
                control={<Checkbox name="checkedB" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                style={btnstyle}
                fullWidth
              >
                Sign Up
              </Button>

              <Typography>
                Click here to Log In ?<Link to="/login">Sign In</Link>
              </Typography>
            </form>
          </Paper>
        </Grid>
        <ToastContainer />
      </div>
    </>
  );
};
