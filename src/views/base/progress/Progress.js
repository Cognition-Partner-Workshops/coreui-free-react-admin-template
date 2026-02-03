import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'
import Box from '@mui/material/Box'
import { DocsComponents, DocsExample } from 'src/components'

const Progress = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/progress/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Progress</strong> <small>Basic example</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Progress components are built with MUI LinearProgress component.
            </Typography>
            <DocsExample href="components/progress">
              <Box sx={{ mb: 2 }}>
                <LinearProgress variant="determinate" value={0} sx={{ mb: 2 }} />
                <LinearProgress variant="determinate" value={25} sx={{ mb: 2 }} />
                <LinearProgress variant="determinate" value={50} sx={{ mb: 2 }} />
                <LinearProgress variant="determinate" value={75} sx={{ mb: 2 }} />
                <LinearProgress variant="determinate" value={100} />
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
                <strong>React Progress</strong> <small>Labels</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Add labels to your progress bars by placing text alongside the progress.
            </Typography>
            <DocsExample href="components/progress#labels">
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                  <LinearProgress variant="determinate" value={25} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                  <Typography variant="body2" color="text.secondary">
                    25%
                  </Typography>
                </Box>
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
                <strong>React Progress</strong> <small>Height</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use the sx prop to change the height of the progress bar.
            </Typography>
            <DocsExample href="components/progress#height">
              <LinearProgress variant="determinate" value={25} sx={{ height: 2, mb: 2 }} />
              <LinearProgress variant="determinate" value={25} sx={{ height: 20 }} />
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Progress</strong> <small>Colors</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use the color prop to change the appearance of individual progress bars.
            </Typography>
            <DocsExample href="components/progress#backgrounds">
              <LinearProgress variant="determinate" value={25} color="success" sx={{ mb: 2 }} />
              <LinearProgress variant="determinate" value={50} color="info" sx={{ mb: 2 }} />
              <LinearProgress variant="determinate" value={75} color="warning" sx={{ mb: 2 }} />
              <LinearProgress variant="determinate" value={100} color="error" />
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Progress</strong> <small>Buffer</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use the buffer variant to show buffering progress.
            </Typography>
            <DocsExample href="components/progress#multiple-bars">
              <LinearProgress variant="buffer" value={30} valueBuffer={60} sx={{ mb: 2 }} />
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Progress</strong> <small>Indeterminate</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use the indeterminate variant for loading states where progress is unknown.
            </Typography>
            <DocsExample href="components/progress#animated-stripes">
              <LinearProgress color="success" sx={{ mb: 2 }} />
              <LinearProgress color="info" sx={{ mb: 2 }} />
              <LinearProgress color="warning" sx={{ mb: 2 }} />
              <LinearProgress color="error" />
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Progress
