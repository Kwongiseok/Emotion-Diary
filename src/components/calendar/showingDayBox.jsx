import React from "react";
import styles from "./calendar.module.css";
const ShowingDayBox = ({ showingDay, onHandleBox }) => {
  const handleClick = () => {
    onHandleBox(showingDay);
  };
  return (
    <div className={styles.showingDayBox} onClick={handleClick}>
      <span>{showingDay}</span>
    </div>
  );
};

export default ShowingDayBox;
