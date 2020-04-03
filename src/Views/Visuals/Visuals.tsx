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

        </div>
        <Footer />
      </>
    );
  } 
}