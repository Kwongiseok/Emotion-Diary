import React from "react";
import styles from "./diaryForm.module.css";
import DiaryImageArea from "../diaryImageArea/diaryImageArea";
import DiaryTextArea from "../diaryTextArea/diaryTextArea";

const DiaryForm = ({
  cardInfo: { diaryText, imageURL, emotion, weather },
  onClick,
}) => (
  <div className={styles.DiaryForm} onClick={onClick}>
    hi
  </div>
);

export default DiaryForm;
