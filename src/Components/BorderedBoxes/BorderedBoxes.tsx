import React, { Component } from 'react'
import styles from './styles.module.scss'

export class BorderedBox extends Component {
    render() {
        return (
            <div className={styles.boxed}>
                This text is enclosed in a box.
            </div>
        )
    }
}