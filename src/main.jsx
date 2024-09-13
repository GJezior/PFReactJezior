import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrG-SZ3hE8bAhaVfeR2TF0B7w1jYbsGQg",
  authDomain: "overdrive-react.firebaseapp.com",
  projectId: "overdrive-react",
  storageBucket: "overdrive-react.appspot.com",
  messagingSenderId: "1017959059756",
  appId: "1:1017959059756:web:6a9b793ef2d39a5a885c89"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
