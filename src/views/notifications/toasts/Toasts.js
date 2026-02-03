import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import { DocsComponents, DocsExample } from 'src/components'

const Toasts = () => {
  const [open, setOpen] = useState(false)
  const [openSuccess, setOpenSuccess] = useState(false)
  const [openError, setOpenError] = useState(false)

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/toast/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<strong>MUI Snackbar (Toast)</strong>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Snackbars provide brief notifications at the bottom of the screen.
            </Typography>
            <DocsExample href="react-snackbar">
              <Button variant="contained" onClick={() => setOpen(true)}>
                Show Toast
              </Button>
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={() => setOpen(false)}
                message="This is a toast message"
              />
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>MUI Snackbar</strong> <Typography component="span">With Alert</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Combine Snackbar with Alert for colored notifications.
            </Typography>
            <DocsExample href="react-snackbar#customization">
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button variant="contained" color="success" onClick={() => setOpenSuccess(true)}>
                  Success Toast
                </Button>
                <Button variant="contained" color="error" onClick={() => setOpenError(true)}>
                  Error Toast
                </Button>
                <Snackbar
                  open={openSuccess}
                  autoHideDuration={6000}
                  onClose={() => setOpenSuccess(false)}
                >
                  <Alert
                    onClose={() => setOpenSuccess(false)}
                    severity="success"
                    sx={{ width: '100%' }}
                  >
                    This is a success message!
                  </Alert>
                </Snackbar>
                <Snackbar
                  open={openError}
                  autoHideDuration={6000}
                  onClose={() => setOpenError(false)}
                >
                  <Alert
                    onClose={() => setOpenError(false)}
                    severity="error"
                    sx={{ width: '100%' }}
                  >
                    This is an error message!
                  </Alert>
                </Snackbar>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Toasts
