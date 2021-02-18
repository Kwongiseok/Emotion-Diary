/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import PreViewCard from "../preView/preViewCard";
import styles from "./diaryCard.module.css";

const DiaryCard = ({ cardInfo }) => {
  const [selected, setSelected] = useState(true);
  const handleClick = () => {
    setSelected(!selected);
  };
  return (
    <div className={styles.DiaryCard}>
      <PreViewCard cardInfo={cardInfo} />
      <div className={styles.diaryText}>
        <h3 className={styles.diaryTitle}>{cardInfo.title}</h3>
        <h4>{cardInfo.diaryText}</h4>
      </div>
    </div>
  );
};

export default DiaryCard;
