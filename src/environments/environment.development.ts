export const environment = {

  production: false,
  baseURL: 'https://fastfoodapi-production.up.railway.app/api/v1'


};
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH0go-jW0cTGR5gDfjnIMpIfpG1dk-0tE",
  authDomain: "fastfood-e72f7.firebaseapp.com",
  projectId: "fastfood-e72f7",
  storageBucket: "fastfood-e72f7.appspot.com",
  messagingSenderId: "614651855826",
  appId: "1:614651855826:web:dce1fada37eb3ebe72be0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
