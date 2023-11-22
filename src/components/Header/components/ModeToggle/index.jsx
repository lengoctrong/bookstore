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
        <Box
          sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'black' }}
        >
          <DarkModeIcon /> Dark
        </Box>
      ) : (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <LightModeIcon /> Light
        </Box>
      )}
    </Button>
  )
}
export default ModeToggle
