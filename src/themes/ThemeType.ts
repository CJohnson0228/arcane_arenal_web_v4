export type BaseColorType = {
  light: string
  main: string
  dark: string
}

export type ShadesColorType = {
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

export type ThemeType = {
  backgroundURL: string
  fontFamily: {
    handwritingFont: string
    sansFont: string
    displayFont: string
  }
  colors: {
    common: {
      white: string
      black: string
      grey: ShadesColorType
      warning: BaseColorType
      caution: BaseColorType
      success: BaseColorType
      info: BaseColorType
    }
    background: {
      base: string
      glass: string
    }
    border: {
      glass: string
      navbar: string
    }
    button: {
      hover: string
    }
    ripple: string
    divider: string
    shadow: string
    text: string
    primary: ShadesColorType
    secondary: ShadesColorType
  }
}

export interface StyleTypes extends React.ComponentProps<'div'> {
  theme: ThemeType
}
