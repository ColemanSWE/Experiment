import React, { Component } from 'react'
import { Header } from '/Experiment/src/Components/Header'
import { Footer } from '/Experiment/src/Components/Footer'
import styles from './styles.module.scss'


export class Visuals extends Component {
  render() {
      return (
            <>
                <Header />
                <Footer />
            </>
        );
    }
}
