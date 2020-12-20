import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCKSBDqi_iRU5KhWg-RBnR0E_4QrZOuAmA",
    authDomain: "facebook-clone-cfea9.firebaseapp.com",
    projectId: "facebook-clone-cfea9",
    storageBucket: "facebook-clone-cfea9.appspot.com",
    messagingSenderId: "391427807811",
    appId: "1:391427807811:web:50b7fe174b8adc80d092f6",
    measurementId: "G-847RF9RQTZ"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider }
export default db;