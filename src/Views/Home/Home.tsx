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
                    <a href="https://suffocationpit.bandcamp.com/">music</a> {/* Change this sometime to music page that has spotify links, etc. */}
                  </div>
                  <div className={styles.redBox}>
                    <Link to="visuals">visuals</Link>
                  </div>
                  <div className={styles.greenBox}>
                    <Link to="shop">shop</Link>
                  </div>
                  <div className={styles.purpleBox}>
                    <Link to="about">about</Link>
                  </div>
                </div>
              </div>
          <Footer />
        </>
        )
      }
}