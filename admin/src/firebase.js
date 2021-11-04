import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey : "AIzaSyCFT8VhxNUI9uDTB-2xUuaiWN4bsWQ5sPY" , 
    authDomain : "netflix-e5d59.firebaseapp.com" , 
    projectId : "netflix-e5d59" , 
    storageBucket : "netflix-e5d59.appspot.com" , 
    messagingSenderId : "387563984748" , 
    appId : "1: 387563984748: web: d8f74e862c84ea48cc4549" , 
    measurementId : "G-VG0VDQ3PME" 
}
const firebaseApp = initializeApp(firebaseConfig)
const storage =  getStorage(firebaseApp);
export default  storage;