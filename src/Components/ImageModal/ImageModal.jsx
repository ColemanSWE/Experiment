import React, { Component } from 'react'
import styles from './styles.module.scss'

export class ImageModal extends Component {
    render() {
        return (
            <div className={styles.popupParent} disabled={this.disabled} onClick={this.props.closePopup}>
                <div className={styles.popupImage}>
                    <button 
                    className={styles.imageClosingButton}
                    onClick={this.props.closePopup} >
                        X
                    </button>
                    <img alt="Artwork" src={this.props.popImageUrl} />
                </div>
            </div>
        )
    }
}