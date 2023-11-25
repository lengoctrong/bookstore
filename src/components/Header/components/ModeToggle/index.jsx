import DarkModeIcon from '@mui/icons-material/DarkModeOutLined'
import LightModeIcon from '@mui/icons-material/LightMode'
import { Box, Button, useColorScheme } from '@mui/material'
function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? (
        <Box sx={{ display: 'flex', gap: 1 }}>
          <DarkModeIcon /> <p>Dark</p>
        </Box>
      ) : (
        <Box sx={{ display: 'flex', gap: 1 }}>
          <LightModeIcon /> <p>Light</p>
        </Box>
      )}
    </Button>
  )
}
export default ModeToggle
