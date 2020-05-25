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
            disabled: false, 
            width: 0, 
            height: 0
        }

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    }
    
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
        if (this.state.width <= 500) {
            this.setState({ disabled: true })
        }
        else {
            this.setState({ disabled: false })
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
                    <ImageModal disabled={this.state.disabled} popImageUrl={this.state.popImageUrl} closePopup={this.handlePopup} />
                ) : null}
            </div>
        )
    }
}
