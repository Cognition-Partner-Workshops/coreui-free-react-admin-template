import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'

import { DocsExample } from 'src/components'

const Buttons = () => {
  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title="Buttons" />
      <CardContent>
        <DocsExample href="components/buttons">
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            <Button variant="contained" color="primary">
              Primary
            </Button>
            <Button variant="contained" color="secondary">
              Secondary
            </Button>
            <Button variant="contained" color="success">
              Success
            </Button>
            <Button variant="contained" color="error">
              Danger
            </Button>
            <Button variant="contained" color="warning">
              Warning
            </Button>
            <Button variant="contained" color="info">
              Info
            </Button>
          </Stack>
        </DocsExample>
        <DocsExample href="components/buttons#outline-buttons">
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 3 }}>
            <Button variant="outlined" color="primary">
              Primary
            </Button>
            <Button variant="outlined" color="secondary">
              Secondary
            </Button>
            <Button variant="outlined" color="success">
              Success
            </Button>
            <Button variant="outlined" color="error">
              Danger
            </Button>
            <Button variant="outlined" color="warning">
              Warning
            </Button>
            <Button variant="outlined" color="info">
              Info
            </Button>
          </Stack>
        </DocsExample>
        <DocsExample href="components/buttons#sizes">
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 3 }}>
            <Button variant="contained" size="small">
              Small
            </Button>
            <Button variant="contained" size="medium">
              Medium
            </Button>
            <Button variant="contained" size="large">
              Large
            </Button>
          </Stack>
        </DocsExample>
        <DocsExample href="components/buttons#disabled-state">
          <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
            <Button variant="contained" disabled>
              Disabled
            </Button>
            <Button variant="outlined" disabled>
              Disabled
            </Button>
          </Stack>
        </DocsExample>
      </CardContent>
    </Card>
  )
}

export default Buttons
