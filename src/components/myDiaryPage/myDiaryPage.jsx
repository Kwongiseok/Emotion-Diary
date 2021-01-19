import React from "react";
import Calendar from "../calendar/calendar";
import Header from "../header/header";
import styles from "./myDiaryPage.module.css";
const MyDiaryPage = (props) => {
  const diaryList = [
    {
      id: 1,
      year: 2021,
      month: 1,
      photoURL: "",
      score: 3, // 감정의 정도
      day: 19,
      diaryText: "일기장이에요~~",
    },
  ];
  return (
    <div className="MyDiaryPage">
      <Header></Header>
      <Calendar diaryList={diaryList} />
    </div>
  );
};

export default MyDiaryPage;
