import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCrIbN2M3c88SvYY4-26G9repa6bm41POE",
    authDomain: "myfirstfirebaseproject-50b79.firebaseapp.com",
    projectId: "myfirstfirebaseproject-50b79",
    storageBucket: "myfirstfirebaseproject-50b79.appspot.com",
    messagingSenderId: "419179387746",
    appId: "1:419179387746:web:caf1b76ad4c048ab026a3b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const signUp = async (email, pass) => await createUserWithEmailAndPassword(auth, email, pass);
export const logIn = async (email, pass) => await signInWithEmailAndPassword(auth, email, pass);
export const logOut = async () => await signOut(auth);