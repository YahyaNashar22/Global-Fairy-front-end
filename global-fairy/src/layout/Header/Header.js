import React, { useState, useEffect } from "react";
import style from './Header.module.css';
import logo from '../../assets/images/logo.jpg';
import userIcon from '../../assets/images/user.png';
import NavBar from "../NavBar/NavBar";
import Search from '../../components/Search/Search'

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

    // Use useEffect to ensure the navigation menu is shown when screen width > 992px
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 992) {
                setIsNavOpen(true);
            } else {
                setIsNavOpen(false);
            }
        };

        // Add event listener to handle window resize
        window.addEventListener('resize', handleResize);

        // Call the handleResize function on initial load
        handleResize();

        // Clean up the event listener when the component unmounts
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
                    <div className={style.userIcon}>
                        <img src={userIcon} alt="User Icon" />
                    </div>
                    <div className={style.burger} onClick={toggleNav}>
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
