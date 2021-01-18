import { render } from "@testing-library/react";
import React from "react";
import PortalFooter from "../portal_footer/portalFooter";
import PortalHeader from "../portal_header/portal-header";
import styles from "./loginModal.module.css";

const LoginModal = ({ onClose, authService }) => {
  return (
    <div className={styles.loginModal}>
      <div className={styles.login}>
        <PortalHeader loginOrSignUp={"로그인"} />
        <form className={styles.loginForm}>
          <input type="text" className={styles.inputBar} placeholder="이메일" />
          <input
            type="text"
            className={styles.inputBar}
            placeholder="비밀번호"
          />
        </form>
        <PortalFooter authService={authService} />
        <button onClick={onClose}>close</button>
      </div>
    </div>
  );
};

export default LoginModal;
