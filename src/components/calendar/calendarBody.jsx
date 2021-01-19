import React, { useState } from "react";
import styles from "./calendar.module.css";
import {
  getDate,
  addDays,
  addMonths,
  getYear,
  getMonth,
  format,
  startOfWeek,
  subMonths,
  getWeeksInMonth,
} from "date-fns";
const CalendarBody = ({ diaryList }) => {
  const [date, setDate] = useState(new Date());
  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const headerYear = getYear(date);
  const headerMonth = getMonth(date);
  const headerDay = getDate(date);
  const weeksCountInMonth = getWeeksInMonth(date);
  const dayRange = Array(7).fill(1);
  const weekRange = Array(weeksCountInMonth).fill(1);
  const receiveDiaryList = () => {}; // 년,월을 기준으로 데이터를 받아올 예정
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
                let newYear = getYear(newDay);
                let newMonth = getMonth(newDay);

                let showingDay = headerMonth === newMonth ? `${formDate}` : "";
                let dayDiary = diaryList.find(
                  (item) => item.day === showingDay
                );
                // 이미지 삽입해야함!
                let todaySelector =
                  format(newDay, "yyyy-MM-d") ===
                  format(
                    new Date(headerYear, headerMonth, headerDay),
                    "yyyy-MM-d"
                  )
                    ? "sameDay"
                    : "";
                return (
                  <div>
                    <span>{showingDay}</span>
                  </div>
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
