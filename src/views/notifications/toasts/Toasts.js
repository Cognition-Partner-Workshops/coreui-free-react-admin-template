import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Button,
  Snackbar,
  Alert,
  Box,
  IconButton,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { DocsComponents, DocsExample } from 'src/components'

const Toasts = () => {
  const [open, setOpen] = useState(false)
  const [severity, setSeverity] = useState('success')

  const handleClick = (newSeverity) => {
    setSeverity(newSeverity)
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <DocsComponents href="components/snackbar/" />
        <Card sx={{ mb: 3 }}>
          <CardHeader title={<Typography variant="h6">Toasts / Snackbar</Typography>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Push notifications to your visitors with a toast, a lightweight and easily
              customizable alert message.
            </Typography>
            <DocsExample href="components/snackbar">
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
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
              </Box>
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              >
                <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                  This is a {severity} message!
                </Alert>
              </Snackbar>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Toasts{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Positions
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Snackbars can be positioned in different corners of the screen.
            </Typography>
            <DocsExample href="components/snackbar#positioned-snackbars">
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button variant="outlined" size="small">
                  Top Left
                </Button>
                <Button variant="outlined" size="small">
                  Top Center
                </Button>
                <Button variant="outlined" size="small">
                  Top Right
                </Button>
                <Button variant="outlined" size="small">
                  Bottom Left
                </Button>
                <Button variant="outlined" size="small">
                  Bottom Center
                </Button>
                <Button variant="outlined" size="small">
                  Bottom Right
                </Button>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Toasts{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Auto hide
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Snackbars can automatically hide after a specified duration using the{' '}
              <code>autoHideDuration</code> prop.
            </Typography>
            <DocsExample href="components/snackbar#automatic-dismiss">
              <Button variant="contained" onClick={() => handleClick('info')}>
                Auto-hide Toast (6 seconds)
              </Button>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Toasts
