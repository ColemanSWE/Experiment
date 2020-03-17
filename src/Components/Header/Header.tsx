import React, { Component } from 'react'
import styles from './styles.module.scss'

export class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
                <a href="#default" className={styles.logo}>Placeholder</a>
                <div className={styles.headerRight}>
                    <a className={styles.active} href="#home">Home</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
            </div>
        )
    }
}