import React from 'react';
import style from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={style.nav}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/signup">Sign Up</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;
