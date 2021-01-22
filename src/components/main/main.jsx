import React, { useEffect, useRef, useState } from "react";
import LoginModal from "../portal_modal/portal_login/loginModal";
import ModalPotal from "../portal_modal/modalPotal";
import styles from "./main.module.css";
import { useHistory } from "react-router-dom";

const Main = ({ authService }) => {
  const [modal, setModal] = useState(false);
  const history = useHistory();
  const historyState = history.location.state;

  const handleSignUp = () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };
  const handleMyDiaryPage = () => {
    const userId = historyState.uid;
    const imgURL = historyState.imageURL;
    history.push({
      pathname: "/myDiaryPage",
      state: {
        uid: userId,
        imageURL: imgURL,
      },
    });
  };

  return (
    <div>
      <button onClick={handleSignUp}>회원 가입</button>
      <button onClick={handleMyDiaryPage}>내 일기장</button>
      {modal && (
        <ModalPotal>
          <LoginModal onClose={handleClose} authService={authService} />
        </ModalPotal>
      )}
    </div>
  );
};

export default Main;
