import React, { Component } from 'react'
import { Header } from '../../Components/Header/'
import { Footer } from '../../Components/Footer/'
import styles from './styles.module.scss'

export class About extends Component {
  render() {
    return (
      <>
        <Header />
        <div className={styles.title}>
          about
        </div>
        <div className={styles.container}>
          Suffocation Pit is the primary music/visual art project of Coleman Rose. <br /><br />

          He is based in Stockholm, Sweden
        </div>
        <Footer />
      </>
    );
  } 
}