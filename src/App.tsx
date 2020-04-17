import React from 'react'
import { Music } from './Views/Music'
import { Shop } from './Views/Shop'
import { About } from './Views/About'
import { Visuals } from './Views/Visuals'
import { Home } from './Views/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

function App() {
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
