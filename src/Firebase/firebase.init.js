import {initializeApp} from "firebase/app";
import firebaseConfig from "./firebase.config.js";

const initializeFirebaseAuthentication = () => {
    initializeApp(firebaseConfig)
}

export default initializeFirebaseAuthentication