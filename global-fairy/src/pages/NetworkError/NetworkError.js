import React from "react";
import { Link } from "react-router-dom";
import style from "../NetworkError/NetworkError.module.css";

function NetworkError() {
  return (
    <main className={style.main}>
      <h1 className={style.heading}>Networking Error</h1>
      <p className={style.paragraph}>
        no network connection.
      </p>
      <Link to="/" className={style.returnHome}>
        Return Home
      </Link>
    </main>
  );
}

export default NetworkError;
