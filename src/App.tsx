import React from 'react'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'
import { Music } from './Views/Music'
import { Shop } from './Views/Shop'
import { About } from './Views/About'
import { Visuals } from './Views/Visuals'
import styles from './styles.module.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  
  const Home = () => {
    return(
    <>
      <Header />
          <div className={styles.grad}>
            <div className={styles.centered}>
              <div className={styles.blueBox}>
                <Link to="music">music</Link>
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
  
  return (
    <>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/music" component={Music} />
        <Route path="/About" component={About} />
        <Route path="/shop" component={Shop} />
        <Route path="/visuals" component={Visuals} />    
      </Switch>
    </Router>
    </>
  );
}



export default App;
