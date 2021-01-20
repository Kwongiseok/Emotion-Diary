import React, { useEffect, useRef } from "react";
import styles from "./diaryEditForm.module.css";
import { getDate, getYear, getMonth, format, getDay } from "date-fns";
const DiaryEditForm = ({ date, onClose }) => {
  const editYear = getYear(date);
  const editMonth = getMonth(date);
  const editDate = getDate(date);
  const editDay = getDay(date);
  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  //date를 이용해서 해당하는 날짜의 데이터를 받아와야함
  const modalRef = useRef();
  const handleClose = (event) => {
    // modal DOM 내부에 editForm 외에 클릭했을 때 닫힘
    if (modalRef.current && !modalRef.current.contains(event.target)) onClose();
  };
  useEffect(() => {
    // modal DOM에 클릭했을 때 이벤트 등록
    window.addEventListener("click", handleClose);
    return () => {
      window.removeEventListener("click", handleClose);
    };
  }, []);

  return (
    <div className={styles.DiaryEditModal}>
      <div ref={modalRef} className={styles.DiaryEditForm}>
        <div
          className={styles.header}
        >{`${editYear} ${weekDays[editDay]}`}</div>
        <div className={styles.imageBox}>
          <img className={styles.image} src="/Giseok.png" alt="upload" />
        </div>
        <div className={styles.icons}>{"😀"}</div>
        <form>
          <textarea
            className={styles.textArea}
            placeholder={true ? "오늘 하루 어땠나요?" : "오늘 하루 어땠나요?"}
          />
        </form>
      </div>
    </div>
  );
};

export default DiaryEditForm;
