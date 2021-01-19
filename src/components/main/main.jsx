import React, { useState } from "react";
import LoginModal from "../portal_modal/portal_login/loginModal";
import ModalPotal from "../portal_modal/modalPotal";
import styles from "./main.module.css";
import { useHistory } from "react-router-dom";

const Main = ({ authService }) => {
  const [modal, setModal] = useState(false);
  const [clickRegister, setRegisterClick] = useState(true);
  const [clickLogin, setLoginClick] = useState(true);
  const history = useHistory();

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
  const handleMyDiaryPage = () => {
    history.push("/myDiaryPage");
  };
  return (
    <div>
      <button onClick={handleSignUp}>회원 가입</button>
      <button onClick={handleMyDiaryPage}>내 일기장</button>
      {modal && (
        <ModalPotal onClose={handleClose}>
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

export default Main;
