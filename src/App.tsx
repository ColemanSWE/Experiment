import React from 'react';
// import { NoiseGen } from './Instruments/NoiseGens/NoiseGens'
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import styles from './styles.module.scss'

function App() {
  return (
    <>
      <Header />
      <div className={styles.boxed}>
        music
      </div>
      <div className={styles.boxed}>
        visuals
      </div>
      <div className={styles.boxed}>
        shop
      </div>
      <div className={styles.boxed}>
        about
      </div>
      <Footer />
    </>
  );
}

export default App;
