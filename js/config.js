import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCu-pVyxLiMTU5WcmBrIbG8yhBHu-QS34w",
    authDomain: "input-be7ab.firebaseapp.com",
    databaseURL: "https://input-be7ab-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "input-be7ab",
    storageBucket: "input-be7ab.firebasestorage.app",
    messagingSenderId: "858680331857",
    appId: "1:858680331857:web:9b57ef82ade8f04d29b270",
    measurementId: "G-RMKYHWT31C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const mahasiswaRef = ref(database, 'mahasiswa');

export { firebaseConfig, database, mahasiswaRef };
