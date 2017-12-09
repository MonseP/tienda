
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyC1fUdJQshJeopZ6_BQFArwxE5DbXeZdGk",
    authDomain: "e-commerce-b0a76.firebaseapp.com",
    databaseURL: "https://e-commerce-b0a76.firebaseio.com",
    projectId: "e-commerce-b0a76",
    storageBucket: "e-commerce-b0a76.appspot.com",
    messagingSenderId: "762521478850"
};
firebase.initializeApp(config);

export default firebase;