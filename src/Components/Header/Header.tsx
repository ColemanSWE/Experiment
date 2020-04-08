import React, { Component } from 'react'
import styles from './styles.module.scss'

export class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
                <a className={styles.active} href="/"><img src="logotransparent.png" alt="Suffcation Pit" /></a>
                <img className={styles.header} src="Wireframe Hand.png" alt="" />
                <div className={styles.headerRight}>
                </div>
            </div>
        )
    }
}