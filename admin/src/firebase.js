import * as firebase from "firebase/app";
import * as storage from  'firebase/storage';
const firebaseConfig = {
    apiKey : "AIzaSyCFT8VhxNUI9uDTB-2xUuaiWN4bsWQ5sPY" , 
    authDomain : "netflix-e5d59.firebaseapp.com" , 
    projectId : "netflix-e5d59" , 
    storageBucket : "netflix-e5d59.appspot.com" , 
    messagingSenderId : "387563984748" , 
    appId : "1: 387563984748: web: d8f74e862c84ea48cc4549" , 
    measurementId : "G-VG0VDQ3PME" 
}
firebase.initializeApp(firebaseConfig)


export default storage;