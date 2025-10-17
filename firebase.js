
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSjVL17-9F3yr-JHZe_9ZBUjGzJWV08JA",
  authDomain: "blog-27eeb.firebaseapp.com",
  projectId: "blog-27eeb",
  storageBucket: "blog-27eeb.firebasestorage.app",
  messagingSenderId: "694248473617",
  appId: "1:694248473617:web:cfdc92bfcaecafc51bddb0"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
