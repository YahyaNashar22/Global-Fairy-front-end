import React from "react";
import style from './Header.module.css';
import logo from '../../assets/images/logo.jpg';
import userIcon from '../../assets/images/user.png';
import search from '../../assets/images/search.svg';
import NavBar from "../NavBar/NavBar";
// import Home from '../../pages/Home/Home'
// import NavBar from '../NavBar/NavBar'

const Header = () => {
    return(
        <header className={style.header}>
            <div className={style.container}>
                <a href="/home" className={style.logo}>
                    <img src={logo} alt="Logo" />
                </a>
                {
                /* <NavBar />
                <Search /> */
                }
                <div className={style.content}>
                    <NavBar />
                    <form action="/search" method="get" className={style.search}>
                        <input type="text" name="Search" placeholder="Search for products..." />
                        <img src={search} alt="" />
                    </form>
                    <div className={style.userIcon}>
                    <img src={userIcon} alt="User Icon" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;