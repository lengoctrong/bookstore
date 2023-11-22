import { cyan, deepOrange, orange, teal } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: cyan
      }
    },
    dark: {
      palette: {
        primary: orange,
        secondary: deepOrange
      }
    }
  }
})

export default theme
