/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-lone-blocks */

import React, { useEffect, useRef } from "react";
import styles from "./diaryEditForm.module.css";
import { getDate, getYear, getMonth, getDay } from "date-fns";
import {
  HAPPY,
  NEGATIVE,
  NORMAL,
  sentimentAnalysis,
} from "../../serviceApp/textEmotion";
import { Tooltip } from "antd";
const DiaryEditForm = ({
  FileInput,
  date,
  onClose,
  createOrUpdateDiary,
  dayDiary,
}) => {
  const editYear = getYear(date);
  const editMonth = getMonth(date);
  const editDate = getDate(date);
  const editDay = getDay(date);
  const { title, imageURL, diaryText, emotion } = dayDiary ? dayDiary : "";
  const modalRef = useRef();
  const titleRef = useRef();
  const weatherRef = useRef();
  const diaryTextRef = useRef();
  const formRef = useRef();
  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const makeNewDiary = () => {
    const newDiary = {
      id: editDate, // or uuid
      title: titleRef.current.value || "",
      date: date,
      year: editYear,
      month: editMonth,
      day: weekDays[editDay],
      weather: weatherRef.current.value || "",
      diaryText: diaryTextRef.current.value || "",
      emotion: "😀", // 이모션 메커니즘 생성 후
      imageURL: "",
    };
    return newDiary;
  };
  //date를 이용해서 해당하는 날짜의 데이터를 받아와야함
  const handleClose = (event) => {
    // modal DOM 내부에 editForm 외에 클릭했을 때 닫힘
    if (modalRef.current && !modalRef.current.contains(event.target)) onClose();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onClose();
  };

  useEffect(() => {
    // modal DOM에 클릭했을 때 이벤트 등록
    window.addEventListener("click", handleClose);
    return () => {
      window.removeEventListener("click", handleClose);
    };
  }, [handleClose]);

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    } else {
      event.preventDefault();
      {
        dayDiary
          ? createOrUpdateDiary({
              // 작성된 일기가 있을 때,
              ...dayDiary,
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
  const onFileChange = (file) => {
    dayDiary
      ? createOrUpdateDiary({
          // 작성된 일기가 있을 때,
          ...dayDiary,
          imageURL: file.url,
        })
      : createOrUpdateDiary({
          // 작성된 일기가 없을 때,
          ...makeNewDiary(),
          imageURL: file.url,
        });
  };

  const handleEmotion = async () => {
    const feel = await sentimentAnalysis(diaryText);
    console.log(feel);
    updateEmotion(feel);
  };

  const updateEmotion = (feel) => {
    switch (feel) {
      case HAPPY:
        createOrUpdateDiary({
          ...dayDiary,
          emotion: "😊",
        });
        break;
      case NORMAL:
        createOrUpdateDiary({
          ...dayDiary,
          emotion: "😮",
        });
        break;
      case NEGATIVE:
        createOrUpdateDiary({
          ...dayDiary,
          emotion: "😡",
        });
        break;
      default:
        throw new Error(`Unhandled Emotion`);
    }
  };

  return (
    <div className={styles.DiaryEditModal}>
      <div ref={modalRef} className={styles.DiaryEditForm}>
        <div className={styles.imageBox}>
          <FileInput onFileChange={onFileChange} imageURL={imageURL} />
        </div>
        <div className={styles.contentBox}>
          <div
            className={styles.header}
          >{`${editYear} ${weekDays[editDay]}`}</div>
          <div className={styles.icons}>
            <Tooltip title={"오늘의 날씨를 기록해요!"}>
              <select ref={weatherRef} className={styles.weather}>
                <option value="☀️">☀️</option>
                <option value="🌥">🌥</option>
                <option value="🌨">🌨</option>
                <option value="☔">☔</option>
              </select>
            </Tooltip>
            {emotion ? (
              <button className={styles.emotion} onClick={handleEmotion}>
                <Tooltip title={"오늘의 감정을 알아봐요!"}>{emotion}</Tooltip>
              </button>
            ) : (
              <button className={styles.emotion} onClick={handleEmotion}>
                <Tooltip title={"오늘의 감정을 알아봐요!"}>{"🧐"}</Tooltip>
              </button>
            )}
          </div>
          <form
            ref={formRef}
            className={styles.formBox}
            onSubmit={handleSubmit}
          >
            <input
              ref={titleRef}
              className={styles.title}
              type="text"
              placeholder={"Title"}
              name="title"
              value={title || ""}
              maxLength="18"
              onChange={onChange}
            />
            <textarea
              type="text"
              ref={diaryTextRef}
              className={styles.textArea}
              placeholder={"오늘 하루 어땠나요?"}
              name="diaryText"
              value={diaryText || ""}
              onChange={onChange}
            />
          </form>
          <button className={styles.closeBtn} onClick={onClose}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiaryEditForm;
