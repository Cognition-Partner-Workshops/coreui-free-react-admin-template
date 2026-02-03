import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Button from '@mui/material/Button'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

const Alerts = () => {
  const [open, setOpen] = React.useState(true)

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Alerts" subheader="Basic Example" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Provide contextual feedback messages for typical user actions with the handful of
              available and flexible alert messages.
            </Typography>
            <Alert severity="success" sx={{ mb: 2 }}>
              This is a success alert — check it out!
            </Alert>
            <Alert severity="info" sx={{ mb: 2 }}>
              This is an info alert — check it out!
            </Alert>
            <Alert severity="warning" sx={{ mb: 2 }}>
              This is a warning alert — check it out!
            </Alert>
            <Alert severity="error" sx={{ mb: 2 }}>
              This is an error alert — check it out!
            </Alert>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Alerts" subheader="With Title" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              You can use the AlertTitle component to display a formatted title above the content.
            </Typography>
            <Alert severity="success" sx={{ mb: 2 }}>
              <AlertTitle>Success</AlertTitle>
              This is a success alert — <strong>check it out!</strong>
            </Alert>
            <Alert severity="info" sx={{ mb: 2 }}>
              <AlertTitle>Info</AlertTitle>
              This is an info alert — <strong>check it out!</strong>
            </Alert>
            <Alert severity="warning" sx={{ mb: 2 }}>
              <AlertTitle>Warning</AlertTitle>
              This is a warning alert — <strong>check it out!</strong>
            </Alert>
            <Alert severity="error" sx={{ mb: 2 }}>
              <AlertTitle>Error</AlertTitle>
              This is an error alert — <strong>check it out!</strong>
            </Alert>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Alerts" subheader="Outlined" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Two additional variants are available — outlined and filled.
            </Typography>
            <Alert variant="outlined" severity="success" sx={{ mb: 2 }}>
              This is a success alert — check it out!
            </Alert>
            <Alert variant="outlined" severity="info" sx={{ mb: 2 }}>
              This is an info alert — check it out!
            </Alert>
            <Alert variant="outlined" severity="warning" sx={{ mb: 2 }}>
              This is a warning alert — check it out!
            </Alert>
            <Alert variant="outlined" severity="error" sx={{ mb: 2 }}>
              This is an error alert — check it out!
            </Alert>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Alerts" subheader="Filled" />
          <CardContent>
            <Alert variant="filled" severity="success" sx={{ mb: 2 }}>
              This is a success alert — check it out!
            </Alert>
            <Alert variant="filled" severity="info" sx={{ mb: 2 }}>
              This is an info alert — check it out!
            </Alert>
            <Alert variant="filled" severity="warning" sx={{ mb: 2 }}>
              This is a warning alert — check it out!
            </Alert>
            <Alert variant="filled" severity="error" sx={{ mb: 2 }}>
              This is an error alert — check it out!
            </Alert>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Alerts" subheader="Dismissible" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Using the onClose prop and the Collapse component, it&apos;s possible to dismiss any
              alert inline.
            </Typography>
            <Collapse in={open}>
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false)
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                This is a dismissible alert — click the X to close it!
              </Alert>
            </Collapse>
            {!open && (
              <Button
                variant="outlined"
                onClick={() => {
                  setOpen(true)
                }}
              >
                Re-open
              </Button>
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Alerts
