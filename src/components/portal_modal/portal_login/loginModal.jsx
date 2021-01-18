import { render } from "@testing-library/react";
import React from "react";
import PortalFooter from "../portal_footer/portalFooter";
import PortalHeader from "../portal_header/portal-header";
import LoginBody from "./loginBody";
import styles from "./loginModal.module.css";
import RegisterBody from "./registerBody";

const LoginModal = ({
  onClose,
  authService,
  onClickAuth,
  clickRegister,
  clickLogin,
}) => {
  return (
    <div className={styles.loginModal}>
      <div className={styles.login}>
        <PortalHeader loginOrSignUp={"로그인"} />
        {clickLogin ? (
          <LoginBody onClickAuth={onClickAuth} authService={authService} />
        ) : (
          <RegisterBody onClickAuth={onClickAuth} authService={authService} />
        )}
        <PortalFooter authService={authService} />
        <button onClick={onClose}>close</button>
      </div>
    </div>
  );
};

export default LoginModal;
