import React, { Component } from 'react'
import styles from './styles.module.scss'

export class ImageModal extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
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
            this.disabled = true
        }
    }

    disabled = false

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