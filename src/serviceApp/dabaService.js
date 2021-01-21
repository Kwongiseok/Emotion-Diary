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
      .set({});
  }
}
