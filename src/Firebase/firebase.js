import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyACz3E1ppiZOcjCUcwJ6Aefp_5jiChSztY",
    authDomain: "e-clone-7b963.firebaseapp.com",
    projectId: "e-clone-7b963",
    storageBucket: "e-clone-7b963.appspot.com",
    messagingSenderId: "641070441178",
    appId: "1:641070441178:web:504ae0267ec07a3eaabbe3",
    measurementId: "G-JSKDS275R4"
});
const auth = firebase.auth();

export {auth};