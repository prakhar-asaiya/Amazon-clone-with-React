import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAw-3whl9aF1qr1rSyk5CjqhlAngQCPqWM",
  authDomain: "clone-with-react-28928.firebaseapp.com",
  projectId: "clone-with-react-28928",
  storageBucket: "clone-with-react-28928.appspot.com",
  messagingSenderId: "1056186902872",
  appId: "1:1056186902872:web:beccdec2faa9b904271d2d",
  measurementId: "G-Q5NT3GYRBW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };