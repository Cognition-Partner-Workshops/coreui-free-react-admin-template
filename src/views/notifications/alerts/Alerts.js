import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Link from '@mui/material/Link'
import { DocsComponents, DocsExample } from 'src/components'

const Alerts = () => {
  const [showDismissible, setShowDismissible] = useState(true)

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/alert/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<strong>React Alert</strong>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              MUI Alert is prepared for any length of text, as well as an optional close button.
            </Typography>
            <DocsExample href="components/alert">
              <Alert severity="info" sx={{ mb: 1 }}>
                A simple info alert—check it out!
              </Alert>
              <Alert severity="success" sx={{ mb: 1 }}>
                A simple success alert—check it out!
              </Alert>
              <Alert severity="warning" sx={{ mb: 1 }}>
                A simple warning alert—check it out!
              </Alert>
              <Alert severity="error" sx={{ mb: 1 }}>
                A simple error alert—check it out!
              </Alert>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Alert</strong> <small>Link color</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use the Link component inside alerts.
            </Typography>
            <DocsExample href="components/alert#link-color">
              <Alert severity="info" sx={{ mb: 1 }}>
                A simple info alert with <Link href="#">an example link</Link>. Give it a click if
                you like.
              </Alert>
              <Alert severity="success" sx={{ mb: 1 }}>
                A simple success alert with <Link href="#">an example link</Link>. Give it a click
                if you like.
              </Alert>
              <Alert severity="warning" sx={{ mb: 1 }}>
                A simple warning alert with <Link href="#">an example link</Link>. Give it a click
                if you like.
              </Alert>
              <Alert severity="error" sx={{ mb: 1 }}>
                A simple error alert with <Link href="#">an example link</Link>. Give it a click if
                you like.
              </Alert>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Alert</strong> <small>Additional content</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Alert can also incorporate supplementary components like AlertTitle.
            </Typography>
            <DocsExample href="components/alert#additional-content">
              <Alert severity="success">
                <AlertTitle>Well done!</AlertTitle>
                Aww yeah, you successfully read this important alert message. This example text is
                going to run a bit longer so that you can see how spacing within an alert works with
                this kind of content.
              </Alert>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Alert</strong> <small>Dismissing</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Alerts can also be easily dismissed using the onClose prop.
            </Typography>
            <DocsExample href="components/alert#dismissing">
              {showDismissible && (
                <Alert severity="warning" onClose={() => setShowDismissible(false)}>
                  <strong>Go right ahead</strong> and click that dismiss over there on the right.
                </Alert>
              )}
              {!showDismissible && (
                <Typography variant="body2" color="text.secondary">
                  Alert dismissed! Refresh to see it again.
                </Typography>
              )}
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Alerts
