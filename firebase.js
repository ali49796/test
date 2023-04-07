import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAwXI1EkMczrrlsheIFI5IhH-_E4gI1dN8",
    authDomain: "project-9a993.firebaseapp.com",
    projectId: "project-9a993",
    storageBucket: "project-9a993.appspot.com",
    messagingSenderId: "545813786351",
    appId: "1:545813786351:web:d3f96d9b06f70288e3f51a"
  };

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const database = getFirestore();

export {app, database }
