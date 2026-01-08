import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { DocsComponents, DocsExample } from 'src/components'

const Spinners = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/spinner/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                React Spinner{' '}
                <Typography component="span" variant="body2">
                  Border
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use the circular progress for a lightweight loading indicator.
            </Typography>
            <DocsExample href="components/spinner">
              <CircularProgress />
            </DocsExample>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, mt: 2 }}>
              You can use any of our color utilities on the standard spinner.
            </Typography>
            <DocsExample href="components/spinner#colors">
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <CircularProgress color="primary" />
                <CircularProgress color="secondary" />
                <CircularProgress color="success" />
                <CircularProgress color="error" />
                <CircularProgress color="warning" />
                <CircularProgress color="info" />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                React Spinner{' '}
                <Typography component="span" variant="body2">
                  Size
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use the size prop to make a smaller or larger spinner.
            </Typography>
            <DocsExample href="components/spinner#size">
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <CircularProgress size={20} />
                <CircularProgress size={30} />
                <CircularProgress size={40} />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                React Spinner{' '}
                <Typography component="span" variant="body2">
                  Buttons
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use spinners within buttons to indicate an action is currently processing or taking
              place. You may also swap the text out of the spinner element and utilize button text
              as needed.
            </Typography>
            <DocsExample href="components/spinner#buttons">
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button variant="contained" color="primary" disabled>
                  <CircularProgress size={20} color="inherit" sx={{ mr: 1 }} />
                </Button>
                <Button variant="contained" color="primary" disabled>
                  <CircularProgress size={20} color="inherit" sx={{ mr: 1 }} />
                  Loading...
                </Button>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Spinners
