import * as firebase from "firebase";

//put your own firebase app here
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

const goalRef = firebase.database().ref("goals");

const completeGoalRef = firebase.database().ref("completeGoals");
