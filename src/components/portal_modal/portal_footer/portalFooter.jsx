import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./portalFooter.module.css";
const PortalFooter = ({ authService, onClose }) => {
  const history = useHistory();
  const loginSuccess = ({ user }) => {
    history.push({
      pathname: "/myDiaryPage",
      state: { id: user.uid },
    });
    onClose();
  };
  const handleGoogleLogin = () => {
    authService.logIn().then((data) => loginSuccess(data));
  };
  return (
    <div>
      <button className={styles.googleBtn} onClick={handleGoogleLogin}>
        Login with Google
      </button>
    </div>
  );
};

export default PortalFooter;
