import React from "react";
import styles from "./calendar.module.css";
const ShowingDayBox = ({
  showingDay,
  existDiary,
  diaryList,
  onHandleBox,
  todaySelector,
}) => {
  const handleClick = () => {
    onHandleBox(showingDay);
  };
  return (
    <div
      className={todaySelector ? styles.todayBox : styles.showingDayBox}
      onClick={handleClick}
    >
      <span>{showingDay}</span>
      {existDiary && <div>{diaryList[showingDay].emotion}</div>}
    </div>
  );
};

export default ShowingDayBox;
