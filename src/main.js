import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'


import mitt from 'mitt';
  // Import the functions you need from the SDKs you need
  
  // somecomponent.js
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";  // Initialize Firebase

  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration

  const firebaseConfig = {

    apiKey: "AIzaSyD1wdglbT6plqfHjUbvg_cuxgJbodWM7X4",
    authDomain: "portfolio-fb0f2.firebaseapp.com",
    projectId: "portfolio-fb0f2",
    storageBucket: "portfolio-fb0f2.appspot.com",
    messagingSenderId: "359610302999",
    appId: "1:359610302999:web:71411bec87f1c63583d252"
  };


  // Initialize Firebase

  const appFirebase = initializeApp(firebaseConfig);


  const app = createApp(App)
  
  
  export const emitter = mitt();
  app.config.globalProperties.emitter = emitter;
  
  
  
  app.use(router)
  
  app.mount('#app')