import React, { useState } from "react";
import Calendar from "../calendar/calendar";
import Header from "../header/header";
import styles from "./myDiaryPage.module.css";
const MyDiaryPage = (props) => {
  const [diaryList, setDiaryList] = useState([
    {
      id: 1,
      year: 2021,
      month: 1,
      photoURL: "",
      score: 3, // 감정의 정도
      day: 19,
      diaryText: "일기장이에요~~",
    },
  ]);
  const resetDiaryList = () => {
    setDiaryList([]);
  };
  return (
    <div className="MyDiaryPage">
      <Header></Header>
      <Calendar diaryList={diaryList} resetDiaryList={resetDiaryList} />
    </div>
  );
};

export default MyDiaryPage;
