import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import { Outlet } from "react-router-dom"
import AppBar from "../components/AppBar"
import AppMenu from "../components/AppSideMenu"
import UserMenu from "../components/UserSideMenu"

const Main = styled.div({
  width: '100vw',
  height: '100vh',
  overflowX: 'hidden',
})


const MainLayout = () => {
  const theme = useTheme()

  return (
    <Main>
      <AppBar />
      <AppMenu />
      <UserMenu />
      <Outlet />
    </Main>
  )
}

export default MainLayout