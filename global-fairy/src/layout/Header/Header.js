import React from "react";
import style from './Header.module.css';
import logo from '../../assets/images/logo.jpg';
import userIcon from '../../assets/images/user.png';
import search from '../../assets/images/search.svg';

const Header = () => {
    return(
        <header className={style.header}>
            <div className={style.container}>
                <a href="/home" className={style.logo}>
                    <img src={logo} alt="Logo" />
                </a>
                <div className={style.content}>
                    <nav className={style.nav}>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/signup">Sign Up</a></li>
                        </ul>
                    </nav>
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