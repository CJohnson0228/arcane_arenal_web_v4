import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"

const Divider = () => {
  const theme = useTheme()

  const Wrapper = styled.div({
    marginTop: 10,
    marginBottom: 10,
  })
  const Upper = styled.div({
    height: 1,
    borderBottom: '1px solid',
    borderColor: theme.colors.divider,
    marginBottom: 2,
  })
  const Lower = styled.div({
    height: 1,
    borderTop: '1px solid',
    borderColor: theme.colors.divider,
  })

  return (
    <Wrapper>
      <Upper />
      <Lower />
    </Wrapper>
  )
}

export default Divider
