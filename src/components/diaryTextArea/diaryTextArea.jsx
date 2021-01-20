import React from "react";
import styles from "./diaryTextArea.module.css";
const DiaryTextArea = ({ diaryText, weather, emotion }) => {
  const month = "May";
  const date = 5;
  const day = "Mon";
  const year = "2020";
  return (
    <div className={styles.DiaryTextArea}>
      <div className={styles.dayInfo}>
        <span
          className={styles.dayInfoSpan}
        >{`${day} ${date} ${month} ${year}`}</span>
        <div className={styles.weatherAndEmtoion}>
          <span>{weather}</span>
          <span>{emotion}</span>
        </div>
      </div>
      <div>{diaryText}</div>
    </div>
  );
};

export default DiaryTextArea;
