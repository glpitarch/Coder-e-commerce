import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from 'firebase/app';
import '../src/customBootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import App from './App';

const firebaseConfig = {
  apiKey: "AIzaSyAPtEnqooIU_LuYmGaypQlIu9es-uK3U6o",
  authDomain: "jose-luis-joyeria.firebaseapp.com",
  projectId: "jose-luis-joyeria",
  storageBucket: "jose-luis-joyeria.appspot.com",
  messagingSenderId: "1047190260865",
  appId: "1:1047190260865:web:6eb208749924cbe1cc9180"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


