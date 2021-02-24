/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import DiaryClick from "../portal_modal/cardClick/diaryClick";
import ModalPotal from "../portal_modal/modalPotal";
import PreViewCard from "../preView/preViewCard";
import styles from "./diaryCard.module.css";

const DiaryCard = ({
  deleteDiaryFromList,
  cardInfo,
  handleClickDate,
  handleOpenModal,
}) => {
  const [selected, setSelected] = useState(false);
  const handleClick = () => {
    setSelected(!selected);
  };
  return (
    <div className={styles.DiaryCard}>
      <PreViewCard cardInfo={cardInfo} />
      <div className={styles.diaryText} onClick={handleClick}>
        <h3 className={styles.diaryTitle}>{cardInfo.title}</h3>
        <h4 className={styles.diaryInsideTitle}>
          {cardInfo.diaryText.split(".")[0] ||
            cardInfo.diaryText.split("\n")[0]}
        </h4>
      </div>
      {selected && (
        <ModalPotal>
          <DiaryClick
            deleteDiaryFromList={deleteDiaryFromList}
            cardInfo={cardInfo}
            onClose={handleClick}
            handleClickDate={handleClickDate}
            handleOpenModal={handleOpenModal}
          />
        </ModalPotal>
      )}
    </div>
  );
};

export default DiaryCard;
