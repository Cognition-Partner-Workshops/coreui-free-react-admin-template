import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Stack from '@mui/material/Stack'

import { DocsExample } from 'src/components'

const ButtonGroups = () => {
  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title="Button Groups" />
      <CardContent>
        <DocsExample href="components/button-group">
          <Stack spacing={2}>
            <ButtonGroup variant="contained">
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
            </ButtonGroup>
            <ButtonGroup variant="outlined">
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
            </ButtonGroup>
            <ButtonGroup variant="text">
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
            </ButtonGroup>
          </Stack>
        </DocsExample>
        <DocsExample href="components/button-group#vertical-variation">
          <ButtonGroup orientation="vertical" variant="contained" sx={{ mt: 3 }}>
            <Button>Top</Button>
            <Button>Middle</Button>
            <Button>Bottom</Button>
          </ButtonGroup>
        </DocsExample>
      </CardContent>
    </Card>
  )
}

export default ButtonGroups
