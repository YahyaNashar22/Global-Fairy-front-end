import React from "react";
import { Link } from "react-router-dom";
import "./Footer.module.css";
import style from "./Footer.module.css";
import logo from "../../assets/images/logo.webp";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.png";
import tiktok from "../../assets/images/tiktok.svg";
import twitter from "../../assets/images/twitter.svg";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.logoDescription}>
          <Link to="/">
            <img src={logo} alt="Global Fairy logo" />
          </Link>
          <p>
            Become your trusted multi-brand shopping destination, offering a
            diverse range of products and brand visibility.
          </p>
        </div>
        <div className={style.company}>
          <h3 className={style.title}>Company</h3>
          <ul className={style.links}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="Products/Category">Shop</Link>
            </li>
            <li>
              <Link>Pivacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className={style.contact}>
          <h3 className={style.title}>Contact</h3>
          <ul className={style.links}>
            <li>info@globalfairylb.com</li>
            <li>71087446</li>
            <li>Lebanon</li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className={style.social}>
          <h3 className={style.title}>Social</h3>
          <ul className={style.socialLinks}>
            <li>
              <a href="https://www.instagram.com/globalfairy.lb/">
                <img src={instagram} alt="Instagram Icon" />
              </a>
            </li>
            <li>
              <a href="#https://www.tiktok.com/@globalfairy.lb?_t=8hCEUAD1ahG&_r=1">
                <img src={tiktok} alt="TikTok Icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={facebook} alt="Facebook Icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={twitter} alt="Twitter Icon" />
              </a>
            </li>
          </ul>
          <form className={style.signUp}>
            <label htmlFor="em">SIGN UP FOR GLOBAL FAIRY STYLE NEWS</label>
            <div className={style.inputBox}>
              <input
                type="email"
                name="Email"
                id="em"
                placeholder="Your e-mail"
                className={style.emailInput}
              />
              <input type="submit" value="Subscribe" className={style.submit} />
            </div>
          </form>
        </div>
      </div>
      <div className={style.copyright}>
        © 2023 - Global Fairy All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
