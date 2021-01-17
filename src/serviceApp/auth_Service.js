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
}

export default AuthService;
