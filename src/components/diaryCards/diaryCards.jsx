import React from "react";
import DiaryCard from "../diaryCard/diaryCard";
import styles from "./diaryCards.module.css";
const DiaryCards = ({ diaryList }) => {
  return (
    <div className={styles.DiaryCards}>
      {diaryList.map((item) => (
        <DiaryCard cardInfo={item} key={item.id} />
      ))}
    </div>
  );
};

export default DiaryCards;
