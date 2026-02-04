import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  LinearProgress,
  Box,
  Stack,
} from '@mui/material'
import { DocsComponents, DocsExample } from 'src/components'

const Progress = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <DocsComponents href="components/progress/" />
        <Card sx={{ mb: 3 }}>
          <CardHeader title={<Typography variant="h6">Progress</Typography>} />
          <CardContent>
            <DocsExample href="components/progress">
              <Stack spacing={2}>
                <LinearProgress variant="determinate" value={0} />
                <LinearProgress variant="determinate" value={25} />
                <LinearProgress variant="determinate" value={50} />
                <LinearProgress variant="determinate" value={75} />
                <LinearProgress variant="determinate" value={100} />
              </Stack>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Progress{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  With labels
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/progress#labels">
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
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

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Progress{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Colors
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/progress#colors">
              <Stack spacing={2}>
                <LinearProgress variant="determinate" value={25} color="primary" />
                <LinearProgress variant="determinate" value={50} color="secondary" />
                <LinearProgress variant="determinate" value={75} color="success" />
                <LinearProgress variant="determinate" value={100} color="info" />
                <LinearProgress variant="determinate" value={50} color="warning" />
                <LinearProgress variant="determinate" value={25} color="error" />
              </Stack>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Progress{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Indeterminate
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/progress#indeterminate">
              <Stack spacing={2}>
                <LinearProgress />
                <LinearProgress color="secondary" />
                <LinearProgress color="success" />
              </Stack>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Progress{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Buffer
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/progress#buffer">
              <LinearProgress variant="buffer" value={50} valueBuffer={75} />
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Progress
