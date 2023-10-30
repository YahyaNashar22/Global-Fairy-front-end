import React from "react";
import style from './Header.module.css';
import logo from '../../assets/images/logo.jpg';
import userIcon from '../../assets/images/user.png';
import NavBar from "../NavBar/NavBar";
import Search from '../../components/Search/Search'

const Header = () => {
    return(
        <header className={style.header}>
            <div className={style.container}>
                <a href="/home" className={style.logo}>
                    <img src={logo} alt="Logo" />
                </a>
                <div className={style.content}>
                    <NavBar />
                    <Search />
                    <div className={style.userIcon}>
                    <img src={userIcon} alt="User Icon" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;