import React from "react";
import Signup from "../../components/signup/Signup.js";
import style from "./SignupPage.module.css";
import banner from "../../assets/images/product.png";
function SignupPage() {
  return (
    <div className={style.wrapper}>
      <div className={style.centered}>
        <Signup />
        <img
          src={banner}
          className={style.right}
          alt="banner"
          width="80%"
          height="700px"
        />
      </div>
    </div>
  );
}

export default SignupPage;
