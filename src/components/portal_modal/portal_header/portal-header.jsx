import React from "react";
import styles from "./portal-header.module.css";
const PortalHeader = ({ loginOrSignUp }) => (
  <header className={styles.header}>
    <div className={styles.headerImg}>
      <img className={styles.logo} src="/logo.png" alt="logo" />
    </div>
    <h3 className={styles.title}>{loginOrSignUp}</h3>
  </header>
);

export default PortalHeader;
