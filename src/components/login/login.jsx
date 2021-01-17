import React, { useState } from "react";
import LoginModal from "../portal_modal/loginModal";
import ModalPotal from "../portal_modal/modalPotal";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const [modal, setModal] = useState(false);
  const onLogin = () => {
    authService.login();
  };
  const onSignUp = () => {
    setModal(true);
  };
  return (
    <div>
      <button onClick={onSignUp}>회원 가입</button>
      <button onClick={onLogin}>Google</button>
      {modal && (
        <ModalPotal>
          <LoginModal />
        </ModalPotal>
      )}
    </div>
  );
};

export default Login;
