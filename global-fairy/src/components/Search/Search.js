import React from 'react'
import "./Search.module.css"
import search from '../../assets/images/search.svg';
import style from './Search.module.css'

const Search = () => {
    return(
        <form action="/search" method="get" className={style.search}>
            <input type="text" name="Search" placeholder="Search for products..." />
            <img src={search} alt="Search Icon" />
        </form>
    )
}

export default Search;