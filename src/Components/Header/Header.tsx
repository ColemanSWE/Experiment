import React, { Component } from "react";
import styles from "./styles.module.scss";

export class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <a className={styles.imgLink} href="/">
          <img
            className={styles.logo}
            src="logoblacknooutline.png"
            alt="Suffcation Pit logo/home page button"
          />
        </a>
      </div>
    );
  }
}
