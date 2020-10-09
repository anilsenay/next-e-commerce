import firebase from "firebase";

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID + ".firebaseapp.com",
  databaseURL:
    "https://" +
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID +
    ".firebaseio.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID + ".appspot.com",
  messagingSenderId: "327750059870",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

const app = firebase.app();
const auth = firebase.auth();
const db = firebase.firestore();

export { firebase, auth, db };
console.log(app.name ? "Firebase Mode Activated!" : "Firebase not working :(");
