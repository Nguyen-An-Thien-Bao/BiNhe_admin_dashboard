// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDuWyuEWf8ciwXWpjTvtc5eVG4lMbWUPG4',
    authDomain: 'fir-tshirt-database.firebaseapp.com',
    databaseURL: 'https://fir-tshirt-database-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'fir-tshirt-database',
    storageBucket: 'fir-tshirt-database.appspot.com',
    messagingSenderId: '150412995838',
    appId: '1:150412995838:web:378266aa517c22fbb9c9af',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
