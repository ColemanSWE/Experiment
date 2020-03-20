import React from 'react';
// import { NoiseGen } from './Instruments/NoiseGens/NoiseGens'
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import styles from './styles.module.scss'

function App() {
  return (
    <>
      <Header />
      <div className={styles.blueBox}>
      <a href="#music">music</a>
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
      <Footer />
    </>
  );
}

export default App;
