import React from 'react';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import Search from '../../components/Search/Search'

const NavBar = () => {
    return (
        <nav className={style.nav}>
            <ul>
                <li><Link to="/" className={style.link}>Home</Link></li>
                <li><Link to="Products/Category" className={style.link}>Shop</Link></li>
                <li><Link to="/about" className={style.link}>About</Link></li>
                <li><Link to="/contact" className={style.link}>Contact</Link></li>
                <li><Search /></li>
            </ul>
        </nav>
    )
}

export default NavBar;
