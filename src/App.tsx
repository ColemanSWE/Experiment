import React from 'react';
import { NoiseGen } from './Instruments/NoiseGens/NoiseGens'
import { Header } from './Components/Header';

function App() {
  return (
    <>
      <Header />
      <NoiseGen />
    </>
  );
}

export default App;
