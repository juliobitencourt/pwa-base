importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBzn5R-pwBBJleWoXGRoNyARZPWsnc_hdE",
  authDomain: "guia-da-carreira.firebaseapp.com",
  projectId: "guia-da-carreira",
  storageBucket: "guia-da-carreira.appspot.com",
  messagingSenderId: "593917866707",
  appId: "1:593917866707:web:899dff70c197fb6a7c1a26",
  measurementId: "G-207WBD3J4M"
});
  
firebase.messaging();