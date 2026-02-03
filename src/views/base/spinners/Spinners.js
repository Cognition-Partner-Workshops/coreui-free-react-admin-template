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
              <>
                <strong>React Spinner</strong> <small>Border</small>
              </>
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
              You can use the color prop to change the spinner color.
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
              <>
                <strong>React Spinner</strong> <small>Determinate</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use the variant=&quot;determinate&quot; prop to show progress.
            </Typography>
            <DocsExample href="components/spinner#growing-spinner">
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <CircularProgress variant="determinate" value={25} />
                <CircularProgress variant="determinate" value={50} />
                <CircularProgress variant="determinate" value={75} />
                <CircularProgress variant="determinate" value={100} />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Spinner</strong> <small>Size</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use the size prop to change the spinner size.
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
              <>
                <strong>React Spinner</strong> <small>Buttons</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use spinners within buttons to indicate an action is currently processing or taking
              place.
            </Typography>
            <DocsExample href="components/spinner#buttons">
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button variant="contained" disabled>
                  <CircularProgress size={20} sx={{ mr: 1 }} />
                </Button>
                <Button variant="contained" disabled>
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
