import React, { memo, useCallback, useState } from "react";
import styles from "./calendar.module.css";
import CalendarBody from "./calendarBody";
import CalendarHeader from "./calendarHeader";
const Calendar = ({
  date,
  diaryList,
  resetDiaryList,
  onHandleModal,
  onHandleClickDate,
  setDate,
}) => {
  const handleDate = useCallback(
    (date) => {
      setDate(date);
    },
    [setDate]
  );
  return (
    <div className={styles.calendar}>
      <CalendarHeader
        onSetDate={handleDate}
        date={date}
        resetDiaryList={resetDiaryList}
      />
      <CalendarBody
        date={date}
        diaryList={diaryList}
        onHandleModal={onHandleModal}
        onHandleClickDate={onHandleClickDate}
      />
    </div>
  );
};

export default Calendar;
