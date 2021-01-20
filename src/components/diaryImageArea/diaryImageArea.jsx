import React from "react";
import styles from "./diaryImageArea.module.css";

const DiaryImageArea = ({ imageURL }) => {
  return (
    <div className={styles.DiaryImageArea}>
      <img className={styles.imageURL} src={imageURL} />
    </div>
  );
};

export default DiaryImageArea;
