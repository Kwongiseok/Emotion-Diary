import React, { useState } from "react";
import Calendar from "../calendar/calendar";
import DiaryCards from "../diaryCards/diaryCards";
import DiaryEditForm from "../diaryEditForm/diaryEditForm";
import Header from "../header/header";
import ModalPotal from "../portal_modal/modalPotal";
import styles from "./myDiaryPage.module.css";
const MyDiaryPage = ({ dbService }) => {
  const [diaryList, setDiaryList] = useState({
    1: {
      id: 1,
      year: 2021,
      month: 1,
      imageURL:
        "https://res.cloudinary.com/dsb0lexgl/image/upload/ar_16:9,c_fill,e_sharpen,g_auto,h_250,w_400/v1610618431/dpgad0aikgjmtr9gxgfs.png",
      day: 19,
      title: "오늘의 일기",
      weather: "good",
      diaryText: "일기장이에요~~",
      emotion: "😀",
    },
    2: {
      id: 2,
      year: 2021,
      month: 1,
      imageURL:
        "https://res.cloudinary.com/dsb0lexgl/image/upload/ar_16:9,c_fill,e_sharpen,g_auto,h_250,w_400/v1610618431/dpgad0aikgjmtr9gxgfs.png",
      score: 3, // 감정의 정도
      day: 19,
      title: "또 다른 일기",
      weather: "rain",
      diaryText:
        "또 다른 일기장이에요~~ 반가워요~~~~~~~~2-2--111패ㅐㅇ맨애맹맨앹침닝밈ㅁㅁㅁㅁㅁㅁㅁㅁㅁ",
      emotion: "😰",
    },
  });

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
  const searchDiaryList = () => {}; // 해당 년,월에 맞는 List를 찾아옴.
  const searchClickDateDiary = () => {
    // 달력에서 클릭한 날의 일기 데이트를 받아오는 것
  };
  const createOrUpdateDiary = (diary) => {
    setDiaryList((diarys) => {
      // 업데이트 전 일기들을 받아와서 callback 함수등록
      const updated = { ...diarys };
      updated[diary.id] = diary;
      return updated;
    });
  };
  return (
    <div className="MyDiaryPage">
      <Header />
      <Calendar
        diaryList={diaryList}
        resetDiaryList={resetDiaryList}
        onHandleModal={handleEditModal}
        onHandleClickDate={handleClickDate}
      />
      <DiaryCards diaryList={diaryList} />
      {diaryEditModal && (
        <ModalPotal>
          <DiaryEditForm
            date={clickDate}
            onClose={handleCloseModal}
            calendarDiary={diaryList[1]} // 임시용
            createOrUpdateDiary={createOrUpdateDiary}
          />
        </ModalPotal>
      )}
    </div>
  );
};

export default MyDiaryPage;
