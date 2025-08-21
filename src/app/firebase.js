import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
 apiKey: "AIzaSyCFTiTetCCfkpeiUgFjKttcfKUqVEQaH4k",
  authDomain: "agenda-new-574f4.firebaseapp.com",
  projectId: "agenda-new-574f4",
  storageBucket: "agenda-new-574f4.appspot.com", 
  messagingSenderId: "308258186068",
  appId: "1:308258186068:web:cd31da93b404a5849a5ec1",
  measurementId: "G-SD21QPHS1L"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };