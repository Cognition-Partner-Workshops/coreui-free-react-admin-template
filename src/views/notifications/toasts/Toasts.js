import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'

const Toasts = () => {
  const [open, setOpen] = useState(false)
  const [severity, setSeverity] = useState('success')

  const handleClick = (sev) => {
    setSeverity(sev)
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Toasts
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Push notifications to your visitors with a toast (Snackbar in MUI).
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Basic Toasts
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" color="success" onClick={() => handleClick('success')}>
              Success Toast
            </Button>
            <Button variant="contained" color="info" onClick={() => handleClick('info')}>
              Info Toast
            </Button>
            <Button variant="contained" color="warning" onClick={() => handleClick('warning')}>
              Warning Toast
            </Button>
            <Button variant="contained" color="error" onClick={() => handleClick('error')}>
              Error Toast
            </Button>
          </Stack>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
              This is a {severity} message!
            </Alert>
          </Snackbar>
        </CardContent>
      </Card>
    </>
  )
}

export default Toasts
