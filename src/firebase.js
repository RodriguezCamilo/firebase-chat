import firebase from "firebase/compat/app"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyByUZ4EiPcT6oU3RXlM4qu5JArNDgERmxU",
    authDomain: "fir-chat-65861.firebaseapp.com",
    projectId: "fir-chat-65861",
    storageBucket: "fir-chat-65861.appspot.com",
    messagingSenderId: "487671600448",
    appId: "1:487671600448:web:ac24b354c8e01126cc56a5"
})

const db = firebase.firestore()

const auth = firebase.auth()

export {db, auth}