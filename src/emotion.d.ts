import type { BaseColorType, ShadesColorType } from './themes/ThemeType'

declare module '@emotion/react' {
  export interface Theme {
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
}
