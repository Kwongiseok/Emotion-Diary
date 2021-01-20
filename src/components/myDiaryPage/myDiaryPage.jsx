import React, { useState } from "react";
import Calendar from "../calendar/calendar";
import DiaryCards from "../diaryCards/diaryCards";
import DiaryEditForm from "../diaryEditForm/diaryEditForm";
import Header from "../header/header";
import ModalPotal from "../portal_modal/modalPotal";
import styles from "./myDiaryPage.module.css";
const MyDiaryPage = (props) => {
  const [diaryList, setDiaryList] = useState([
    {
      id: 1,
      year: 2021,
      month: 1,
      imageURL:
        "https://res.cloudinary.com/dsb0lexgl/image/upload/v1610608587/erhduildqkactvclhik6.png",
      score: 3, // 감정의 정도
      day: 19,
      title: "오늘의 일기",
      weather: "good",
      diaryText: "일기장이에요~~",
      emotion: "😀",
    },
    {
      id: 2,
      year: 2021,
      month: 1,
      imageURL: "",
      score: 3, // 감정의 정도
      day: 19,
      title: "또 다른 일기",
      weather: "rain",
      diaryText:
        "또 다른 일기장이에요~~ 반가워요~~~~~~~~2-2--111패ㅐㅇ맨애맹맨앹침닝밈ㅁㅁㅁㅁㅁㅁㅁㅁㅁ",
      emotion: "😰",
    },
  ]);
  const [diaryEditModal, setEditModal] = useState(false); // 일기장 편집창 Modal로 구현
  const [selectedDiary, setSelectedDiary] = useState(null);
  const [clickDate, setClickDate] = useState(); // 달력에서 클릭한 날짜를 받아옴

  const handleClickDate = (date) => {
    setClickDate(date);
  };
  const resetDiaryList = () => {
    setDiaryList([]);
  };
  const handleEditModal = () => {
    setEditModal(true);
  };
  const handleCloseModal = () => {
    setEditModal(false);
  };
  return (
    <div className="MyDiaryPage">
      <Header></Header>
      <Calendar
        diaryList={diaryList}
        resetDiaryList={resetDiaryList}
        onHandleModal={handleEditModal}
        onHandleClickDate={handleClickDate}
      />
      <DiaryCards diaryList={diaryList} />
      {diaryEditModal && (
        <ModalPotal onClose={handleCloseModal}>
          <DiaryEditForm date={clickDate} />
        </ModalPotal>
      )}
    </div>
  );
};

export default MyDiaryPage;
