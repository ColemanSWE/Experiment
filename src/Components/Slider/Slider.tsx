import React, { Component } from "react";
import styles from './styles.module.scss'

export class Slider extends Component {
    slider = document.getElementById("myRange");
    output = document.getElementById("demo");
    output.innerHTML = this.slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
        output.innerHTML = this.value;
    };

    render = () => {
        return (
            <input type="range" min="1" max="100" value="50" className={styles.slider} id="myRange" />
        )
    };
};