import app from "./firebase.app"
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const signInUsingGoogle = () => auth.signInWithPopup(googleProvider);

export default auth;