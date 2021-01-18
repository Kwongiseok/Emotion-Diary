import { firebaseAuth, googleProvider } from "./firebaseApp";

class AuthService {
  login() {
    const authProvide = googleProvider;
    return firebaseAuth.signInWithPopup(authProvide);
  }
  signUp(email, password) {
    return firebaseAuth.createUserWithEmailAndPassword(email, password);
  }
  signIn(email, password) {
    return firebaseAuth.signInWithEmailAndPassword(email, password);
  }
  updateProfile(nickName) {
    const user = firebaseAuth.currentUser;
    user
      .updateProfile({
        displayName: nickName,
      })
      .then(function () {
        console.log("userName 업데이트 성공");
      })
      .catch(function (error) {
        console.error("userName 업데이트 실패 : ", error);
      });
  }
}

export default AuthService;
