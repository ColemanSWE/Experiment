import React, { Component } from 'react'
import { Header } from '../../Components/Header'
import { Footer } from '../../Components/Footer'
import styles from './styles.module.scss'
import { Link } from "react-router-dom"
import Particles from 'react-particles-js'
import parameters from '../../particleConfig'

export class Home extends Component {
    render() {
        return(
        <>
          <Header />
              <div className={styles.grad}>
                <Particles className={styles.particles} params={parameters} />
                <div className={styles.centered}>
                  <Link to="music" className={styles.blueBox}>
                      mus<br />ic
                  </Link>
                  <Link to="visuals" className={styles.redBox}>
                    visuals
                  </Link>
                  <Link to="shop" className={styles.greenBox}>
                    sh<br />op
                  </Link>
                  <Link to="about" className={styles.purpleBox}>
                    abo<br />ut
                  </Link>
                </div>
              </div>
          <Footer />
        </>
        )
      }
}