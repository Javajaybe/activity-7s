import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwnJUEn9p84Uvbmr9wzNebyRXEUwxEurE",
  authDomain: "activity-7s.firebaseapp.com",
  projectId: "activity-7s",
  storageBucket: "activity-7s.appspot.com",
  messagingSenderId: "701056112343",
  appId: "1:701056112343:web:0a146e51a72bcb9df7c292",
  measurementId: "G-3GBTEGXGWK"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
