import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Slider from '@mui/material/Slider'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { DocsExample } from 'src/components'

const Range = () => {
  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title="Range" />
      <CardContent>
        <DocsExample href="forms/range">
          <Stack spacing={2}>
            <Typography gutterBottom>Example range</Typography>
            <Slider defaultValue={50} />
          </Stack>
        </DocsExample>
        <DocsExample href="forms/range#disabled">
          <Stack spacing={2} sx={{ mt: 3 }}>
            <Typography gutterBottom>Disabled range</Typography>
            <Slider defaultValue={50} disabled />
          </Stack>
        </DocsExample>
        <DocsExample href="forms/range#min-and-max">
          <Stack spacing={2} sx={{ mt: 3 }}>
            <Typography gutterBottom>Min and max</Typography>
            <Slider defaultValue={3} min={0} max={5} />
          </Stack>
        </DocsExample>
        <DocsExample href="forms/range#steps">
          <Stack spacing={2} sx={{ mt: 3 }}>
            <Typography gutterBottom>Steps</Typography>
            <Slider defaultValue={2} step={0.5} min={0} max={5} marks />
          </Stack>
        </DocsExample>
      </CardContent>
    </Card>
  )
}

export default Range
