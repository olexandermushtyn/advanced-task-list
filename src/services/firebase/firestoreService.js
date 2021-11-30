import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  updateDoc,
  serverTimestamp,
  query,
  getDoc,
  getDocs,
  orderBy,
  limit,
  where,
  deleteDoc,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBu0iJfJgymYR20tSR0ffX_L784xnJHqwY',
  authDomain: 'todo-list-f1ee8.firebaseapp.com',
  projectId: 'todo-list-f1ee8',
  storageBucket: 'todo-list-f1ee8.appspot.com',
  messagingSenderId: '262012259881',
  appId: '1:262012259881:web:c5bbb17dfe5774d3d8d638',
}

// Initialize Firebase
initializeApp(firebaseConfig)

const db = getFirestore()

const createDocument = async (collectionPath, id, documentData) => {
  const ref = doc(db, collectionPath, id)
  const result = await setDoc(ref, documentData)
  return result
}

const generateId = path => doc(collection(db, path)).id

const updateDocument = async (collectionPath, id, documentData) => {
  const ref = doc(db, collectionPath, id)
  const result = await updateDoc(ref, documentData)
  return result
}

const getDocument = async (collectionPath, id) => {
  const ref = doc(db, collectionPath, id)
  const docSnapshot = await getDoc(ref)
  return docSnapshot.data()
}

const queryDocuments = async (collectionPath, queries, orderByRule, limitRule) => {
  const ref = collection(db, collectionPath)
  const queriesExtended = queries && queries.map(q => where(...q))
  orderByRule && queriesExtended.push(orderBy(...orderByRule))
  limitRule && queriesExtended.push(limit(limitRule))
  const q = queriesExtended ? query(ref, ...queriesExtended) : query(ref)
  const querySnapshot = await getDocs(q)
  let result = []
  querySnapshot.forEach(doc => {
    result.push(doc.data())
  })
  return result
}

const getTimestamp = () => serverTimestamp()

const getId = collectionPath => {
  const ref = doc(collection(db, collectionPath))
  return ref.id
}

const deleteDocument = async (collectionPath, id) => {
  const result = await deleteDoc(doc(db, collectionPath, id))
  return result
}

const firestoreService = {
  createDocument,
  generateId,
  updateDocument,
  getDocument,
  queryDocuments,
  deleteDocument,
  getTimestamp,
  getId,
}

export default firestoreService
