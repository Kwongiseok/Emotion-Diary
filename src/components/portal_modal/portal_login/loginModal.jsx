import { render } from "@testing-library/react";
import React, { useEffect, useRef, useState } from "react";
import PortalFooter from "../portal_footer/portalFooter";
import PortalHeader from "../portal_header/portal-header";
import LoginBody from "./loginBody";
import styles from "./loginModal.module.css";
import RegisterBody from "./registerBody";

const LoginModal = ({ onClose, authService }) => {
  const [clickLogin, setLoginClick] = useState(true);
  const onClickAuth = () => {
    setLoginClick(!clickLogin);
  };
  const modalRef = useRef();
  const handleClose = (event) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target) &&
      event.target.nodeName !== "SPAN" // span을 클릭할 때 리렌더링되는 이유로 예외케이스 추가
    ) {
      onClose();
    }
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
        <PortalHeader loginOrSignUp={clickLogin ? "로그인" : "회원 가입"} />
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
        <PortalFooter authService={authService} onClose={onClose} />
        <button onClick={onClose}>close</button>
      </div>
    </div>
  );
};

export default LoginModal;
