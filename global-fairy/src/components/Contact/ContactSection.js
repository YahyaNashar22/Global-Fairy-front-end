import React from 'react'
import styles from './ContactSection.module.css'
import callIcon from "../../assets/icons/telephone.png"
import emailIcon from "../../assets/icons/mail.png"
export default function ContactSection() {
    return (
        <div className={styles.contactPage}>
        <h1 className={styles.contactTitle}>Get In Touch</h1>
        <main className={styles.contactContainer}>

            <section className={styles.contactNb}>
                <article className={styles.callUs}>
                    <div className={styles.contactTitles}>
                    <span className={styles.imgHolder}> <img src={callIcon} alt="Call Icon" /> </span> <h4>Call To Us</h4>
                    </div>
                    <p className={styles.textHolder}> <span className={styles.imgHolderX}> <img src={callIcon} alt="Call Icon" /> </span>We are available 7 days a week.</p>
                    <p className={styles.textHolder}>Phone: +961000000</p>
                </article>
                <article className={styles.msgUs}>
                    <div className={styles.contactTitles}><span className={styles.imgHolder}> <img src={emailIcon} alt="Message Icon" /> </span> <h4>Write To Us</h4></div>
                    <p className={styles.textHolder}> <span className={styles.imgHolderX}> <img src={emailIcon} alt="Message Icon" /> </span>Fill out our form and we will contact you within 24 hours.</p>
                    <p className={styles.textHolder}>Emails: customer@exclusive.com</p>
                    <p className={styles.textHolder}>Emails: support@exclusive.com</p>
                </article>
            </section>
            <form className={styles.form} action="/" method='POST' name="contact">
            <div className={styles.contactForm}>

                <div className={styles.inputsHolder}>
                    <input className={styles.inputs} type="text" id="name" name="name" placeholder="Your Name" required></input>
                    <input className={styles.inputs} type="email" id="email" name="email" placeholder="Your Email" required></input>
                    <input className={styles.inputs} type="tel" id="phone" name="phone" pattern="^\d{8}$" placeholder="Your Phone" required></input>
                </div>
                <div className={styles.msgHolder}>
                    <textarea className={styles.msgInput} type="textarea" placeholder="Your Message"></textarea>

                </div>
                <div className={styles.btnHolder}>
                    <button className={styles.msgBtn} type='submit' value='submit' >Send Message</button>
                </div>
                </div>

            </form>
        </main>
        </div>
    )
}
