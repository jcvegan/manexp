import app from "./firebase.app";
import { getFirestore } from "firebase/firestore";

const firestore = getFirestore(app);

export default firestore;