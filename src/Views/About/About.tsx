import React, { Component } from 'react'
import styles from './styles.module.scss'
import { Footer, Header } from '../../Components'
import { ContactForm } from '../../Components/ContactForm'

export class About extends Component {
  render() {
    return (
      <div className={styles.pageContainer}>
        <Header />
        <div className={styles.contentContainer}>
          <div className={styles.title}>
            about
          </div>
          <div className={styles.container}>
              <div className={styles.text}>
                Suffocation Pit is the primary music/visual art project of Coleman Rose. <br /><br />

                He is based in Stockholm, Sweden
              </div>
          </div>
          <div className={styles.title}>contact</div>
            <div className={styles.contactForm}>
              <ContactForm />
            </div>
          </div>
        <Footer />
      </div>
    );
  } 
}

