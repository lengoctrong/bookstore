import emailjs from '@emailjs/browser'
import { Box, Button, TextField } from '@mui/material'
import { useRef } from 'react'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_g2ex4yh',
        'template_ckn42zp',
        form.current,
        'KXLprgYlJLDb2kXcu'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <>
      <Box sx={{ mt: 5 }}></Box>
      <form ref={form} onSubmit={sendEmail}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            gap: 1,
            maxWidth: '50%',
            transform: 'translateX(50%)'
          }}
        >
          <TextField
            name="user_name"
            required
            fullWidth
            variant="outlined"
            label="Name: "
          />
          <TextField
            name="user_email"
            required
            fullWidth
            type="email"
            variant="outlined"
            label="Email: "
          />
          <TextField
            name="message"
            required
            fullWidth
            multiline
            rows={5}
            variant="outlined"
            label="Message: "
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </Box>
      </form>
    </>
  )
}

export default Contact
