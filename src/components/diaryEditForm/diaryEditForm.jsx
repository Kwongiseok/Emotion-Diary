import React, { useEffect, useRef } from "react";
import styles from "./diaryEditForm.module.css";
import { getDate, getYear, getMonth, getDay } from "date-fns";
const DiaryEditForm = ({
  date,
  onClose,
  calendarDiary,
  createOrUpdateDiary,
}) => {
  const editYear = getYear(date);
  const editMonth = getMonth(date);
  const editDate = getDate(date);
  const editDay = getDay(date);
  const { title, imageURL, diaryText } = calendarDiary || "";

  const modalRef = useRef();
  const titleRef = useRef();
  const weatherRef = useRef();
  const imageRef = useRef();
  const diaryTextRef = useRef();

  const makeNewDiary = () => {
    const newDiary = {
      id: editDate, // or uuid
      title: titleRef.current.value || "",
      date: date,
      year: editYear,
      month: editMonth,
      day: editDay,
      weather: weatherRef.current.value || "",
      diaryText: diaryTextRef.current.value || "",
      emotion: "😀", // 이모션 메커니즘 생성 후
      imageURL: "",
    };
    return newDiary;
  };
  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  //date를 이용해서 해당하는 날짜의 데이터를 받아와야함
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

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    } else {
      event.preventDefault();
      {
        calendarDiary
          ? createOrUpdateDiary({
              // 작성된 일기가 있을 때,
              ...calendarDiary,
              [event.currentTarget.name]: event.currentTarget.value,
            })
          : createOrUpdateDiary({
              // 작성된 일기가 없을 때,
              ...makeNewDiary(),
              [event.currentTarget.name]: event.currentTarget.value,
            });
      }
    }
  };

  return (
    <div className={styles.DiaryEditModal}>
      <div ref={modalRef} className={styles.DiaryEditForm}>
        <div
          className={styles.header}
        >{`${editYear} ${weekDays[editDay]}`}</div>
        <div className={styles.imageBox}>
          <img
            ref={imageRef}
            className={styles.image}
            src={imageURL}
            alt="upload"
          />
        </div>
        <div className={styles.icons}>
          <select ref={weatherRef} className={styles.weather}>
            <option value="blur">☁️</option>
          </select>
        </div>
        <form className={styles.formBox}>
          <input
            ref={titleRef}
            className={styles.title}
            type="text"
            placeholder={"Title"}
            name="title"
            value={title}
            onChange={onChange}
          />
          <textarea
            ref={diaryTextRef}
            className={styles.textArea}
            placeholder={true ? "오늘 하루 어땠나요?" : "오늘 하루 어땠나요?"}
            name="diaryText"
            value={diaryText}
            onChange={onChange}
          />
        </form>
      </div>
    </div>
  );
};

export default DiaryEditForm;
