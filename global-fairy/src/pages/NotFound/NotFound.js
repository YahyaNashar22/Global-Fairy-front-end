import React from 'react';
import { Link } from 'react-router-dom';
import style from './NotFound.module.css'
import { Helmet } from 'react-helmet-async';

function NotFound() {
  return (
    <main className={style.main}>
      <Helmet>
        <title>Not Found</title>
        <meta
          name="description"
          content="This page not Found"
        ></meta>
        <link rel="canonical" href="/not found" />
      </Helmet>
      <h1 className={style.heading}>404 - Page Not Found</h1>
      <p className={style.paragraph}>The page you are looking for does not exist.</p>
      <Link to='/' className={style.returnHome}>Return Home</Link>
    </main>
  );
}

export default NotFound;
