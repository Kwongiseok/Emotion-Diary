import React, { useState } from "react";
import styles from "./calendar.module.css";
import CalendarBody from "./calendarBody";
import CalendarHeader from "./calendarHeader";
const Calendar = ({ diaryList, resetDiaryList }) => {
  const [date, setDate] = useState(new Date());
  const handleDate = (date) => {
    setDate(date);
  };
  return (
    <div className={styles.calendar}>
      <CalendarHeader
        onSetDate={handleDate}
        date={date}
        resetDiaryList={resetDiaryList}
      />
      <CalendarBody date={date} diaryList={diaryList} />
    </div>
  );
};

export default Calendar;
