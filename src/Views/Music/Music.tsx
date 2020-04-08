import React, { Component } from 'react'
import { Header } from '../../Components/Header/'
import { Footer } from '../../Components/Footer/'
import styles from './styles.module.scss'

export class Music extends Component {
  render() {
    return (
      <>
        <Header />
        <div className={styles.title}>
          music
        </div>
        <div className={styles.container}>

        </div>
        <Footer />
      </>
    );
  } 
}
