import firebase from "firebase/app";
import "firebase/messaging";

const initializedFirebaseApp = firebase.initializeApp({
    // Project Settings => Add Firebase to your web app
    apiKey: "AIzaSyD3wwE9QcuQXFeuZsrGmuLxvKMNQ_IGOxI",
    authDomain: "absolute-router-287114.firebaseapp.com",
    databaseURL: "https://absolute-router-287114.firebaseio.com",
    projectId: "absolute-router-287114",
    storageBucket: "absolute-router-287114.appspot.com",
    messagingSenderId: "1028882711156",
    appId: "1:1028882711156:web:b85d7efece70fb31c40721",
    measurementId: "G-Q0ESKYSJ4C"
});
const messaging = initializedFirebaseApp.messaging();
export { messaging };