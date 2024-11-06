import { FirebaseError } from 'firebase/app'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../../../config/firebaseConfig'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { setAuthState } from '../../../redux/slices/appSlice'
import { clearCharacters, logout, setUser } from '../../../redux/slices/userSlice'
import { firebaseErrorFormater } from '../../../utils/firebaseErrorFormat'
import { getInitials } from '../../../utils/playerProfileFunctions'


export default function useAuthentication() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string>()

  const signInCall = async (
    email: string,
    password: string,
    animation: () => void
  ) => {
    setIsLoading(true)
    setError(undefined)
    if (email === '' || email === undefined) {
      setError('email is required')
      setIsLoading(false)
    } else if (password === '' || password === undefined) {
      setError('password is required')
      setIsLoading(false)
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
          if (error instanceof FirebaseError) {
            setError(firebaseErrorFormater(error.code))
          }
        })
        .then(async (userCredential) => {
          if (userCredential) {
            const user = userCredential.user
            if (user.displayName) {
              dispatch(setUser({
                displayName: user.displayName,
                initials: getInitials(user.displayName),
                photoURL: user.photoURL,
                email: user.email,
                uid: user.uid
              }))
            }
            dispatch(setAuthState(true))
            animation()
          }
        })
        .then(() => setIsLoading(false))
    }
  }

  const signUpCall = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    animation: () => void
  ) => {
    setIsLoading(true)
    setError(undefined)
    if (firstName === '' || firstName === undefined) {
      setError('Please enter a First Name')
      setIsLoading(false)
    } else if (lastName === '' || lastName === undefined) {
      setError('Please enter a Last Name')
      setIsLoading(false)
    } else if (password === '' || password === undefined) {
      setError('Password is required')
      setIsLoading(false)
    } else if (email === '' || email === undefined) {
      setError('Email is required')
      setIsLoading(false)
    } else {
      await createUserWithEmailAndPassword(auth, email, password)
        .catch((error) => {
          if (error instanceof FirebaseError) {
            console.log(error.code)
            setError(firebaseErrorFormater(error.code))
          }
        })
        .then((userCredential) => {
          if (userCredential) {
            const user = userCredential.user
            const displayName = firstName + ' ' + lastName
            if (auth.currentUser) {
              updateProfile(auth.currentUser, {
                displayName: displayName
              })
                .then(() => {
                  setDoc(doc(db, 'users', user.uid), {
                    displayName: displayName,
                    email: email,
                    uid: user.uid,
                    emailVerified: user.emailVerified,
                    photoUrl: user.photoURL,
                  })
                  console.log('User created: profile Updated')
                  dispatch(setUser({
                    displayName: displayName,
                    initials: getInitials(displayName),
                    photoURL: user.photoURL,
                    email: user.email,
                    uid: user.uid
                  }))
                  dispatch(setAuthState(true))
                  animation()
                })
            }
          }
        })
        .then(() => setIsLoading(false))
    }
  }

  const signOutCall = async () => {
    setIsLoading(true)
    try {
      await signOut(auth)
      dispatch(logout())
      dispatch(setAuthState(false))
      dispatch(clearCharacters())
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
      navigate('/')
    }
  }

  return { error, setError, isLoading, signInCall, signOutCall, signUpCall }
}