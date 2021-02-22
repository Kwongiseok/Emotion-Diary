import { Button } from "antd";
import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import styles from "./loginModal.module.css";
const RegisterBody = ({ authService, onClickAuth, onClose }) => {
  const formRef = useRef();
  const nickNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const goToMain = ({ user }) => {
    onClose();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("클릭");
    const nickName = nickNameRef.current.value || "";
    const email = emailRef.current.value || "";
    const password = passwordRef.current.value || "";
    authService
      .signUp(email, password)
      .then((user) => {
        authService.updateProfile(nickName);
        authService
          .signIn(email, password)
          .then((data) => goToMain(data))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className={styles.loginForm} onSubmit={handleSubmit}>
      <input
        ref={nickNameRef}
        type="text"
        className={styles.inputBar}
        placeholder="닉네임"
      />
      <input
        ref={emailRef}
        type="text"
        className={styles.inputBar}
        placeholder="이메일"
      />
      <input
        ref={passwordRef}
        type="password"
        className={styles.inputBar}
        placeholder="비밀번호"
      />

      <button className={styles.loginBtn}>회원가입</button>
      <div className={styles.authManage}>
        <label className={styles.noAccount}>이미 가입하셨나요?</label>
        <span className={styles.loginOrRegister} onClick={onClickAuth}>
          로그인
        </span>
      </div>
    </form>
  );
};

export default RegisterBody;
