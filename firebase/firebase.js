import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDvcAuBZR-3AVaH4hdJlU_p_L8cWgIbA0o",
    authDomain: "universitypapersfree.firebaseapp.com",
    databaseURL: "https://universitypapersfree-default-rtdb.firebaseio.com",
    projectId: "universitypapersfree",
    storageBucket: "universitypapersfree.appspot.com",
    messagingSenderId: "56567360102",
    appId: "1:56567360102:web:e156e30fe0b21dcd7e1ba7",
    measurementId: "G-2F82CY0YH7",
  };
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;

