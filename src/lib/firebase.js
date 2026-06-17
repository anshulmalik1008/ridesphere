import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
apiKey: "AIzaSyCLHZ-8jD1rzL4C-dmrKc8yAQpDUg1Xmnk",
authDomain: "ridesphere-1300e.firebaseapp.com",
 projectId: "ridesphere-1300e",
storageBucket: "ridesphere-1300e.firebasestorage.app",
messagingSenderId: "692969913071",
appId: "1:692969913071:web:bc281f5875514c98ff91a",
measurementId: "G-NHK1EQM3L8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
