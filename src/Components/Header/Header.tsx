import React, { Component } from 'react'
import styles from './styles.module.scss'

export class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
                <a className={styles.imgLink} href="/">
                    <img className={styles.logo} src="SuffocationPitGif.gif" alt="Suffcation Pit" />
                </a>
                <br />
                <br />
                <img className={styles.hand} src="Wireframe Hand.png" alt="" />   
            </div>
        )
    }
}