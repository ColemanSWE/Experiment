import React, { Component } from 'react'
import { Header } from '../../Components/Header/'
import { Footer } from '../../Components/Footer/'
import styles from './styles.module.scss'
import { Link } from "react-router-dom"

export class Home extends Component {
    render() {
        return(
        <>
          <Header />
              <div className={styles.grad}>
                <div className={styles.centered}>
                  <div className={styles.blueBox}>
                    <Link to="music">mus<br />ic</Link>
                  </div>
                  <div className={styles.redBox}>
                    <Link to="visuals">visuals</Link>
                  </div>
                  <div className={styles.greenBox}>
                    <Link to="shop">sh<br />op</Link>
                  </div>
                  <div className={styles.purpleBox}>
                    <Link to="about">abo<br />ut</Link>
                  </div>
                </div>
              </div>
          <Footer />
        </>
        )
      }
}