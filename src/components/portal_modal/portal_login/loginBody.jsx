import React, { useRef } from "react";
import styles from "./loginModal.module.css";
const LoginBody = ({ onClickAuth, authService }) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email);
    authService
      .signIn(email, password)
      .then(console.log("login 성공"))
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
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
      <button>로그인</button>
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
