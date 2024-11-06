import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ComponentProps, ReactNode, useEffect, useRef, useState } from "react"
import { StyleTypes, ThemeType } from "../../themes/ThemeType"

interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'filled' | 'outline' | 'text'
  color?: 'primary' | 'secondary' | 'warning' | 'caution' | 'success' | 'info'
  size?: 'sm' | 'md' | 'lg'
  startIcon?: ReactNode
  endIcon?: ReactNode
  label: string
  onClick: () => void
}

interface ButtonStyleProps {
  theme: ThemeType
  buttonColor: string,
  buttonPadding: string,
  variant: 'filled' | 'outline' | 'text'
}

const Wrapper = styled.div({
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
})

const Ripple = styled.div({
  position: 'absolute',
  content: '""',
  borderRadius: '50%',
  top: '50%',
  left: '50%',
  width: 0,
  height: 0,
  opacity: 1,
}, ({ theme }: StyleTypes) => ({
  backgroundColor: theme.colors.ripple,
}))

interface HoverStyleProps {
  buttonColor: string
}

const Hover = styled.div({
  position: 'absolute',
  top: 0,
  left: '-10%',
  height: '100%',
  width: '120%',
  opacity: 0,
}, ({ buttonColor }: HoverStyleProps) => ({
  boxShadow: 'inset 0 0 4px 4px ' + buttonColor + '80',
}))

const Main = styled.div({
  borderTop: '1px solid',
  borderBottom: '1px solid',
  textTransform: 'uppercase',
}, ({
  theme,
  buttonColor,
  buttonPadding,
  variant,
}: ButtonStyleProps) => ({
  padding: buttonPadding,
  borderColor: variant === 'text' ? '#00000000' : buttonColor,
  backgroundColor: variant === 'filled' ? buttonColor : '#00000000',
  color: variant === 'filled' ? theme.colors.common.black : buttonColor,
}))

const Button = ({
  variant = 'outline',
  color = 'primary',
  size = 'md',
  label,
  startIcon,
  endIcon,
  onClick
}: ButtonProps) => {
  const theme = useTheme()
  const container = useRef(null)
  const rippleTimeline = useRef(gsap.timeline())
  const hoverTimeline = useRef(gsap.timeline())
  const leaveTimeline = useRef(gsap.timeline())
  const { contextSafe } = useGSAP({ scope: container })
  const [buttonColor, setButtonColor] = useState<string>(theme.colors.primary[500])
  const [buttonPadding, setButtonPadding] = useState<string>('4px 28px')

  useEffect(() => {
    if (size === 'sm') { setButtonPadding('2px 20px') }
    if (size === 'md') { setButtonPadding('4px 28px') }
    if (size === 'lg') { setButtonPadding('6px 32px') }
    if (color === 'primary' || color === 'secondary') {
      setButtonColor(theme.colors[color][500])
    } else {
      setButtonColor(theme.colors.common[color].main)
    }
  }, [color, size, theme])

  const handleClick = contextSafe(() => {
    rippleTimeline.current = gsap
      .timeline()
      .to('.ripple', {
        width: 160,
        height: 160,
        marginLeft: -80,
        marginTop: -80,
        duration: 0.5,
        ease: 'power1.inOut',
        opacity: 0,
        onComplete: () => { rippleTimeline.current.revert(); onClick() }
      })
  })

  const handleHover = contextSafe(() => {
    hoverTimeline.current = gsap
      .timeline()
      .to('.hover', {
        opacity: 1,
        duration: 0.3,
      })
      .to('.button', {
        color: theme.colors.button.hover,
      }, '<')
  })
  const handleLeave = contextSafe(() => {
    leaveTimeline.current = gsap
      .timeline()
      .to('.hover', {
        opacity: 0,
        duration: 0.3,
      })
      .to('.button', {
        color: buttonColor,
      }, '<')
  })

  return (
    <Wrapper
      onClick={handleClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      ref={container}>
      <Main
        className="button"
        theme={theme}
        variant={variant}
        buttonColor={buttonColor}
        buttonPadding={buttonPadding}>
        {startIcon}{label}{endIcon}
      </Main>
      <Ripple theme={theme} className="ripple" />
      <Hover buttonColor={buttonColor} className="hover" />
    </Wrapper>
  )
}

export default Button