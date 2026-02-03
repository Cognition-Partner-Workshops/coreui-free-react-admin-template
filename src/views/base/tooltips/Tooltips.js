import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import Stack from '@mui/material/Stack'

import { DocsExample } from 'src/components'

const Tooltips = () => {
  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title="Tooltips" />
      <CardContent>
        <DocsExample href="components/tooltip">
          <Stack direction="row" spacing={2}>
            <Tooltip title="Tooltip on top" placement="top">
              <Button variant="outlined">Tooltip on top</Button>
            </Tooltip>
            <Tooltip title="Tooltip on right" placement="right">
              <Button variant="outlined">Tooltip on right</Button>
            </Tooltip>
            <Tooltip title="Tooltip on bottom" placement="bottom">
              <Button variant="outlined">Tooltip on bottom</Button>
            </Tooltip>
            <Tooltip title="Tooltip on left" placement="left">
              <Button variant="outlined">Tooltip on left</Button>
            </Tooltip>
          </Stack>
        </DocsExample>
      </CardContent>
    </Card>
  )
}

export default Tooltips
