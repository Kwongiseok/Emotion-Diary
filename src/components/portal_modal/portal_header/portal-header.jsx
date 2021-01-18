import React from "react";
import styles from "./portal-header.module.css";
const PortalHeader = ({ loginOrSignUp }) => (
  <header>
    <div className={styles.headerImg}>
      <img src="/favicon.ico" />
    </div>
    <h3 className={styles.title}>{loginOrSignUp}</h3>
  </header>
);

export default PortalHeader;
