import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
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
          <CardHeader
            title={
              <>
                <strong>React Toast</strong> <small>Basic</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use MUI Snackbar for toast notifications.
            </Typography>
            <DocsExample href="components/toast#basic">
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
                <strong>React Toast</strong> <small>With Alert</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Combine Snackbar with Alert for colored toasts.
            </Typography>
            <DocsExample href="components/toast#color-schemes">
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button variant="contained" color="success" onClick={() => setOpenSuccess(true)}>
                  Success Toast
                </Button>
                <Button variant="contained" color="error" onClick={() => setOpenError(true)}>
                  Error Toast
                </Button>
              </Box>
              <Snackbar
                open={openSuccess}
                autoHideDuration={6000}
                onClose={() => setOpenSuccess(false)}
              >
                <Alert onClose={() => setOpenSuccess(false)} severity="success">
                  Success! This is a success toast.
                </Alert>
              </Snackbar>
              <Snackbar
                open={openError}
                autoHideDuration={6000}
                onClose={() => setOpenError(false)}
              >
                <Alert onClose={() => setOpenError(false)} severity="error">
                  Error! This is an error toast.
                </Alert>
              </Snackbar>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Toasts
