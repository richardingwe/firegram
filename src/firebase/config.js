// Your web app's Firebase configuration
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyAO81jC92Z58PMnb6rZ4dx8i1y_B7BLw1w",
    authDomain: "rui-firegram.firebaseapp.com",
    projectId: "rui-firegram",
    storageBucket: "rui-firegram.appspot.com",
    messagingSenderId: "19557505813",
    appId: "1:19557505813:web:b7b1151711a7a1f3fe271c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };