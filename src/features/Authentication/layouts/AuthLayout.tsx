import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../../hooks/useAppSelector'
import type { StyleTypes } from '../../../themes/ThemeType'
import { artisans } from '../../../utils/getArtisan'

const Main = styled.div({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const AuthWindow = styled.div({
  width: '100vw',
  maxWidth: 1200,
  backdropFilter: 'blur(7px)',
  border: '1px solid',
  display: 'flex',
  borderRadius: '50px 0 50px 0',
}, ({ theme }: StyleTypes) => ({
  backgroundColor: theme.colors.background.glass,
  boxShadow: '5px 5px 7px 0 ' + theme.colors.shadow,
  borderColor: theme.colors.border.glass,
}))

const Logo = styled.img({
  position: 'absolute',
  bottom: 10,
  left: 10,
})

const FormContainer = styled.div({
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  padding: '10px 60px'
})

interface ArtisanProps extends StyleTypes {
  artisan: string
}

const ArtisanContainer = styled.div({
  position: 'relative',
  backgroundColor: '#121212',
  border: '1px solid',
  borderRadius: '0 0 50px 0',
}, ({ theme }: StyleTypes) => ({
  boxShadow: 'inset 0px 0px 50px 20px ' + theme.colors.primary[500] + '40',
  borderColor: theme.colors.primary[500] + '80'
}))

const Artisan = styled.div({
  borderRadius: '0 0 50px 0',
  width: 300,
  height: 400,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
  paddingBottom: 40,
}, ({ theme, artisan }: ArtisanProps) => ({
  color: theme.colors.common.grey[100],
  boxShadow: 'inset 0px 0px 50px 20px ' + theme.colors.common.grey[900],
  backgroundImage: 'url("images/artisans/' + artisan + '")',
  p: {
    fontFamily: theme.fontFamily.handwritingFont,
    fontSize: 24,
    backgroundColor: theme.colors.common.grey[800],
    padding: '0 10px',
    width: '100%',
    textAlign: 'center',
  }
}))

const ArtisanOverlay = styled.div({
  position: 'absolute',
  width: 300,
  height: 400,
  top: 0,
  left: 0,
  backgroundColor: '#12121200',
  borderRadius: '0px 0px 50px 0px',
  boxShadow: 'inset 0px 0px 30px 30px #12121240',
})

const AuthLayout = () => {
  const container = useRef(null)
  const navigate = useNavigate()
  const theme = useTheme()
  const tl = useRef(gsap.timeline())
  const submittl = useRef(gsap.timeline())
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const artisanIndex = useAppSelector((state) => state.user.primaryArtisanIndex)
  const artisanURL = artisans[artisanIndex]

  useGSAP(() => {
    tl.current = gsap
      .timeline({ delay: 0.2 })
      .from('.auth-window', {
        opacity: 0,
        duration: 0.3,
        ease: 'power1.inOut'
      })
      .from('.artisan-image', {
        opacity: 0,
        scale: 0.6,
        duration: 0.2,
        ease: 'power4.inOut'
      }, '>-0.3')
      .from('.auth-logo', {
        scale: 0.5,
        opacity: 0,
        ease: 'power1.inOut'
      }, '<')
      .from('.artisan-overlay', {
        backgroundColor: '#121212',
        boxShadow: 'inset 0px 0px 30px 120px #121212ff',
        duration: 0.6,
        ease: 'power4.inOut'
      }, '<+=0.1')
      .from('.artisan-text', {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        ease: 'power4.inOut'
      }, '>')
  })

  const SubmitAnimation = () => {
    submittl.current = gsap
      .timeline()
      .to('.artisan-text', {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        ease: 'power4.inOut'
      })
      .to('.artisan-overlay', {
        backgroundColor: '#121212',
        boxShadow: 'inset 0px 0px 30px 120px #121212ff',
        duration: 0.6,
        ease: 'power4.inOut'
      })
      .to('.artisan-image', {
        opacity: 0,
        scale: 0.6,
        duration: 0.2,
        ease: 'power4.inOut'
      })
      .to('.auth-window', {
        opacity: 0,
        duration: 0.6,
        ease: 'power1.inOut',
        onComplete: () => navigate('/dashboard')
      })
  }

  return (
    <Main ref={container} className='auth-layout'>
      <AuthWindow className='auth-window' theme={theme}>
        <FormContainer className='form-container'>
          <Outlet context={{
            SubmitAnimation, email, setEmail, password, setPassword, firstName, setFirstName, lastName, setLastName
          }} />
        </FormContainer>
        <ArtisanContainer className='artisan-container' theme={theme}>
          <Artisan className='artisan-image' artisan={artisanURL} theme={theme}>
            <p className='artisan-text'>We are the Artisans...</p>
            <p className='artisan-text'>The Arsenal Awaits...</p>
            <p className='artisan-text'>Your Credentials are Required...</p>
          </Artisan>
          <ArtisanOverlay className='artisan-overlay' />
        </ArtisanContainer>
        <Logo className='auth-logo' src='images/icon/android-chrome-192x192.png' width='48px' height='48px' />
      </AuthWindow>
    </Main>
  )
}

export default AuthLayout