import React from "react";
import DiaryCard from "../diaryCard/diaryCard";
import styles from "./diaryCards.module.css";
const DiaryCards = ({ diaryList }) => {
  return (
    <section className={styles.DiaryCards}>
      {diaryList &&
        Object.keys(diaryList).map((key) => (
          <DiaryCard cardInfo={diaryList[key]} key={key} />
        ))}
    </section>
  );
};

export default DiaryCards;
