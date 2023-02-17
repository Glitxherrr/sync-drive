import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAKftctJBdtgplUpYrqwoNmdp5dhMiNXjg",
  authDomain: "sync-drive-by-noufil-sheikh.firebaseapp.com",
  projectId: "sync-drive-by-noufil-sheikh",
  storageBucket: "sync-drive-by-noufil-sheikh.appspot.com",
  messagingSenderId: "22978909872",
  appId: "1:22978909872:web:9aeaa58ee0d514137b4d75",
  measurementId: "G-MYR9388E18"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db, storage }