// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBu0iJfJgymYR20tSR0ffX_L784xnJHqwY',
  authDomain: 'todo-list-f1ee8.firebaseapp.com',
  projectId: 'todo-list-f1ee8',
  storageBucket: 'todo-list-f1ee8.appspot.com',
  messagingSenderId: '262012259881',
  appId: '1:262012259881:web:c5bbb17dfe5774d3d8d638',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default app
