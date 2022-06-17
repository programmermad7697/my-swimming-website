import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAypPu898_FtVzCzBn54es7MAkBXno8CCQ',
  authDomain: 'swimming-madness-b62a3.firebaseapp.com',
  projectId: 'swimming-madness-b62a3',
  storageBucket: 'swimming-madness-b62a3.appspot.com',
  messagingSenderId: '58367831948',
  appId: '1:58367831948:web:0f5d35e7997e28190d70a9',
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebase)
  : firebase.app()

const db = app.firestore()

export { db }
