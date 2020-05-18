import React, { Component } from 'react'
import { Header } from '../../Components/Header/'
import { Footer } from '../../Components/Footer/'
import styles from './styles.module.scss'


export class Visuals extends Component {
  render() {
    return (
      <>
        <Header />
        <div className={styles.title}>
          visuals
        </div>
        <div className={styles.container}>
          <img className={styles.destroyed} alt="Artwork" height="200" src="destroyedlogo.png"></img>
          <img className={styles.programmed} alt="Artwork" height="200" src="programmed.png"></img>
          <img className={styles.programmed} alt="Artwork" height="200" src="destroyed2.png"></img>
          <img className={styles.programmed} alt="Artwork" height="200" src="soft.png"></img>
        </div>
        <Footer />
      </>
    );
  } 
}