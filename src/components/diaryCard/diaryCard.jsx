import React, { useState } from "react";
import DiaryForm from "../diaryForm/diaryForm";
// import DiaryImageArea from "../diaryImageArea/diaryImageArea";
import styles from "./diaryCard.module.css";
const DiaryCard = ({ cardInfo }) => {
  const [selected, setSelected] = useState(false);
  const handleClick = () => {
    setSelected(!selected);
  };
  return (
    <div className={styles.DiaryCard}>
      {selected ? (
        <DiaryForm cardInfo={cardInfo} onClick={handleClick} />
      ) : (
        <div className={styles.previewCard} onClick={handleClick}>
          <div className={styles.dayInfo}>
            <h1 className={styles.dayTitle}>{cardInfo.id}</h1>
            <span className={styles.dayOfWeek}>{cardInfo.day}</span>
            <span className={styles.weather}>{cardInfo.weather}</span>
          </div>
          <div className={styles.imageBox}>
            {cardInfo.imageURL ? (
              <img className={styles.image} src={cardInfo.imageURL} />
            ) : (
              <section className={styles.image}>{cardInfo.title}</section>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DiaryCard;
