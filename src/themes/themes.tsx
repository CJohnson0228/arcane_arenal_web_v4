import type { ThemeType } from "./ThemeType"

const fontFamily = {
  handwritingFont: 'Shadows Into Light',
  sansFont: 'Open Sans',
  displayFont: 'Cinzel Decorative',
}

const common = {
  white: '#ffffff',
  black: '#000000',
  grey: {
    100: "#e6e6e6",
    200: "#cccccc",
    300: "#b3b3b3",
    400: "#999999",
    500: "#808080",
    600: "#666666",
    700: "#4d4d4d",
    800: "#333333",
    900: "#1a1a1a"
  },
  warning: {
    light: '#f69191',
    main: '#f04848',
    dark: '#902b2b',
  },
  caution: {
    light: '#ffedc2',
    main: '#ffd166',
    dark: '#cca752',
  },
  success: {
    light: '#6ae6c6',
    main: '#06d6a0',
    dark: '#048060',
  },
  info: {
    light: '#70b9d1',
    main: '#118ab2',
    dark: '#0a536b',
  },
}

export const darkTheme: ThemeType = {
  fontFamily,
  backgroundURL: 'url("/images/dragon_scales/black_2.png")',
  colors: {
    common,
    background: {
      base: '#121212',
      glass: '#dedede20',
    },
    border: {
      glass: '#cdcdcd40',
      navbar: '#565656',
    },
    button: {
      hover: '#ffffff',
    },
    ripple: '#ffffff80',
    divider: '#cdcdcd40',
    shadow: '#000000de',
    text: '#fdfdfd',
    primary: {
      100: '#f1f7ee',
      200: '#e2efdd',
      300: '#d4e6cb',
      400: '#c5deba',
      500: '#b7d6a9',
      600: '#92ab87',
      700: '#6e8065',
      800: '#495644',
      900: '#252b22',
    },
    secondary: {
      100: "#f4eef7",
      200: "#e9ddef",
      300: "#decbe6",
      400: "#d3bade",
      500: "#c8a9d6",
      600: "#a087ab",
      700: "#786580",
      800: "#504456",
      900: "#28222b"
    },
  },
}

export const lightTheme: ThemeType = {
  fontFamily,
  backgroundURL: 'url("/images/dragon_scales/white_2.png")',
  colors: {
    common,
    background: {
      base: '#dedede',
      glass: '#12121280',
    },
    border: {
      glass: '#dedede20',
      navbar: '#ababab'
    },
    button: {
      hover: '#000000',
    },
    ripple: '#00000080',
    divider: '#12121260',
    shadow: '#12121280',
    text: '#020202',
    primary: {
      100: '#fff9e9',
      200: '#fff4d2',
      300: '#ffeebc',
      400: '#ffe9a5',
      500: '#ffe38f',
      600: '#ccb672',
      700: '#998856',
      800: '#665b39',
      900: '#332d1d',
    },
    secondary: {
      100: "#e9eeff",
      200: "#d2ddff",
      300: "#bccdff",
      400: "#a5bcff",
      500: "#8fabff",
      600: "#7289cc",
      700: "#566799",
      800: "#394466",
      900: "#1d2233"
    },
  },
}