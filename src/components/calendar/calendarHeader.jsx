import React, { memo } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { subMonths, addMonths, getYear, getMonth } from "date-fns";
import styles from "./calendar.module.css";

const CalendarHeader = memo(({ onSetDate, date, resetDiaryList }) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const subMonth = () => {
    const newDate = subMonths(date, 1);
    const prevYear = getYear(newDate);
    const prevMonth = getMonth(newDate);
    resetDiaryList();
    onSetDate(new Date(prevYear, prevMonth));
    // DiaryList 함수 호출 작성해야함
  };
  const addMonth = () => {
    const newDate = addMonths(date, 1);
    const nextYear = getYear(newDate);
    const nextMonth = getMonth(newDate);
    console.log(nextYear);
    resetDiaryList();
    onSetDate(new Date(nextYear, nextMonth));
    // DiaryList 함수 호출 작성해야함
  };
  return (
    <div className={styles.CalendarHeader}>
      <button className={styles.button} onClick={subMonth}>
        <MdChevronLeft />
      </button>
      <span className={styles.headerTitle}>{`${
        months[getMonth(date)] + "  " + getYear(date)
      }`}</span>
      <button className={styles.button} onClick={addMonth}>
        <MdChevronRight />
      </button>
    </div>
  );
});

export default CalendarHeader;
