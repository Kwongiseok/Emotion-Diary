import React from "react";
import styles from "./diaryForm.module.css";
import DiaryImageArea from "../diaryImageArea/diaryImageArea";
import DiaryTextArea from "../diaryTextArea/diaryTextArea";

const DiaryForm = ({ cardInfo: { diaryText, imageURL, emotion, weather } }) => (
  <div className={styles.DiaryForm}>
    <DiaryImageArea imageURL={imageURL} />
    <DiaryTextArea diaryText={diaryText} emotion={emotion} weather={weather} />
  </div>
);

export default DiaryForm;
