import React, { Component } from 'react'
import styles from './styles.module.scss'
import { Gallery } from '../../Components/Gallery/'
import { Header } from '../../Components/Header'
import { Footer } from '../../Components/Footer'

export class Visuals extends Component {
  render() {
    return (
      <div className={styles.pageContainer}>
        <Header />
          <div className={styles.contentContainer}>
            <div className={styles.title}>
              visuals
            </div>
            <div className={styles.container}>
              <Gallery />
            </div>
          </div>
        <Footer />
      </div>
    );
  } 
}