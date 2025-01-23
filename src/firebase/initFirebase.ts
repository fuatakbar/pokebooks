import { initializeApp, getApps, getApp } from 'firebase/app';  
import { getAuth } from 'firebase/auth';  
import { getFirestore } from 'firebase/firestore';  
  
const firebaseConfig = {
  apiKey: "AIzaSyAtB_fHmTGH1tTpDDymjMdELDUA7buyqeM",
  authDomain: "pokeapi-pasartrainer.firebaseapp.com",
  projectId: "pokeapi-pasartrainer",
  storageBucket: "pokeapi-pasartrainer.firebasestorage.app",
  messagingSenderId: "701130578000",
  appId: "1:701130578000:web:5c00d2a36803f77f809955"
};
  
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();  
const auth = getAuth(app);  
const db = getFirestore(app);  
  
export { auth, db };  
