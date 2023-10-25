<script setup lang="ts">
import { ref } from "vue";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

defineProps<{ msg: string }>()

const token = ref('');

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzn5R-pwBBJleWoXGRoNyARZPWsnc_hdE",
  authDomain: "guia-da-carreira.firebaseapp.com",
  projectId: "guia-da-carreira",
  storageBucket: "guia-da-carreira.appspot.com",
  messagingSenderId: "593917866707",
  appId: "1:593917866707:web:899dff70c197fb6a7c1a26",
  measurementId: "G-207WBD3J4M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
navigator.serviceWorker.register('/pwa-base/firebase-messaging-sw.js').then(registration => {
  getToken(messaging, {
      vapidKey: "BGQV9f_acJiZ32u7coDXbuUhpIRvYDDWE4hKcWR5-0q_A2POShUwDwiXfrbGRgckZw7YHqqaOLcMqcPOiU7akMY",
      serviceWorkerRegistration: registration
    }
  )
    .then((currentToken) => {
      if (currentToken) {
        // Send the token to your server and update the UI if necessary
        console.log('Notification permission already granted.');
        token.value = currentToken;
      } else {
        console.log('No registration token available. Request permission to generate one.');
        return Notification.requestPermission().then((permission) => {
          if (permission === 'granted') {
            console.log('Notification permission granted.');
            token.value = currentToken;
          } else {
            console.log('Unable to get permission to notify.');
          }
        });
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // ...
    });
});
</script>

<template>
  <h1>{{ msg }}</h1>

  <textarea name="" id="" cols="30" rows="10" v-model="token"></textarea>

  <div class="card">
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
