import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'
var config={
    apiKey: "AIzaSyDKrTzOxq7Hxpf_bou65KNvfBNrVpZFWvk",
    authDomain: "projectmanagement-3a506.firebaseapp.com",
    projectId: "projectmanagement-3a506",
    storageBucket: "projectmanagement-3a506.appspot.com",
    messagingSenderId: "127709354953",
    appId: "1:127709354953:web:9952bde796a8d971e86618",
    measurementId: "G-J1XWG5CY0G"
};
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots:true})

export default  firebase;