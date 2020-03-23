import React from 'react'
// import { NoiseGen } from './Instruments/NoiseGens/NoiseGens'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'
import styles from './styles.module.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      <Router>
      <div className={styles.grad}>
        <div className={styles.centered}>
          <div className={styles.blueBox}>
            <Route href="#music">music</Route>
          </div>
          <div className={styles.redBox}>
            <a href="#visuals">visuals</a>
          </div>
          <div className={styles.greenBox}>
            <a href="#shop">shop</a>
          </div>
          <div className={styles.purpleBox}>
            <a href="#about">about</a>
          </div>
        </div>
      </div>
      <Footer />
      </Router>
    </>
  );
}

export default App;
