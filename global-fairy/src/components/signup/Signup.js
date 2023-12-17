import React, { useState } from "react";
import style from "./Signup.module.css";
import { Link } from "react-router-dom";
import { TextField, Grid, Typography, Input, FormControl } from "@mui/material";
import show from "../../assets/icons/show 1.png";
import hide from "../../assets/icons/hide.svg";
import google from "../../assets/icons/Icon-Google.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  // FORM DATA HANDLING
  const [name, setName] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const [email, setEmail] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const [password, setPassword] = useState("");
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const [picture, setPicture] = useState(null);
  const handlePictureChange = (e) => {
    console.log(e.target.files[0]);
    setPicture(e.target.files[0]);
  };

  // PASSWORD SHOW/HIDE
  let openClose = "";
  let type = "password";
  const [visible, setVisible] = useState(false);
  if (visible) {
    openClose = hide;
    type = "text";
  } else {
    openClose = show;
    type = "password";
  }
  const passHandler = (e) => {
    e.preventDefault();
    setVisible(!visible);
  };

  // PENDING SCREEN
  const [isPending, setIsPending] = useState(false);
  //TOAST NOTIFICATIONS

  const notify = () => toast("Account created successfully !");

  //POST WITH AXIOS
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    axios
      .post(
        `${process.env.REACT_APP_PATH}/user/signup`,
        {
          name: name,
          email: email,
          password: password,
          picture: picture,
          role: "user",
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        setIsPending(false);
        notify();
      });
  };

  return (
    <>
      {" "}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className={style.wrapper}>
        <Typography
          variant="h1"
          component="h1"
          sx={{ fontSize: "32px" }}
          className={style.header}
        >
          Create an account
        </Typography>
        <Typography
          variant="p"
          component="p"
          sx={{ fontSize: "16px" }}
          className={style.subText}
        >
          Enter your details below
        </Typography>
        <form
          className={style.signupform}
          method="post"
          onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                sx={{
                  "& input::placeholder": { color: "var(--grey-color)" },
                  "& label": { color: "var(--grey-color)" },
                  "& .MuiInputBase-input": {
                    color: "var(--main-background-color)",
                  },
                  "& fieldset": { borderColor: "var(--grey-color)" },
                }}
                label="Name"
                onChange={handleName}
                value={name}
                placeholder="Enter your Name"
                variant="outlined"
                type="text"
                required
                fullWidth
                className={style.signupInp}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{
                  "& input::placeholder": { color: "var(--grey-color)" },
                  "& label": { color: "var(--grey-color)" },
                  "& .MuiInputBase-input": {
                    color: "var(--main-background-color)",
                  },
                  "& fieldset": { borderColor: "var(--grey-color)" },
                }}
                label="Email"
                onChange={handleEmail}
                value={email}
                placeholder="Enter your Email"
                variant="outlined"
                type="email"
                required
                fullWidth
                className={style.signupInp}
              />
            </Grid>
            <Grid item xs={12} className={style.passContainer}>
              <FormControl fullWidth>
                <TextField
                  sx={{
                    "& input::placeholder": { color: "var(--grey-color)" },
                    "& label": { color: "var(--grey-color)" },
                    "& .MuiInputBase-input": {
                      color: "var(--main-background-color)",
                    },
                    "& fieldset": { borderColor: "var(--grey-color)" },
                  }}
                  label="Password"
                  onChange={handlePassword}
                  value={password}
                  placeholder="Enter your Password"
                  variant="outlined"
                  type={type}
                  required
                  fullWidth
                  className={style.passInp}
                />
                <span className={style.passEye} onClick={passHandler}>
                  <img
                    src={openClose}
                    height="20px"
                    width="20px"
                    alt="open close eye"
                  />
                </span>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="p" component="p" className={style.imgTxt}>
                Kindly Upload Your Image
              </Typography>
              <Input
                label="Upload Your Image"
                name="picture"
                type="file"
                onChange={handlePictureChange}
                sx={{
                  width: "100%",
                  padding: "10px",
                  margin: "10px 0",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  fontSize: "16px",
                  "&:focus": {
                    outline: "none",
                    borderColor: "var(--main-background-color)",
                  },
                }}
              />
            </Grid>
          </Grid>
          <button className={style.submit} type="submit">
            Create Account
          </button>
          <button className={style.OAuth}>
            <span>
              <img src={google} alt="google logo" />
            </span>
            Sign up with Google
          </button>
          <p className={style.login}>
            Already have an account ?{" "}
            <span className={style.loginbtn}>
              <Link to="/login" className={style.loginbtn}>
                Log in
              </Link>
            </span>
          </p>
        </form>
        {isPending && (
          <p className={style.pending}>
            Adding your account to the database, please wait . . .
          </p>
        )}
      </div>
    </>
  );
}

export default Signup;