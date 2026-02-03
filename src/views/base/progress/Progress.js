import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import LinearProgress from '@mui/material/LinearProgress'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { DocsExample } from 'src/components'

const Progress = () => {
  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title="Progress" />
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
        <DocsExample href="components/progress#color">
          <Stack spacing={2} sx={{ mt: 3 }}>
            <LinearProgress variant="determinate" value={25} color="success" />
            <LinearProgress variant="determinate" value={50} color="info" />
            <LinearProgress variant="determinate" value={75} color="warning" />
            <LinearProgress variant="determinate" value={100} color="error" />
          </Stack>
        </DocsExample>
      </CardContent>
    </Card>
  )
}

export default Progress
