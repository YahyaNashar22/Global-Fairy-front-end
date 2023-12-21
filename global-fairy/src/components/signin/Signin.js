import React, { useState, useContext } from "react";
import style from "./Signin.module.css";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Grid, Typography, FormControl } from "@mui/material";
import show from "../../assets/icons/show 1.png";
import hide from "../../assets/icons/hide.svg";
import google from "../../assets/icons/Icon-Google.png";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../context/UserContext.js";
import { auth, provider } from "../../Firebase.js";
import { signInWithPopup } from "@firebase/auth";
function Signin() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [disabled, setDisabled] = useState(false);

  // FORM DATA HANDLING
  const [email, setEmail] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const [password, setPassword] = useState("");
  const handlePassword = (e) => {
    setPassword(e.target.value);
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

  const notify = () => toast("Logged in successfully !");
  const notify2 = () => toast("Wrong email or password");

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

  //POST WITH AXIOS
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    axios
      .post(`${process.env.REACT_APP_PATH}/user/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        setIsPending(false);
        notify();
        setUser(res.data.token.data);
        navigate("/");
      })
      .catch((err) => {
        notify2();
        setIsPending(false);
      });
    console.log(user);
  };
  return (
    <>
      <div className={style.wrapper}>
        <Typography
          variant="h1"
          component="h1"
          sx={{ fontSize: "32px", marginBottom: "10px" }}
          className={style.header}
        >
          Log in to Exclusive
        </Typography>
        <Typography
          variant="p"
          component="p"
          sx={{ fontSize: "16px", marginBottom: "10px" }}
          className={style.subText}
        >
          Enter your details below
        </Typography>
        <form
          className={style.signinform}
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
                label="Email"
                onChange={handleEmail}
                value={email}
                placeholder="Enter your Email"
                variant="outlined"
                type="email"
                required
                fullWidth
                className={style.signinInp}
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
          </Grid>
          <div className={style.buttons}>
            <button className={style.submit} type="submit">
              Log In
            </button>
            <Link to="/signup" className={style.signup}>
              Sign Up
            </Link>
          </div>
        </form>

        <button
          className={style.OAuth}
          onClick={handleGoogle}
          disabled={disabled}
        >
          <span>
            <img src={google} alt="google logo" />
          </span>
          Continue with Google
        </button>
        <Link to="/" className={style.noLogin}>
          Continue without Logging in
        </Link>
        {isPending && (
          <p className={style.pending}>Logging you in, please wait . . .</p>
        )}
      </div>
    </>
  );
}

export default Signin;
