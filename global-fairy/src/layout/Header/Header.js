import React, { useEffect, useState } from "react";
import { useSharedData } from "../../context/DataContext";
import style from "./Header.module.css";
import logo from "../../assets/images/logo.webp";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import Cart from "../../components/svgIcons/Cart";
import { useShoppingContext } from "../../context/ShoppingContext";

const Header = () => {
  /* THIS IS TO SHOW AND HIDE THE DROP MENU */
  const { isNavOpen, setIsNavOpen } = useSharedData();
  const [includeCart, setIncludeCart] = useState(false);
  const [showBag, setShowBag] = useState(false);
  const { inventory } = useShoppingContext();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setIsNavOpen(true);
        setShowBag(false);
      } else {
        setIsNavOpen(false);
        setShowBag(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`${style.header} ${isNavOpen ? style.SectionOpacity : ``}`}
    >
      <div className={style.container}>
        <Link to="/" className={style.logo}>
          <img src={logo} alt="Logo" />
        </Link>
        <div className={style.content}>
          {isNavOpen && <NavBar showBag={showBag} />}
          {showBag ? (
            <div className={style.cart}>
              <Link
                to="/cart"
                className={`${style.cartLink} ${
                  inventory.length ? style.hasItem : ""
                }`}
              >
                <Cart size={35} />
              </Link>
            </div>
          ) : (
            ""
          )}
          <div className={style.burger} onClick={toggleNav}>
            <div
              className={`${style.bar} ${isNavOpen ? style.open : ""}`}
            ></div>
            <div
              className={`${style.bar} ${isNavOpen ? style.open : ""}`}
            ></div>
            <div
              className={`${style.bar} ${isNavOpen ? style.open : ""}`}
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
