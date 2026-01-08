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
              <Typography variant="h6">
                React Progress <Typography component="span" variant="body2">Basic example</Typography>
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              MUI LinearProgress component provides a simple way to show progress indicators.
            </Typography>
            <DocsExample href="components/progress">
              <LinearProgress variant="determinate" value={0} sx={{ mb: 2 }} />
              <LinearProgress variant="determinate" value={25} sx={{ mb: 2 }} />
              <LinearProgress variant="determinate" value={50} sx={{ mb: 2 }} />
              <LinearProgress variant="determinate" value={75} sx={{ mb: 2 }} />
              <LinearProgress variant="determinate" value={100} sx={{ mb: 2 }} />
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                React Progress <Typography component="span" variant="body2">Labels</Typography>
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Add labels to your progress bars by using a Box wrapper with Typography.
            </Typography>
            <DocsExample href="components/progress#labels">
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                  <LinearProgress variant="determinate" value={25} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                  <Typography variant="body2" color="text.secondary">25%</Typography>
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
              <Typography variant="h6">
                React Progress <Typography component="span" variant="body2">Height</Typography>
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use the <code>sx</code> prop to customize the height of the progress bar.
            </Typography>
            <DocsExample href="components/progress#height">
              <LinearProgress variant="determinate" value={25} sx={{ height: 2, mb: 2 }} />
              <LinearProgress variant="determinate" value={25} sx={{ height: 20, mb: 2 }} />
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                React Progress <Typography component="span" variant="body2">Backgrounds</Typography>
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use <code>color</code> prop to change the appearance of individual progress bars.
            </Typography>
            <DocsExample href="components/progress#backgrounds">
              <LinearProgress variant="determinate" color="success" value={25} sx={{ mb: 2 }} />
              <LinearProgress variant="determinate" color="info" value={50} sx={{ mb: 2 }} />
              <LinearProgress variant="determinate" color="warning" value={75} sx={{ mb: 2 }} />
              <LinearProgress variant="determinate" color="error" value={100} sx={{ mb: 2 }} />
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                React Progress <Typography component="span" variant="body2">Buffer</Typography>
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              MUI supports buffer variant for showing buffered progress.
            </Typography>
            <DocsExample href="components/progress#buffer">
              <LinearProgress variant="buffer" value={25} valueBuffer={50} sx={{ mb: 2 }} />
              <LinearProgress variant="buffer" value={50} valueBuffer={75} sx={{ mb: 2 }} />
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                React Progress <Typography component="span" variant="body2">Indeterminate</Typography>
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use the indeterminate variant when you don&#39;t know the progress value.
            </Typography>
            <DocsExample href="components/progress#indeterminate">
              <LinearProgress sx={{ mb: 2 }} />
              <LinearProgress color="secondary" sx={{ mb: 2 }} />
              <LinearProgress color="success" sx={{ mb: 2 }} />
              <LinearProgress color="inherit" sx={{ mb: 2 }} />
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Progress
