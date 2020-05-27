import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCeWIdnSV3-GgneVfUG42PfWgrhgiwbRso",
    authDomain: "web-dev-practical-176d0.firebaseapp.com",
    databaseURL: "https://web-dev-practical-176d0.firebaseio.com",
    projectId: "web-dev-practical-176d0",
    storageBucket: "web-dev-practical-176d0.appspot.com",
    messagingSenderId: "58879747200",
    appId: "1:58879747200:web:5c0091eacc8d292d1f3265"
});
export default firebaseApp