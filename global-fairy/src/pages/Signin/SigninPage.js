import React from "react";
import Signin from "../../components/signin/Signin";
import style from "./SigninPage.module.css";
import banner from "../../assets/images/product.png";
function SigninPage() {
  return (
    <div className={style.wrapper}>
      <div className={style.centered}>
        <img
          src={banner}
          className={style.left}
          alt="banner"
          width="80%"
          height="700px"
        />
        <Signin />
      </div>
    </div>
  );
}

export default SigninPage;
