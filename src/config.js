import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9CmTd8SZeiE7OPYFcDSw9KZXoH1NH_yE",
  authDomain: "pomodoro-b32cc.firebaseapp.com",
  projectId: "pomodoro-b32cc",
  storageBucket: "pomodoro-b32cc.appspot.com",
  messagingSenderId: "424053785601",
  appId: "1:424053785601:web:92d603015fbf1cd3642c00",
  measurementId: "G-M5M4VVY06X"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export{auth,provider};