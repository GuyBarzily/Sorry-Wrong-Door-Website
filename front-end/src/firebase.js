import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyD81xmhiW_3mIGbMlzvEmKivXA-9QHNXck",
  authDomain: "sorry-website.firebaseapp.com",
  projectId: "sorry-website",
  storageBucket: "sorry-website.appspot.com",
  messagingSenderId: "188297443771",
  appId: "1:188297443771:web:06386aeb9dc767399cac9e",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
