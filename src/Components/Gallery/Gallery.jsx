import React, { Component } from 'react'
import styles from './styles.module.scss'
import { ImageModal } from '../ImageModal'

export class Gallery extends Component {
    constructor(props) {
        super(props)
        this.state={
            imageUrl: "",
            imageUrlArray: ["destroyed2.png", "destroyedlogo.png", "programmed.png", "soft.png"],
            showModal: false,
            popImageUrl: "",
        }

    }

    handlePopup = (url) => {
        this.setState({
            showModal: !this.state.showModal,
            popImageUrl: url
        })
    }

    render() {
        let imageUrlArray = this.state.imageUrlArray
        const images = imageUrlArray.map((url, index) => {
            return (
                <img 
                alt="artwork" 
                className={styles.singleImage} 
                src={url}
                key={index}
                onClick={() => this.handlePopup(url)}
                />
            )
        })
        return (
            <div>
                {images}
                {this.state.showModal ? (
                    <ImageModal popImageUrl={this.state.popImageUrl} closePopup={this.handlePopup} />
                ) : null}
            </div>
        )
    }
}