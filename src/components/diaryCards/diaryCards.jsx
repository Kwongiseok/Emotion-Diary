import React from "react";
import DiaryCard from "../diaryCard/diaryCard";
import styles from "./diaryCards.module.css";
const DiaryCards = ({ diaryList }) => {
  return (
    <div className={styles.DiaryCards}>
      {Object.keys(diaryList).map((key) => (
        <DiaryCard cardInfo={diaryList[key]} key={key} />
      ))}
    </div>
  );
};

export default DiaryCards;
