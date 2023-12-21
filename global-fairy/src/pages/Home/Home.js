import React from "react";
import Hero from "../../layout/Hero/Hero";
import Brand from "../../components/Brand/brand";
import Numbers from "../../components/Numbers/Numbers";
import { Helmet } from "react-helmet-async";
import "./Home.module.css";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home the main page"></meta>
        <link rel="canonical" href="/Home" />
      </Helmet>
      <Hero />

      <Brand />

      <Numbers />
    </div>
  );
};

export default Home;
