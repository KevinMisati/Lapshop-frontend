import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBq88qbYMCk1yph-IwW2-StqZkBnE3dXsk",
  authDomain: "lapshop-eb5db.firebaseapp.com",
  projectId: "lapshop-eb5db",
  storageBucket: "lapshop-eb5db.appspot.com",
  messagingSenderId: "712591381567",
  appId: "1:712591381567:web:bfb616d116356d12e7148a"
};

const app = initializeApp(firebaseConfig);

export default app