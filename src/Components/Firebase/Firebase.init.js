// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS15W-QFu26m2DaXL7zVJN94EGmcoLDKE",
  authDomain: "fir-auth-5798e.firebaseapp.com",
  projectId: "fir-auth-5798e",
  storageBucket: "fir-auth-5798e.firebasestorage.app",
  messagingSenderId: "1018604115955",
  appId: "1:1018604115955:web:cbeadb5f05a98572532486"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth