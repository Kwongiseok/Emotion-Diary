import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import styles from "./loginModal.module.css";
const LoginBody = ({ authService, onClickAuth, onClose }) => {
  const formRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const successLogin = ({ user }) => {
    onClose();
    history.push({
      pathname: "/myDiaryPage",
      state: { id: user.uid },
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    authService
      .signIn(email, password)
      .then((userData) => successLogin(userData))
      .catch((err) => {
        console.log(err);
      });
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className={styles.loginForm} onSubmit={handleSubmit}>
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
      <button className={styles.loginBtn}>로그인</button>
      <div className={styles.authManage}>
        <h2 className={styles.lostPassword}>혹시 비밀번호를 잊어버리셨나요?</h2>
        <label className={styles.noAccount}>계정이 없으신가요?</label>
        <span className={styles.loginOrRegister} onClick={onClickAuth}>
          회원가입
        </span>
      </div>
    </form>
  );
};

export default LoginBody;
