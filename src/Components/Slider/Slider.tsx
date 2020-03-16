import React, { Component } from "react";
import styles from './styles.module.scss'

export interface SliderProps {
    min: number
    max: number
    defaultValue: number
    onChange?: void
}

export class Slider extends Component<SliderProps, {}> {
    
    state = {
        value: 50
    }

    handleChange = (e: any) => {
        this.setState({ value: e.target.value })
    }

    render() {
        return (
            <>
                <input type="range" min={this.props.min} max={this.props.max} value={this.state.value} className={styles.slider} id="myRange" defaultValue={this.props.defaultValue} onChange={this.handleChange} />
                <div>{this.state.value}</div>
            </>
        )
    };
};