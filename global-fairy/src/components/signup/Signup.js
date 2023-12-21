import React, { useState, useContext } from "react";
import style from "./Signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import {
  TextField,
  Grid,
  Typography,
  FormControl,
  styled,
  Button,
} from "@mui/material";
import show from "../../assets/icons/show 1.png";
import hide from "../../assets/icons/hide.svg";
import google from "../../assets/icons/Icon-Google.png";
import upload from "../../assets/icons/upload-loop.svg";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../context/UserContext.js";
import { auth, provider } from "../../Firebase.js";
import { signInWithPopup } from "@firebase/auth";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function Signup() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [disabled, setDisabled] = useState(false);

  //GOOGLE SIGN UP

  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setDisabled(!disabled);
        axios
          .post(
            `${process.env.REACT_APP_PATH}/user/gsignup`,
            {
              name: data.user.displayName,
              email: data.user.email,
              photourl: data.user.photoURL,
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
            if (res) {
              setUser(res.data.token.data);
              console.log(res.data.token.data);
              setDisabled(!disabled);
            } else {
              setUser("no user found");
            }
            navigate("/");
          });
      })
      .catch((err) => {
        setDisabled(false);
        if (err.code === "auth/popup-closed-by-user") {
          console.log("exited the google auth");
        }
      });
  };

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
        if (res) {
          setUser(res.data.token.data);
        } else {
          setUser("no user found");
        }
        navigate("/");
      });
  };

  return (
    <>
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
              <Button
                component="label"
                variant="contained"
                sx={{
                  backgroundColor: "#A3A3A3",
                  width: "100%",
                  color: "white",
                  fontWeight: "700",
                }}
                onChange={handlePictureChange}
                className={style.uploadBTN}
              >
                Kindly upload your image
                <span className={style.upload}>
                  <img
                    src={upload}
                    alt="upload symbol"
                    height="40px"
                    width="40px"
                  />
                </span>
                <VisuallyHiddenInput type="file" />
              </Button>
            </Grid>
          </Grid>
        </form>
        <button className={style.submit} type="submit">
          Create Account
        </button>
        <button
          className={style.OAuth}
          onClick={handleGoogle}
          disabled={disabled}
        >
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
