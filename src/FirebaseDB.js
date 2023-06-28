import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVTYMrsELchfTi2PkEYhVMonW-EK0gRHA",
  authDomain: "vuecurd.firebaseapp.com",
  databaseURL: "https://vuecurd-default-rtdb.firebaseio.com",
  projectId: "vuecurd",
  storageBucket: "vuecurd.appspot.com",
  messagingSenderId: "345472940153",
  appId: "1:345472940153:web:9f37dbd653e2834057bca8",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export default db;
