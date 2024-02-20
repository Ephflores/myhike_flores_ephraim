//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyCvjUPhM_3YfvLHXnlnI-Pw-yQ0EBtQCeg",
    authDomain: "comp1800-demo-1c76e.firebaseapp.com",
    projectId: "comp1800-demo-1c76e",
    storageBucket: "comp1800-demo-1c76e.appspot.com",
    messagingSenderId: "511056530427",
    appId: "1:511056530427:web:f3e68adced2cdb502a995e",
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
