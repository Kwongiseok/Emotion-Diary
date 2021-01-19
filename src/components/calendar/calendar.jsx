import React from "react";
import styles from "./calendar.module.css";
import CalendarBody from "./calendarBody";
import CalendarHeader from "./calendarHeader";

const Calendar = ({ diaryList }) => {
  return (
    <div className={styles.calendar}>
      <CalendarHeader />
      <CalendarBody diaryList={diaryList} />
    </div>
  );
};

export default Calendar;
