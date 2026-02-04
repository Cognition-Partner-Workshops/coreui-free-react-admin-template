import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Alert,
  AlertTitle,
  Button,
  Collapse,
  IconButton,
  Box,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { DocsComponents, DocsExample } from 'src/components'

const Alerts = () => {
  const [open, setOpen] = useState(true)

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <DocsComponents href="components/alert/" />
        <Card sx={{ mb: 3 }}>
          <CardHeader title={<Typography variant="h6">Alerts</Typography>} />
          <CardContent>
            <DocsExample href="components/alert">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Alert severity="success">This is a success alert!</Alert>
                <Alert severity="info">This is an info alert!</Alert>
                <Alert severity="warning">This is a warning alert!</Alert>
                <Alert severity="error">This is an error alert!</Alert>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Alerts{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  With title
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/alert#description">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Alert severity="success">
                  <AlertTitle>Success</AlertTitle>
                  This is a success alert with a title.
                </Alert>
                <Alert severity="info">
                  <AlertTitle>Info</AlertTitle>
                  This is an info alert with a title.
                </Alert>
                <Alert severity="warning">
                  <AlertTitle>Warning</AlertTitle>
                  This is a warning alert with a title.
                </Alert>
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  This is an error alert with a title.
                </Alert>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Alerts{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Outlined
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/alert#outlined">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Alert variant="outlined" severity="success">
                  This is an outlined success alert!
                </Alert>
                <Alert variant="outlined" severity="info">
                  This is an outlined info alert!
                </Alert>
                <Alert variant="outlined" severity="warning">
                  This is an outlined warning alert!
                </Alert>
                <Alert variant="outlined" severity="error">
                  This is an outlined error alert!
                </Alert>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Alerts{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Dismissible
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/alert#transition">
              <Box sx={{ width: '100%' }}>
                <Collapse in={open}>
                  <Alert
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => setOpen(false)}
                      >
                        <CloseIcon fontSize="inherit" />
                      </IconButton>
                    }
                    sx={{ mb: 2 }}
                  >
                    Close me!
                  </Alert>
                </Collapse>
                <Button disabled={open} variant="outlined" onClick={() => setOpen(true)}>
                  Re-open
                </Button>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Alerts
