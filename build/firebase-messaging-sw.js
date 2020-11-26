// 
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3wwE9QcuQXFeuZsrGmuLxvKMNQ_IGOxI",
    authDomain: "absolute-router-287114.firebaseapp.com",
    databaseURL: "https://absolute-router-287114.firebaseio.com",
    projectId: "absolute-router-287114",
    storageBucket: "absolute-router-287114.appspot.com",
    messagingSenderId: "1028882711156",
    appId: "1:1028882711156:web:b85d7efece70fb31c40721",
    measurementId: "G-Q0ESKYSJ4C"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
    console.log(payload, "Payload in service worker")
     const promiseChain = clients
          .matchAll({
               type: "window",
               includeUncontrolled: true,
          })
          .then((windowClients) => {
               for (let i = 0; i < windowClients.length; i++) {
                    const windowClient = windowClients[i];
                    windowClient.postMessage(payload);
               }
          })
          .then(() => {
               return registration.showNotification("my notification title");
          });
     return promiseChain;
});
self.addEventListener("notificationclick", function(event) {
     console.log(event);
});