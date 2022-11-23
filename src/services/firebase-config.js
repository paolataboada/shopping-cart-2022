import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAk45xYFU_sHuA5pDS04zfK5a75ZCQ3z3c",
//   authDomain: "shopping-cart-2022-cda7e.firebaseapp.com",
//   projectId: "shopping-cart-2022-cda7e",
//   storageBucket: "shopping-cart-2022-cda7e.appspot.com",
//   messagingSenderId: "883345711749",
//   appId: "1:883345711749:web:5b16710706ea880866ffec"
// };
const firebaseConfig = {
  apiKey: "AIzaSyD5KyY3y-Qi967chwaIFKTitjWRnhMkkd4",
  authDomain: "burgerqueenclient.firebaseapp.com",
  projectId: "burgerqueenclient",
  storageBucket: "burgerqueenclient.appspot.com",
  messagingSenderId: "741581082091",
  appId: "1:741581082091:web:568b48557a9b4a61b2ddae"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);