import "./login.css";
import Logo from "../assets/images/logo.png";
import { Grid, Paper, TextField, Button, Typography } from "@mui/material";
import { handleError, handleSuccess } from "../assets/utils/utils";
import { Link, useNavigate } from "react-router-dom";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

export const Login = () => {
  const paperStyle = {
    padding: 40,
    height: "53vh",
    width: 380,
  };

  const btnstyle = { margin: "8px 0" };
  const textFieldStyle = { marginBottom: "20px" };

  const navigate = useNavigate();
  const [loginInfo, setloginInfo] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    const copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name] = value;
    setloginInfo(copyLoginInfo);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      return handleError("All fields are required to fill!!!");
    }
    try {
      const url = "http://localhost:3000/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });
      const result = await response.json();
      const { success, message, jwtToken, name, error } = result;
      if (success) {
        handleSuccess(message);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", name);
        setTimeout(() => {
          navigate("/home");
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
            <form onSubmit={handleLogin}>
              <Grid align="center"></Grid>
              <img className="logInImg" src={Logo} alt="Logo" />
              <TextField
                onChange={handleChange}
                className="userinput"
                label="Email"
                name="email"
                placeholder="Enter Email"
                value={loginInfo.email}
                variant="outlined"
                fullWidth
                style={textFieldStyle}
              />
              <TextField
                label="Password"
                onChange={handleChange}
                name="password"
                placeholder="Enter password"
                value={loginInfo.password}
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
                Log in
              </Button>
              <Typography>
                <Link href="#">Forgot password ?</Link>
              </Typography>
              <Typography>
                Do you have an account ?<Link to="/register">Sign Up</Link>
              </Typography>
            </form>
          </Paper>
        </Grid>
        <ToastContainer />
      </div>
    </>
  );
};
