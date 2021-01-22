import React, { useCallback, useEffect, useState } from "react";
import Calendar from "../calendar/calendar";
import DiaryCards from "../diaryCards/diaryCards";
import DiaryEditForm from "../diaryEditForm/diaryEditForm";
import Header from "../header/header";
import ModalPotal from "../portal_modal/modalPotal";
import styles from "./myDiaryPage.module.css";
import { useHistory } from "react-router-dom";
import { getDate, getYear, getMonth, getDay } from "date-fns";

const MyDiaryPage = ({ dbService }) => {
  const history = useHistory();
  const historyState = history.location.state;
  const [uid, setUid] = useState(historyState && historyState.uid);
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
  });
  const [diaryEditModal, setEditModal] = useState(false); // 일기장 편집창 Modal로 구현
  // const [selectedDiary, setSelectedDiary] = useState(null);
  const [clickDate, setClickDate] = useState(""); // 달력에서 클릭한 날짜를 받아옴
  const [dayDiary, setDayDiary] = useState("");

  const handleClickDate = useCallback((date) => {
    setClickDate(date);
    // setDayDiary("");
  });
  const resetDiaryList = useCallback(() => {
    setDiaryList([]);
  });
  const handleOpenModal = useCallback(() => {
    setEditModal(true);
  });
  const handleCloseModal = useCallback(() => {
    setEditModal(false);
  });
  const searchDiaryList = (uid, year, month) => {}; // 해당 년,월에 맞는 List를 찾아옴.

  const searchClickDateDiary = useCallback((uid, year, month, date) => {
    // 달력에서 클릭한 날의 일기 데이트를 받아오는 것
    console.log(uid, year, month, date);
    dbService
      .readDayDiary(uid, year, month, date)
      .then((snaphot) => setDayDiary(snaphot.val()));
  });

  const createOrUpdateDiary = useCallback((diary) => {
    setDayDiary(diary);
    setDiaryList((diarys) => {
      // 업데이트 전 일기들을 받아와서 callback 함수등록
      const updated = { ...diarys };
      updated[diary.id] = diary;
      return updated;
    });
    dbService.writeDiaryData(uid, diary);
  });

  useEffect(() => {
    if (!uid) return;
    searchClickDateDiary(
      uid,
      getYear(clickDate),
      getMonth(clickDate),
      getDate(clickDate)
    );
  }, [clickDate]);

  return (
    <div className="MyDiaryPage">
      <Header />
      <Calendar
        diaryList={diaryList}
        resetDiaryList={resetDiaryList}
        onHandleModal={handleOpenModal}
        onHandleClickDate={handleClickDate}
      />
      <DiaryCards diaryList={diaryList} />
      {diaryEditModal && (
        <ModalPotal>
          <DiaryEditForm
            date={clickDate}
            onClose={handleCloseModal}
            dayDiary={dayDiary} // 임시용
            createOrUpdateDiary={createOrUpdateDiary}
          />
        </ModalPotal>
      )}
    </div>
  );
};

export default MyDiaryPage;
