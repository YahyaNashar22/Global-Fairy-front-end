import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./NavBar.module.css";
import Search from "../../components/Search/Search";
import Cart from "../../components/svgIcons/Cart.js";
import { useShoppingContext } from "../../context/ShoppingContext";
import { UserContext } from "../../context/UserContext.js";
import Swal from "sweetalert2";
import axios from "axios";

const NavBar = ({ showBag }) => {
  const navigate = useNavigate();
  const { inventory } = useShoppingContext();
  const { user, setUser } = useContext(UserContext);
  const [profilePic, setProfilePic] = useState(null);
  useEffect(() => {
    if (user.Picture) {
      setProfilePic(`${process.env.REACT_APP_PATH}/images/${user.Picture}`);
    } else {
      setProfilePic(user.photourl);
    }
  }, [user]);
  const popup = () => {
    Swal.fire({
      title: "Log out?",
      text: "Are you sure you want to log out ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#D81A84;",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          {
            title: "logged out successfully!",
            text: "See you next time !",
            icon: "success",
          },
          handleLogout()
        );
      }
    });
  };
  const handleLogout = () => {
    axios.get(`${process.env.REACT_APP_PATH}/user/logout`);
    navigate("/login");
    setUser({});
  };
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
        {Object.keys(user).length > 1 && (
          <li>
            <img
              src={profilePic}
              alt="profile"
              height="50px"
              width="50px"
              style={{ borderRadius: "36px", cursor: "pointer" }}
              onClick={popup}
            />
          </li>
        )}
        {Object.keys(user).length < 1 && (
          <li className={style.signBTNS}>
            <Link to="/login" className={style.signIN}>
              Sign in
            </Link>
            <Link to="/signup" className={style.signUP}>
              Sign up
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
