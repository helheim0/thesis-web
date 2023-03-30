import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoYd-3JxvR4Zzcrn29xWbi4Qk2qLeqz3I",
  authDomain: "thesis-web-version.firebaseapp.com",
  projectId: "thesis-web-version",
  storageBucket: "thesis-web-version.appspot.com",
  messagingSenderId: "611805782342",
  appId: "1:611805782342:web:dea4ca2e77b0cb9ed74547"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;