import React, { useCallback, useEffect, useState } from "react";
import Calendar from "../calendar/calendar";
import DiaryCards from "../diaryCards/diaryCards";
import DiaryEditForm from "../diaryEditForm/diaryEditForm";
import Header from "../header/header";
import ModalPotal from "../portal_modal/modalPotal";
import styles from "./myDiaryPage.module.css";
import { useHistory } from "react-router-dom";
import { getDate, getYear, getMonth } from "date-fns";
import { Drawer } from "antd";

const MyDiaryPage = ({ FileInput, authService, dbService }) => {
  const history = useHistory();
  const historyState = history.location.state;
  const [uid, setUid] = useState(historyState && historyState.uid);
  const [diaryList, setDiaryList] = useState({});
  const [diaryEditModal, setEditModal] = useState(false); // 일기장 편집창 Modal로 구현
  const [date, setDate] = useState(new Date());
  const [clickDate, setClickDate] = useState(""); // 달력에서 클릭한 날짜를 받아옴
  const [dayDiary, setDayDiary] = useState("");
  const [visible, setVisible] = useState(false);

  const handleClaendarDate = useCallback(
    (newDate) => {
      setDate(newDate);
    },
    [setDate]
  );
  const handleClickDate = useCallback(
    (date) => {
      setClickDate(date);
    },
    [setClickDate]
  );

  const resetDiaryList = useCallback(() => {
    setDiaryList([]);
  }, [setDiaryList]);
  const handleOpenModal = useCallback(() => {
    setEditModal(true);
  }, [setEditModal]);
  const handleCloseModal = useCallback(() => {
    setEditModal(false);
  }, [setEditModal]);
  const handleVisible = useCallback(() => {
    setVisible(!visible);
  }, [setVisible, visible]);

  const searchDiaryList = useCallback(
    (uid, year, month) => {
      dbService
        .readMonthDiary(uid, year, month)
        .then((snapshot) => setDiaryList(snapshot.val()));
    },
    [dbService]
  ); // 해당 년,월에 맞는 List를 찾아옴.

  const searchClickDateDiary = useCallback(
    (uid, year, month, date) => {
      // 달력에서 클릭한 날의 일기 데이트를 받아오는 것
      dbService
        .readDayDiary(uid, year, month, date)
        .then((snapshot) => setDayDiary(snapshot.val()));
    },
    [dbService]
  );
  const createOrUpdateDiary = (diary) => {
    setDayDiary(diary);
    setDiaryList((diarys) => {
      // 업데이트 전 일기들을 받아와서 callback 함수등록
      const updated = { ...diarys };
      updated[diary.id] = diary;
      return updated;
    });
    dbService.writeDiaryData(uid, diary);
  };

  useEffect(() => {
    if (!uid) return;
    searchClickDateDiary(
      uid,
      getYear(clickDate),
      getMonth(clickDate),
      getDate(clickDate)
    );
  }, [clickDate, uid, searchClickDateDiary]);

  useEffect(() => {
    if (!uid) return;
    searchDiaryList(uid, getYear(date), getMonth(date));
  }, [date, uid, searchDiaryList]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUid(historyState && historyState.id);
      } else {
        history.push("/");
      }
    });
  }, [uid, authService, history, historyState]);

  return (
    <>
      <Header
        authService={authService}
        uid={uid}
        handleVisible={handleVisible}
      />
      <div className={styles.MyDiaryPage}>
        <section className={styles.body}>
          <DiaryCards diaryList={diaryList} />
          <Drawer
            placement="right"
            visible={visible}
            onClose={handleVisible}
            width="34vw"
            zIndex={1}
          >
            <Calendar
              date={date}
              diaryList={diaryList}
              resetDiaryList={resetDiaryList}
              onHandleModal={handleOpenModal}
              onHandleClickDate={handleClickDate}
              setDate={handleClaendarDate}
            />
          </Drawer>
        </section>
        {diaryEditModal && (
          <ModalPotal>
            <DiaryEditForm
              FileInput={FileInput}
              date={clickDate}
              onClose={handleCloseModal}
              dayDiary={dayDiary}
              createOrUpdateDiary={createOrUpdateDiary}
            />
          </ModalPotal>
        )}
      </div>
    </>
  );
};

export default MyDiaryPage;
