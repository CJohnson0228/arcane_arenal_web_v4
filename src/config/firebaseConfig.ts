// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// main config

const firebaseConfig = {
  apiKey: 'AIzaSyBzoqos8AZ-GgjdFoi1P0SH6I3WYg8xPAE',
  authDomain: 'dnd5eapp-53781.firebaseapp.com',
  projectId: 'dnd5eapp-53781',
  storageBucket: 'dnd5eapp-53781.appspot.com',
  messagingSenderId: '447218416158',
  appId: '1:447218416158:web:ab41fabc6db0b4930acc0f',
  measurementId: 'G-ZE989YPMB9',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const auth = getAuth(app)
export const db = getFirestore(app)
