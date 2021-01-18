import React, { useState } from "react";
import LoginModal from "../portal_modal/portal_login/loginModal";
import ModalPotal from "../portal_modal/modalPotal";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const [modal, setModal] = useState(false);
  const [clickRegister, setRegisterClick] = useState(true);
  const [clickLogin, setLoginClick] = useState(true);

  const handleSignUp = () => {
    setModal(true);
    setLoginClick(false);
  };

  const handleClickBtn = () => {
    setRegisterClick(!clickRegister);
    setLoginClick(!clickLogin);
  };

  const handleClose = () => {
    setModal(false);
  };
  return (
    <div>
      <button onClick={handleSignUp}>회원 가입</button>
      {modal && (
        <ModalPotal>
          <LoginModal
            onClose={handleClose}
            authService={authService}
            onClickAuth={handleClickBtn}
            clickRegister={clickRegister}
            clickLogin={clickLogin}
          />
        </ModalPotal>
      )}
    </div>
  );
};

export default Login;
