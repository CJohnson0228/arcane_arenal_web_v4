import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Dispatch, SetStateAction, useRef } from "react"
import { useNavigate, useOutletContext } from "react-router-dom"
import Button from "../../../components/Button"
import Divider from "../../../components/Divider"
import TextInput from "../../../components/TextInput"
import { StyleTypes } from "../../../themes/ThemeType"
import useAuthentication from '../hooks/useAuthentication'


const Main = styled.div({
  width: '100%',
  padding: 10,
})

const Heading = styled.div({
  fontSize: 28,
  textTransform: 'uppercase',
  textAlign: 'center',
}, ({ theme }: StyleTypes) => ({
  color: theme.colors.primary[500],
}))

const FormContainer = styled.div({
  marginTop: 15,
  padding: '0 80px',
})

const SwitchContainer = styled.div({
  marginBottom: 10,
  fontSize: 14,
  textAlign: 'center',
}, ({ theme }: StyleTypes) => ({
  color: theme.colors.common.grey[300],
}))

const SwitchLink = styled.span({
  cursor: 'pointer',
}, ({ theme }: StyleTypes) => ({
  color: theme.colors.primary[500],
}))

const ButtonContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
})

interface ErrorType extends StyleTypes {
  errorShown: boolean
}
const ErrorContainer = styled.div({
  textAlign: 'center',
  height: 20,
  transition: 'opacity 0.4s',
}, ({ errorShown, theme }: ErrorType) => ({
  opacity: errorShown ? 1 : 0,
  backgroundColor: theme.colors.common.warning.main,
  color: theme.colors.common.black,
}))

interface LoadingProps extends StyleTypes {
  isLoading: boolean
}

const Loading = styled.div({
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'none',
  zIndex: 30,
  span: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
    height: 222,
    width: 400,
    fontSize: 60,
    textShadow: '2px 2px 3px #000000',
    backgroundImage: 'url("images/LoadingBG.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '50%',
    backgroundPosition: 'center',
  },
}, ({ isLoading, theme }: LoadingProps) => ({
  opacity: isLoading ? 1 : 0,
  span: {
    color: theme.colors.common.white,
  }
}))

interface LoginContext {
  SubmitAnimation: () => void
  email: string
  setEmail: Dispatch<SetStateAction<string | undefined>>
  password: string
  setPassword: Dispatch<SetStateAction<string | undefined>>
}

const Login = () => {
  const container = useRef(null)
  const theme = useTheme()
  const tl = useRef(gsap.timeline())
  const switchtl = useRef(gsap.timeline())
  const navigate = useNavigate()
  const { signInCall, isLoading, error } = useAuthentication()
  const { email, setEmail, password, setPassword, SubmitAnimation } = useOutletContext<LoginContext>()

  // entrance animation
  useGSAP(() => {
    tl.current = gsap
      .timeline()
      .from('.input-container', { scale: 0.3, opacity: 0, duration: 0.6, ease: 'power1.inOut' })
  })

  // switch login/register animation
  const handleSwitch = () => {
    switchtl.current = gsap
      .timeline()
      .to('.input-container', {
        opacity: 0,
        scale: 0.3,
        duration: 0.6,
        ease: 'power1.inOut',
        onComplete: () => navigate('/register')
      })
  }

  // submit animation
  const handleSubmit = () => {
    signInCall(email, password, () => {
      switchtl.current = gsap
        .timeline()
        .to('.input-container', {
          opacity: 0,
          scale: 0.3,
          duration: 0.6,
          ease: 'power1.inOut',
          onComplete: SubmitAnimation
        })
    })
  }

  return (
    <Main ref={container} className="input-container">
      <Loading className="isLoading" isLoading={isLoading} theme={theme}><span>Loading</span></Loading>
      <Heading className='heading' theme={theme}>Login</Heading>
      <Divider />
      <FormContainer className='form-container'>
        <TextInput
          type='email'
          label='email'
          placeholder='JohnDoe@email.com'
          value={email}
          onValueChange={setEmail} />
        <TextInput
          type='password'
          label='password'
          placeholder='AaBbCc123!'
          value={password}
          onValueChange={setPassword} />
      </FormContainer>
      <SwitchContainer theme={theme}>
        Don't have an account? <SwitchLink onClick={handleSwitch} theme={theme}>Register Here!</SwitchLink>
      </SwitchContainer>
      <ErrorContainer theme={theme} errorShown={error === undefined ? false : true}>{error}</ErrorContainer>
      <Divider />
      <ButtonContainer className='submit-button'>
        <Button
          label='Login'
          onClick={handleSubmit}
        />
      </ButtonContainer>
    </Main>
  )
}

export default Login