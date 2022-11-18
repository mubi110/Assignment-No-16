import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACCyuKXWljFh8tgvzb1jsqmp-M50Ek1bo",
  authDomain: "todo-app-477fd.firebaseapp.com",
  projectId: "todo-app-477fd",
  storageBucket: "todo-app-477fd.appspot.com",
  messagingSenderId: "416846068718",
  appId: "1:416846068718:web:ec2b862637513f02bbecff",
  measurementId: "G-DP3BQW6QG3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();


var username = document.getElementById("uname");
var contact = document.getElementById("contact");
var email = document.getElementById("email");
var password = document.getElementById("password");

var userDetail;
var userID;


window.signup = function () {
  userDetail = {
    username: username.value,
    contact: contact.value,
    email: email.value,
    password: password.value
  }
  console.log(userDetail);
  createUserWithEmailAndPassword(auth, userDetail.email, userDetail.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

}