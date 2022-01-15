import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDnWNOJMxxtgam7QclQ7GubI19G9RCdvZA",
    authDomain: "fireblogsh-dee3c.firebaseapp.com",
    projectId: "fireblogsh-dee3c",
    storageBucket: "fireblogsh-dee3c.appspot.com",
    messagingSenderId: "208585306079",
    appId: "1:208585306079:web:44c30c45135160bd23de6a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig); // eslint-disable-line no-unused-vars
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { timeStamp };
export default firebase.firestore();
