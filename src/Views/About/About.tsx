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

        </div>
        <Footer />
      </>
    );
  } 
}