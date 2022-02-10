import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCkQHugmGo3YVl6BEWGIOMKahdVjFg8sNs',
  authDomain: 'ad2-crwn-db.firebaseapp.com',
  projectId: 'ad2-crwn-db',
  storageBucket: 'ad2-crwn-db.appspot.com',
  messagingSenderId: '485076528960',
  appId: '1:485076528960:web:58a83314c0dce5bab1d4a5',
  measurementId: 'G-DBJP3EEHNM',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const signOutUser = async () => {
  await signOut(auth);
};
