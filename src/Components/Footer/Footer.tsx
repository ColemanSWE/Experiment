import React, { Component } from 'react'
import styles from './styles.module.scss'

export class Footer extends Component {
    render() {
        return (
            <div className={styles.footer}>
                <a href="https://suffocationpit.bandcamp.com/"><img alt="bandcamp link" className={styles.bandcamp} src="bandcamp.png" /></a>
                <a href="https://twitter.com/SuffocationPit"><img alt="twitter link" className={styles.twitter} src="twitter.png" /></a>
                <a href="https://www.youtube.com/channel/UCaahR8RSBQxsGWTbT5bQACg"><img alt="youtube link" className={styles.youtube} src="youtube.png" /></a>
                <a href="https://www.instagram.com/suffocation.pit/"><img alt="instagram link" className={styles.instagram} src="instagram.png" /></a>
            </div>
        )
    }
}
