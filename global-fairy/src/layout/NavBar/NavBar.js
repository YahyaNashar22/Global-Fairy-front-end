import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import Search from "../../components/Search/Search";
import Cart from "../../components/svgIcons/Cart.js";
import { useShoppingContext } from "../../context/ShoppingContext";
import { UserContext } from "../../context/UserContext.js";

const NavBar = ({ showBag }) => {
  const { inventory } = useShoppingContext();
  const { user } = useContext(UserContext);
  const [profilePic, setProfilePic] = useState(null);
  useEffect(() => {
    setProfilePic(`${process.env.REACT_APP_PATH}/images/${user.Picture}`);
  }, [user]);

  console.log(user);
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <Link to="/" className={style.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/Products/Category" className={style.link}>
            Shop
          </Link>
        </li>
        <li>
          <Link to="/about" className={style.link}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className={style.link}>
            Contact
          </Link>
        </li>
        {showBag ? (
          ""
        ) : (
          <li>
            <Link
              to="/cart"
              className={`${style.link} ${
                inventory.length ? style.hasItem : ""
              }`}
            >
              <Cart size={30} />
            </Link>
          </li>
        )}
        <li>
          <Search />
        </li>
        <li>
          <img
            src={profilePic}
            alt="profile"
            height="50px"
            width="50px"
            style={{ borderRadius: "36px" }}
          />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
