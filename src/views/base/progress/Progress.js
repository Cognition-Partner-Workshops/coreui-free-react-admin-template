import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
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
          <CardHeader title={<strong>MUI Progress</strong>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Progress indicators inform users about the status of ongoing processes.
            </Typography>
            <DocsExample href="react-progress">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <LinearProgress variant="determinate" value={0} />
                <LinearProgress variant="determinate" value={25} />
                <LinearProgress variant="determinate" value={50} />
                <LinearProgress variant="determinate" value={75} />
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
                <strong>MUI Progress</strong> <Typography component="span">With Labels</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Add labels to your progress bars by placing text within.
            </Typography>
            <DocsExample href="react-progress#linear-with-label">
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ width: '100%' }}>
                  <LinearProgress variant="determinate" value={25} />
                </Box>
                <Typography variant="body2" color="text.secondary">
                  25%
                </Typography>
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
                <strong>MUI Progress</strong> <Typography component="span">Colors</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use color prop to change the progress bar color.
            </Typography>
            <DocsExample href="react-progress#color">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <LinearProgress variant="determinate" value={25} color="primary" />
                <LinearProgress variant="determinate" value={50} color="secondary" />
                <LinearProgress variant="determinate" value={75} color="success" />
                <LinearProgress variant="determinate" value={100} color="error" />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Progress
