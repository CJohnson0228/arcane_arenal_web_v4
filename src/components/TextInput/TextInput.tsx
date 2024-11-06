import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import { ChangeEvent, Dispatch, SetStateAction } from "react"
import { useAppSelector } from "../../hooks/useAppSelector"
import { StyleTypes } from "../../themes/ThemeType"

interface TextInputProps {
  type: 'text' | 'email' | 'password'
  label: string
  placeholder: string
  value: string | undefined
  onValueChange: Dispatch<SetStateAction<string | undefined>>
}

const Wrapper = styled.div({
  position: 'relative',
  display: 'flex',
  width: '100%',
  marginBottom: 5,
}, ({ theme }: StyleTypes) => ({
  '&:focus-within': {
    span: {
      borderColor: theme.colors.primary[500],
      backgroundColor: theme.colors.primary[500],
      color: theme.colors.common.grey[900],
    },
    input: {
      borderColor: theme.colors.primary[500],
    }
  }
})
)

interface InputTypes extends StyleTypes {
  darkMode: boolean
}

const Input = styled.input({
  flexGrow: 1,
  border: '1px solid',
  borderRadius: '0 5px 5px 0',
  padding: '5px 10px',
  transition: 'all 0.3s ease',
}, ({ theme, darkMode }: InputTypes) => ({
  backgroundColor: theme.colors.background.base,
  borderColor: darkMode ? theme.colors.common.grey[700] : theme.colors.common.grey[400],
  '&::placeholder': {
    color: darkMode ? theme.colors.common.grey[700] : theme.colors.common.grey[300],
  }
})
)

const Label = styled.span({
  padding: '5px 10px',
  width: 140,
  textTransform: 'capitalize',
  borderRadius: '5px 0 0 5px',
  border: '1px solid',
  transition: 'all 0.3s ease',
}, ({ theme, darkMode }: InputTypes) => ({
  color: theme.colors.button.hover,
  backgroundColor: darkMode ? theme.colors.common.grey[900] : theme.colors.common.grey[200],
  borderColor: darkMode ? theme.colors.common.grey[700] : theme.colors.common.grey[400],
})
)


const TextInput = ({
  type = 'text',
  label,
  placeholder,
  value,
  onValueChange
}: TextInputProps) => {
  const theme = useTheme()
  const darkMode = useAppSelector((state) => state.app.darkMode)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onValueChange(e.target.value)
  }

  return (
    <Wrapper theme={theme}>
      <Label darkMode={darkMode} theme={theme}>{label}</Label>
      <Input
        darkMode={darkMode}
        theme={theme}
        type={type}
        id={label}
        autoComplete='one-time-code'
        placeholder={placeholder}
        value={value}
        onChange={handleChange} />
    </Wrapper>
  )
}

export default TextInput
