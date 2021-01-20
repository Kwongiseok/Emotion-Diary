import React from "react";
import styles from "./diaryEditForm.module.css";
import { getDate, getYear, getMonth, format, getDay } from "date-fns";
const DiaryEditForm = ({ date }) => {
  const editYear = getYear(date);
  const editMonth = getMonth(date);
  const editDate = getDate(date);
  const editDay = getDay(date);
  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return (
    <div
      className={styles.DiaryEditForm}
    >{`${editYear} ${weekDays[editDay]}`}</div>
  );
};

export default DiaryEditForm;
