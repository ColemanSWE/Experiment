import React, { Component } from 'react'
import { Header } from '../../Components/Header'
import { Footer } from '../../Components/Footer'
import styles from './styles.module.scss'
import { Link } from "react-router-dom"
import Particles from 'react-particles-js'
import parameters from '../../particleConfig'

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  filler = ""
  particles = undefined
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  
  render() {
    if (this.state.width >= 1100) {
      this.filler = <br />
      this.particles = <Particles className={styles.particles} params={parameters} />
    }
    else if (this.state.width < 1100) {
      this.filler = ""
    }
        return(
        <>
          <Header />
              <div className={styles.grad}>
                {this.particles}
                <div className={styles.centered}>
                  <Link to="music" className={styles.blueBox}>
                    mus{this.filler}ic
                  </Link>
                  <Link to="visuals" className={styles.redBox}>
                    visuals
                  </Link>
                  <Link to="shop" className={styles.greenBox}>
                    sh{this.filler}op
                  </Link>
                  <Link to="about" className={styles.purpleBox}>
                    abo{this.filler}ut
                  </Link>
                </div>
              </div>
          <Footer />
        </>
        )
      }
}