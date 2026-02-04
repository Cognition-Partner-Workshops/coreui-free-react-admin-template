import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  CircularProgress,
  Box,
  Button,
} from '@mui/material'
import { DocsComponents, DocsExample } from 'src/components'

const Spinners = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <DocsComponents href="components/progress/" />
        <Card sx={{ mb: 3 }}>
          <CardHeader title={<Typography variant="h6">Spinners</Typography>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Indicate the loading state of a component or page with spinners.
            </Typography>
            <DocsExample href="components/progress#circular">
              <Box sx={{ display: 'flex', gap: 2 }}>
                <CircularProgress />
                <CircularProgress color="secondary" />
                <CircularProgress color="success" />
                <CircularProgress color="info" />
                <CircularProgress color="warning" />
                <CircularProgress color="error" />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Spinners{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Sizes
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/progress#sizes">
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <CircularProgress size={20} />
                <CircularProgress size={30} />
                <CircularProgress size={40} />
                <CircularProgress size={50} />
                <CircularProgress size={60} />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Spinners{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Determinate
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/progress#determinate">
              <Box sx={{ display: 'flex', gap: 2 }}>
                <CircularProgress variant="determinate" value={25} />
                <CircularProgress variant="determinate" value={50} />
                <CircularProgress variant="determinate" value={75} />
                <CircularProgress variant="determinate" value={100} />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Spinners{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  With buttons
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/progress#buttons">
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button variant="contained" disabled>
                  <CircularProgress size={20} sx={{ mr: 1 }} color="inherit" />
                  Loading...
                </Button>
                <Button variant="outlined" disabled>
                  <CircularProgress size={20} sx={{ mr: 1 }} />
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
