import React, { Component } from "react";
import styles from "./styles.module.scss";

export class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.pageContainer}>
        <div className={styles.logoContainer}>
          <img
            className={styles.logoAnimated}
            src="logoblacknooutline.png"
            alt="Suffcation Pit logo/home page button"
          />
        </div>
      </div>
    );
  }
}
