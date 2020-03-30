import React, { Component } from 'react'
import styles from './styles.module.scss'

export class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
                <img src="placeholder.png" alt="Artist Logo" />
                <div className={styles.headerRight}>
                    <a className={styles.active} href="/">Suffocation Pit</a>
                </div>
            </div>
        )
    }
}