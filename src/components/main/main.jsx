import React, { useState } from "react";
import LoginModal from "../portal_modal/portal_login/loginModal";
import ModalPotal from "../portal_modal/modalPotal";
import styles from "./main.module.css";
import { useHistory } from "react-router-dom";
import Header from "../header/header";

const Main = ({ authService }) => {
  return (
    <div className="main">
      <Header authService={authService} />
    </div>
  );
};

export default Main;
