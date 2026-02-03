import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { DocsComponents, DocsExample } from 'src/components'

const Spinners = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/spinner/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<strong>MUI Circular Progress</strong>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Circular progress indicators inform users about the status of ongoing processes.
            </Typography>
            <DocsExample href="react-progress#circular">
              <Box sx={{ display: 'flex', gap: 2 }}>
                <CircularProgress />
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
                <strong>MUI Circular Progress</strong>{' '}
                <Typography component="span">Colors</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use the color prop to change the spinner color.
            </Typography>
            <DocsExample href="react-progress#circular-color">
              <Box sx={{ display: 'flex', gap: 2 }}>
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
                <strong>MUI Circular Progress</strong>{' '}
                <Typography component="span">Sizes</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use the size prop to change the spinner size.
            </Typography>
            <DocsExample href="react-progress#circular-size">
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <CircularProgress size={20} />
                <CircularProgress size={30} />
                <CircularProgress size={40} />
                <CircularProgress size={50} />
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
                <strong>MUI Circular Progress</strong>{' '}
                <Typography component="span">Buttons</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Spinners can be used inside buttons to indicate a loading state.
            </Typography>
            <DocsExample href="react-progress#integration">
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
