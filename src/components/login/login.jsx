import React, { useState } from "react";
import LoginModal from "../portal_modal/portal_login/loginModal";
import ModalPotal from "../portal_modal/modalPotal";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const [modal, setModal] = useState(false);
  const handleSignUp = () => {
    setModal(true);
  };
  const handleClose = () => {
    setModal(false);
  };
  return (
    <div>
      <button onClick={handleSignUp}>회원 가입</button>
      {modal && (
        <ModalPotal>
          <LoginModal onClose={handleClose} authService={authService} />
        </ModalPotal>
      )}
    </div>
  );
};

export default Login;
