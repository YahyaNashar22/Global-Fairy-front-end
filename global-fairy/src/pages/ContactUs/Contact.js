import React from 'react';
import style from './Contact.module.css'
import ContactSection from "../../components/Contact/ContactSection"
import { Helmet } from 'react-helmet-async';
const Contact = () => {
return(
    <div className={style.mainContact}>
        <Helmet>
        <title>Contact Us</title>
        <meta
          name="description"
          content="For any details please contact us"
        ></meta>
        <link rel="canonical" href="/contact us" />
      </Helmet>
        <ContactSection/>
    </div>
)
}

export default Contact;