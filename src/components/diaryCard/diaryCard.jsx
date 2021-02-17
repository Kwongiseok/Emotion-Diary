/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import FlippedCard from "../flipCard/flipCard";
import styles from "./diaryCard.module.css";
import ReactCardFlip from "react-card-flip";
import PreViewCard from "../flipCard/preViewCard";

const DiaryCard = ({ cardInfo }) => {
  const [isFlipped, setisFlipped] = useState(true);
  const handleClick = () => {
    setisFlipped(!isFlipped);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className={styles.DiaryCard}>
        <FlippedCard
          cardInfo={cardInfo}
          handleClick={handleClick}
        ></FlippedCard>
      </div>
      <div className={styles.DiaryCard}>
        <PreViewCard
          cardInfo={cardInfo}
          handleClick={handleClick}
        ></PreViewCard>
      </div>
    </ReactCardFlip>
  );
};

export default DiaryCard;
