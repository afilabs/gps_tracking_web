import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
const config = {
   	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  	databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
};

const app = firebase.initializeApp(config);
export default app;