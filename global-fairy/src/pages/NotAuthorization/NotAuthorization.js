import React from 'react';
import { Link } from 'react-router-dom';
import style from "../NotAuthorization/NotAuthorization.module.css"


function NotAuthorization() {
    return (
      <main className={style.main}>
        <h1 className={style.heading}>You're Not Authorizate</h1>
        <p className={style.paragraph}>The page you are looking for does not have authorization.</p>
        <Link to='/' className={style.returnHome}>Return Home</Link>
      </main>
    );
  }
  
  export default NotAuthorization;