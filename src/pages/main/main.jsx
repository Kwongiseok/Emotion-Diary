import React, { useEffect, useState } from "react";
import LoginModal from "../../components/portal_modal/portal_login/loginModal";
import ModalPotal from "../../components/portal_modal/modalPotal";
import styles from "./main.module.css";
import { useHistory } from "react-router-dom";
import Header from "../../components/header/header";

const Main = ({ authService }) => {
  const history = useHistory();
  const historyState = history.location.state;
  const [uid, setUid] = useState(historyState && historyState.uid);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUid(historyState && historyState.id);
      } else {
        history.push("/");
      }
    });
    return () => {};
  }, [uid, authService, history, historyState]);

  return (
    <div className="main">
      <Header authService={authService} uid={uid} />
    </div>
  );
};

export default Main;
