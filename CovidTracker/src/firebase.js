import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAOuvIs8kXCim7mBB2LiQjIa8CvbUcvEBk",
  authDomain: "covicare-80bfc.firebaseapp.com",
  projectId: "covicare-80bfc",
  storageBucket: "covicare-80bfc.appspot.com",
  messagingSenderId: "548814250970",
  appId: "1:548814250970:web:0ace119f4cda5861d696e3"
};

const firebaseApp = initializeApp(firebaseConfig);

// init services
export const db = getFirestore();

// collection ref
export const surveyRef = collection(db, 'CoviCare Survey');
