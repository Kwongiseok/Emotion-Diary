import React, { memo, useCallback, useState } from "react";
import styles from "./calendar.module.css";
import CalendarBody from "./calendarBody";
import CalendarHeader from "./calendarHeader";
const Calendar = memo(
  ({ diaryList, resetDiaryList, onHandleModal, onHandleClickDate }) => {
    const [date, setDate] = useState(new Date());
    const handleDate = useCallback((date) => {
      setDate(date);
    });
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
  }
);

export default Calendar;
