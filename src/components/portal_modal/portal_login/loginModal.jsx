import { render } from "@testing-library/react";
import React, { useEffect, useRef } from "react";
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
  const modalRef = useRef();
  const handleClose = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) onClose();
  };
  useEffect(() => {
    window.addEventListener("click", handleClose);
    return () => {
      window.removeEventListener("click", handleClose);
    };
  }, []);
  return (
    <div className={styles.loginModal}>
      <div ref={modalRef} className={styles.login}>
        <PortalHeader loginOrSignUp={"로그인"} />
        {clickLogin ? (
          <LoginBody
            onClickAuth={onClickAuth}
            authService={authService}
            onClose={onClose}
          />
        ) : (
          <RegisterBody
            onClickAuth={onClickAuth}
            authService={authService}
            onClose={onClose}
          />
        )}
        <PortalFooter authService={authService} />
        <button onClick={onClose}>close</button>
      </div>
    </div>
  );
};

export default LoginModal;
