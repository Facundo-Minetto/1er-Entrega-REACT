import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDLJa8jmzbjuDc0_CBzNIkBO6-v-ukSKY",
  authDomain: "react-js-minetto.firebaseapp.com",
  projectId: "react-js-minetto",
  storageBucket: "react-js-minetto.appspot.com",
  messagingSenderId: "841771090837",
  appId: "1:841771090837:web:16158a957eb87f93a06c9c",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
