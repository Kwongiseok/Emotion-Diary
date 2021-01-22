import { firebaseDatabase } from "./firebaseApp";

class DatabaseService {
  writeDiaryData(userId, diaryInfo) {
    firebaseDatabase
      .ref(
        "users/" +
          userId +
          "/diary/" +
          `${
            diaryInfo["year"] + "/" + diaryInfo["month"] + "/" + diaryInfo["id"]
          }`
      )
      .set({
        id: diaryInfo["id"],
        title: diaryInfo["title"],
        year: diaryInfo["year"],
        month: diaryInfo["month"],
        day: diaryInfo["day"],
        weather: diaryInfo["weather"],
        diaryText: diaryInfo["diaryText"],
        emotion: diaryInfo["emotion"],
        imageURL: diaryInfo["imageURL"],
      });
  }
  readMonthDiary(uid, year, month) {
    return firebaseDatabase
      .ref("/users/" + uid + "/" + year + "/" + month)
      .once("value");
  }
  readDayDiary(uid, year, month, date) {
    return firebaseDatabase
      .ref("/users/" + uid + "/diary/" + year + "/" + month + "/" + date)
      .once("value");
  }
}

export default DatabaseService;
