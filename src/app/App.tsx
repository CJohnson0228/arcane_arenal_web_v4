import { ThemeProvider } from "@emotion/react"
import styled from "@emotion/styled"
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from "react"
import { RouterProvider } from "react-router-dom"
import { auth } from '../config/firebaseConfig'
import { useAppDispatch } from "../hooks/useAppDispatch"
import { useAppSelector } from "../hooks/useAppSelector"
import { setDarkMode } from "../redux/slices/appSlice"
import { logout, setPrimaryArtisan, setUser } from "../redux/slices/userSlice"
import router from "../router"
import { darkTheme, lightTheme } from "../themes/themes"
import { StyleTypes } from "../themes/ThemeType"
import { getArtisanIndex } from "../utils/getArtisan"
import { getInitials } from "../utils/playerProfileFunctions"

const Main = styled.div({
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
}, ({ theme }: StyleTypes) => ({
  backgroundImage: theme.backgroundURL,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundColor: theme.colors.background.base,
  color: theme.colors.text,
}))

function App() {
  const darkMode = useAppSelector(state => state.app.darkMode)
  const dispatch = useAppDispatch()

  useEffect(() => {
    // set Theme based on Browser and system preferences
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)")
    dispatch(setDarkMode(prefersDark.matches))
    prefersDark.addEventListener("change", (e) => dispatch(setDarkMode(e.matches)))
    // set the users Primary Artisan
    dispatch(setPrimaryArtisan(getArtisanIndex()))
  }, [dispatch])

  useEffect(() => {
    // check firebase auth state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('User: ' + user.displayName + ' is logged in')
        if (user.displayName) {
          // login and update redux state if firebase auth user logged in
          dispatch(setUser({
            displayName: user.displayName,
            initials: getInitials(user.displayName),
            photoURL: user.photoURL,
            email: user.email,
            uid: user.uid
          }))
        }
      } else {
        // clears redux state if firebase auth user is logged out
        console.log('no user in auth state from firebase')
        dispatch(logout())
      }
    })
    // listener clean up
    return () => unsubscribe()
  })

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Main theme={darkMode ? darkTheme : lightTheme}>
        <RouterProvider router={router} />
      </Main>
    </ThemeProvider>
  )
}

export default App
