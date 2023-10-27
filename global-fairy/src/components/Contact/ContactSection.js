import React from 'react'
import styles from './ContactSection.module.css'
export default function ContactSection() {
    return (
        <container className={styles.contactContainer}>

            <section className={styles.contactNb}>
                <aricle className={styles.callUs}>
                    <span>
                        <h4>Call To Us</h4>
                    </span>
                    <span>

                    <p>We are available 7 days a week.</p>
                        <p>Phone: +961000000</p>
                    </span>

                </aricle>
                <aricle className={styles.msgUs}>
                <h4>Write To Us</h4>

                <p>Fill out our form and we will contact you within 24 hours.</p>
                    <p>Emails: customer@exclusive.com</p>
                    <p>Emails: support@exclusive.com</p>
                    </aricle>
                    </section>
            <section className={styles.contactForm}>
                <span>
                    <input className={styles.inputs} placeholder="Your Name"></input>
                    <input className={styles.inputs} placeholder="Your Email"></input>
                    <input className={styles.inputs} placeholder="Your Phone"></input>

                </span>
<br></br>
                <span>
                <input className={styles.msgInput} placeholder="Your Phone"></input>

                </span>
                <br></br>
                <button className={styles.msgBtn}>Send Message</button>

            </section>
        </container>
    )
}
