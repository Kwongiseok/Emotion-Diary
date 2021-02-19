import React from "react";
import styles from "./calendar.module.css";
import {
  getDate,
  addDays,
  getYear,
  getMonth,
  format,
  startOfWeek,
  getWeeksInMonth,
} from "date-fns";
import ShowingDayBox from "./showingDayBox";
import ShowingEmptyBox from "./showingEmptyBox";
const CalendarBody = ({
  date,
  diaryList,
  onHandleModal,
  onHandleClickDate,
}) => {
  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const headerYear = getYear(date);
  const headerMonth = getMonth(date);
  const headerDate = getDate(date);
  const weeksCountInMonth = getWeeksInMonth(date);
  const dayRange = Array(7).fill(1);
  const weekRange = Array(weeksCountInMonth).fill(1);

  const handleShowingBox = (day) => {
    // 클릭했을 때 새로운 edit창을 띄움
    onHandleClickDate(new Date(headerYear, headerMonth, day));
    onHandleModal();
  };

  return (
    <div className={styles.CalendarBody}>
      <div className={styles.weekDays}>
        {weekDays.map((item, week_tmpKey) => (
          <div className={styles.dayName} key={week_tmpKey}>
            {item}
          </div>
        ))}
      </div>
      <div className={styles.monthBox}>
        {
          //
          weekRange.map((week, weekIndex) => (
            <div className={styles.weekBox} key={weekIndex}>
              {dayRange.map((day, dayIndex) => {
                let increasingDays = weekIndex * 7 + dayIndex;
                let newDay = addDays(
                  startOfWeek(new Date(headerYear, headerMonth)),
                  increasingDays
                ); // startOfWeek - 해당월 첫 주, + 현재 추가해야할 Days 계산
                let formDate = format(newDay, "d"); // 일(Day) 만 뽑아낸다.
                let newMonth = getMonth(newDay);
                let showingDay = headerMonth === newMonth ? `${formDate}` : "";
                let existDiary =
                  diaryList && Object.keys(diaryList).includes(showingDay);
                let todaySelector =
                  format(newDay, "yyyy-MM-d") ===
                  format(
                    new Date(headerYear, headerMonth, headerDate),
                    "yyyy-MM-d"
                  )
                    ? "sameDay"
                    : "";
                return showingDay ? (
                  <ShowingDayBox
                    key={dayIndex}
                    showingDay={showingDay}
                    existDiary={existDiary}
                    diaryList={diaryList}
                    onHandleBox={handleShowingBox}
                  />
                ) : (
                  <ShowingEmptyBox key={dayIndex} />
                );
              })}
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default CalendarBody;
