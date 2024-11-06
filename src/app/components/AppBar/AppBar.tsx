import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"

const Main = styled.div({
  width: '100vw',
  position: 'fixed',
  top: 0,
})

const Container = styled.div({
  width: '100%',
  maxWidth: 1500,
  margin: 'auto',
})

const AppBar = () => {
  const theme = useTheme()
  return (
    <Main>
      <Container>
        App Bar
      </Container>
    </Main>
  )
}

export default AppBar