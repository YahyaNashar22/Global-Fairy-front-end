import React, { useState, useEffect } from "react";
import style from './Header.module.css';
import logo from '../../assets/images/logo.jpg';
import userIcon from '../../assets/images/user.png';
import NavBar from "../NavBar/NavBar";
import Search from '../../components/Search/Search'

const Header = () => {
    /* THIS IS TO SHOW AND HIDE THE DROP MENU */
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 992) {
                setIsNavOpen(true);
            } else {
                setIsNavOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className={style.header}>
            <div className={style.container}>
                <a href="/home" className={style.logo}>
                    <img src={logo} alt="Logo" />
                </a>
                <div className={style.content}>
                    {isNavOpen && <NavBar />}
                    <Search />
                    <div className={style.burger} onClick={toggleNav} >
                        <div className={`${style.bar} ${isNavOpen ? style.open : ''}`}></div>
                        <div className={`${style.bar} ${isNavOpen ? style.open : ''}`}></div>
                        <div className={`${style.bar} ${isNavOpen ? style.open : ''}`}></div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
