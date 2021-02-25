import React, { memo, useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./header.module.css";
import LoginModal from "../portal_modal/portal_login/loginModal";
import ModalPotal from "../portal_modal/modalPotal";

const Header = memo(({ authService, uid, handleVisible }) => {
  const history = useHistory();
  const [modal, setModal] = useState(false);
  const logout = () => {
    authService.logOut().then(history.push("/"));
  };
  const handleClose = () => {
    setModal(false);
  };
  const handleSignUp = () => {
    setModal(true);
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="" alt="" />
        <h3 className={styles.title}>Emotion Diary</h3>
      </div>
      {uid ? (
        <div className={styles.navMenus}>
          <span className={styles.navMenu} onClick={handleVisible}>
            일기 작성
          </span>
          <span className={styles.navMenu} onClick={logout}>
            로그아웃
          </span>
        </div>
      ) : (
        <nav className={styles.navMenus}>
          <span className={styles.navMenu} onClick={handleSignUp}>
            로그인
          </span>
        </nav>
      )}
      {modal && (
        <ModalPotal>
          <LoginModal onClose={handleClose} authService={authService} />
        </ModalPotal>
      )}
    </header>
  );
});
export default Header;
