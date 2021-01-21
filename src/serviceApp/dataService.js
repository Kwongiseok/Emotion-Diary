import { firebaseDatabase } from "./firebaseApp";

class DatabaseService {
  writeDiaryData(userId, diaryInfo) {
    firebaseDatabase
      .ref(
        "users/" +
          userId +
          "/diary/" +
          `${
            diaryInfo["year"] +
            "/" +
            diaryInfo["month"] +
            "/" +
            diaryInfo["day"]
          }`
      )
      .set({
        id: diaryInfo["id"],
        title: diaryInfo["title"],
        date: diaryInfo["date"],
        year: diaryInfo["year"],
        month: diaryInfo["month"],
        day: diaryInfo["day"],
        weather: diaryInfo["weather"],
        diaryText: diaryInfo["diaryText"],
        emotion: diaryInfo["emotion"],
        imageURL: diaryInfo["imageURL"],
      });
  }
}

export default DatabaseService;
