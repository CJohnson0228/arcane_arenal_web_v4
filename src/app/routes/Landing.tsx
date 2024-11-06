import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import { useAppSelector } from "../../hooks/useAppSelector"
import { StyleTypes } from "../../themes/ThemeType"

const Main = styled.div({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
})

const LandingWindow = styled.div({
  backdropFilter: 'blur(7px)',
  border: '1px solid',
  borderRadius: '50px 0 50px 0',
  padding: '20px 50px',
}, ({ theme }: StyleTypes) => ({
  backgroundColor: theme.colors.background.glass,
  borderColor: theme.colors.border.glass,
  boxShadow: '2px 2px 3px 0 ' + theme.colors.shadow,
}))

const Logo = styled.img({
  position: 'absolute',
  top: 20,
  left: 20,
})

const Title = styled.div({
  fontSize: 48,
  textShadow: '2px 2px 2px #000000',
}, ({ theme }: StyleTypes) => ({
  fontFamily: theme.fontFamily.displayFont,
  color: theme.colors.primary[500],
}))

const SubTitle = styled.div({
  textAlign: 'right',
  marginRight: 20,
  marginTop: -15,
  fontSize: 16,
}, ({ theme }: StyleTypes) => ({
  color: theme.colors.common.grey[200],
}))

const LandingButton = styled.div({
  position: 'absolute',
  bottom: 20,
})

const Dev = styled.div({
  position: 'absolute',
  padding: '5px 50px 5px 30px',
  borderRadius: '20px 0 0 20px',
  bottom: 5,
  right: 0,
}, ({ theme }: StyleTypes) => ({
  color: theme.colors.common.black,
  backgroundColor: theme.colors.primary[500],
}))

const Landing = () => {
  const theme = useTheme()
  const navigate = useNavigate()
  const container = useRef(null)
  const tl = useRef(gsap.timeline())
  const begintl = useRef(gsap.timeline())
  const { contextSafe } = useGSAP({ scope: container })
  const user = useAppSelector((state) => state.user.user?.displayName)

  useGSAP(() => {
    tl.current = gsap
      .timeline()
      .from('.landing-logo', {
        x: -50,
        opacity: 0,
      })
      .from('.landing-window', {
        x: -300,
        rotateZ: -90,
        scale: 0.5,
        opacity: 0,
        duration: 0.8,
        ease: 'power1.inOut',
      })
      .from('.landing-title', { scale: 0, opacity: 0, duration: 0.4, ease: 'power1.inOut' }, '>')
      .from('.landing-subtitle', { scale: 0, opacity: 0, duration: 0.3, ease: 'power1.inOut' }, '>')
      .from('.landing-dev', { x: 350, duration: 0.4, ease: 'power4.inOut' }, '>')
      .from('.landing-button', { y: 60, duration: 0.4, ease: 'power4.inOut' }, '>')
  })

  const handleBegin = contextSafe(() => {
    begintl.current = gsap
      .timeline()
      .to('.landing-button', { y: 60, duration: 0.4, ease: 'power4.inOut' })
      .to('.landing-dev', { x: 350, duration: 0.4, ease: 'power4.inOut' }, '>')
      .to('.landing-logo', { x: -50, opacity: 0 }, '>')
      .to('.landing-subtitle', { scale: 0, opacity: 0, duration: 0.3, ease: 'power1.inOut' }, '>')
      .to('.landing-title', { scale: 0, opacity: 0, duration: 0.4, ease: 'power1.inOut' }, '>')
      .to('.landing-window', {
        x: -300,
        rotateZ: -90,
        scale: 0.5,
        opacity: 0,
        duration: 0.8,
        ease: 'power1.inOut',
        onComplete: () => navigate(user !== undefined ? '/dashboard' : '/login')
      })
  })

  return (
    <Main ref={container}>
      <Logo className='landing-logo' src='images/icon/android-chrome-192x192.png' width='96px' height='96px' />
      <LandingWindow className='landing-window' theme={theme}>
        <Title className='landing-title' theme={theme}>
          Arcane Arsenal
        </Title>
        <SubTitle className='landing-subtitle' theme={theme}>
          Character Creation Re-Imagined
        </SubTitle>
      </LandingWindow>
      <LandingButton className='landing-button' theme={theme}>
        <Button label='begin' size="md" onClick={handleBegin} />
      </LandingButton>
      <Dev className='landing-dev' theme={theme}>
        Developed by C.M.Johnson &copy; 2024
      </Dev>
    </Main>
  )
}

export default Landing