import React from "react";
import styles from "./howToUse.module.css";
import useVideo from "../../videos/howToUse.mp4";
const HowToUse = (props) => (
  <div className={styles.howToUse}>
    <div className={styles.explanation}>
      <h1 className={styles.title}>간단한 사용법</h1>
      <div>
        <p>일기 작성 달력에서 날짜를 클릭하고 작성</p>
        <p>이미지 업로드와 오늘의 감정분석이 가능해요!</p>
      </div>
    </div>
    <video className={styles.video} src={useVideo} autoPlay muted loop></video>
  </div>
);

export default HowToUse;
