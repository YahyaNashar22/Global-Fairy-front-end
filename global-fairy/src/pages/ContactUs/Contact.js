import React from 'react';
import style from './Contact.module.css'
import ContactSection from "../../components/Contact/ContactSection"
const Contact = () => {
return(
    <div className={style.mainContact}>
        <ContactSection/>
    </div>
)
}

export default Contact;