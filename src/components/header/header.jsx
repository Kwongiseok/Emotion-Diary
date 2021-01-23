import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./header.module.css";
import LoginModal from "../portal_modal/portal_login/loginModal";
import ModalPotal from "../portal_modal/modalPotal";

const Header = ({ authService }) => {
  const history = useHistory();
  const historyState = history.location.state;
  const [uid, setUid] = useState(historyState && historyState.uid);
  const [modal, setModal] = useState(false);

  const logout = () => {
    authService.logOut().then(history.push("/"));
    setUid("");
  };
  const handleMyDiaryPage = () => {
    history.push({
      pathname: "/myDiaryPage",
      state: {
        uid: uid,
      },
    });
  };
  const handleMainPage = () => {
    history.push({
      pathname: "/",
      state: {
        uid: uid,
      },
    });
  };
  const handleClose = () => {
    setModal(false);
  };
  const handleSignUp = () => {
    setModal(true);
  };
  const loginSaveUid = (uid) => {
    setUid(uid);
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="" alt="" />
        <h3 className={styles.title} onClick={handleMainPage}>
          Emotion Diary
        </h3>
      </div>
      <nav className={styles.navMenus}>
        <span className={styles.navMenu} onClick={handleMyDiaryPage}>
          My Story
        </span>
        <span className={styles.navMenu}>My Familly</span>
        <span className={styles.navMenu}>Shared Diary</span>
        {uid ? (
          <span className={styles.navMenu} onClick={logout}>
            로그아웃
          </span>
        ) : (
          <span className={styles.navMenu} onClick={handleSignUp}>
            로그인
          </span>
        )}
      </nav>
      {modal && (
        <ModalPotal>
          <LoginModal
            onClose={handleClose}
            authService={authService}
            loginSaveUid={loginSaveUid}
          />
        </ModalPotal>
      )}
    </header>
  );
};
export default Header;
