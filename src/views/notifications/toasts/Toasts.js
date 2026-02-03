import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'

const Toasts = () => {
  const [open, setOpen] = React.useState(false)
  const [openSuccess, setOpenSuccess] = React.useState(false)
  const [openError, setOpenError] = React.useState(false)
  const [openWarning, setOpenWarning] = React.useState(false)
  const [openInfo, setOpenInfo] = React.useState(false)

  const handleClose = (setter) => (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setter(false)
  }

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Toasts" subheader="Basic Example" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Push notifications to your visitors with a toast, a lightweight and easily
              customizable alert message.
            </Typography>
            <Button variant="contained" onClick={() => setOpen(true)}>
              Show Toast
            </Button>
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleClose(setOpen)}
              message="This is a basic toast message"
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Toasts" subheader="Color schemes" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Building on the above example, you can create different toast color schemes.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              <Button variant="contained" color="success" onClick={() => setOpenSuccess(true)}>
                Success Toast
              </Button>
              <Button variant="contained" color="error" onClick={() => setOpenError(true)}>
                Error Toast
              </Button>
              <Button variant="contained" color="warning" onClick={() => setOpenWarning(true)}>
                Warning Toast
              </Button>
              <Button variant="contained" color="info" onClick={() => setOpenInfo(true)}>
                Info Toast
              </Button>
            </Box>
            <Snackbar
              open={openSuccess}
              autoHideDuration={6000}
              onClose={handleClose(setOpenSuccess)}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <Alert
                onClose={handleClose(setOpenSuccess)}
                severity="success"
                variant="filled"
                sx={{ width: '100%' }}
              >
                This is a success toast!
              </Alert>
            </Snackbar>
            <Snackbar
              open={openError}
              autoHideDuration={6000}
              onClose={handleClose(setOpenError)}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <Alert
                onClose={handleClose(setOpenError)}
                severity="error"
                variant="filled"
                sx={{ width: '100%' }}
              >
                This is an error toast!
              </Alert>
            </Snackbar>
            <Snackbar
              open={openWarning}
              autoHideDuration={6000}
              onClose={handleClose(setOpenWarning)}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <Alert
                onClose={handleClose(setOpenWarning)}
                severity="warning"
                variant="filled"
                sx={{ width: '100%' }}
              >
                This is a warning toast!
              </Alert>
            </Snackbar>
            <Snackbar
              open={openInfo}
              autoHideDuration={6000}
              onClose={handleClose(setOpenInfo)}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <Alert
                onClose={handleClose(setOpenInfo)}
                severity="info"
                variant="filled"
                sx={{ width: '100%' }}
              >
                This is an info toast!
              </Alert>
            </Snackbar>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Toasts
