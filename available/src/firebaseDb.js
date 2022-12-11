import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDl0Pmj2YViWdObL-jSgOuI0I-wRatDbs8",
    authDomain: "available-e8f52.firebaseapp.com",
    projectId: "available-e8f52",
    storageBucket: "available-e8f52.appspot.com",
    messagingSenderId: "881507614616",
    appId: "1:881507614616:web:961aa139997fee7f59b5ed"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();