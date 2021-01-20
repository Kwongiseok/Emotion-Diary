import React from "react";
import DiaryForm from "../diaryForm/diaryForm";
import DiaryImageArea from "../diaryImageArea/diaryImageArea";
import styles from "./diaryCard.module.css";
const DiaryCard = ({ cardInfo }) => {
  const selected = true;
  return (
    <div className={styles.DiaryCard}>
      {selected ? (
        <DiaryForm cardInfo={cardInfo} />
      ) : (
        <div className={styles.dayInfo}>
          <span className={styles.dayTitle}>{cardInfo.day}</span>
          <span className={styles.dayOfWeek}>Mon</span>
          <span className={styles.weather}>{cardInfo.weather}</span>
          <div className={styles.imageBox}>
            <img className={styles.image} src="/favicon.ico" />
          </div>
        </div>
      )}
    </div>
  );
};

export default DiaryCard;
