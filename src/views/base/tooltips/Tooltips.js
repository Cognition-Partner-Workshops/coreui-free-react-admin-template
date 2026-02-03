import React from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

const Tooltips = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Tooltips
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Tooltips display informative text when users hover over an element.
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Basic Tooltips
          </Typography>
          <Stack direction="row" spacing={2}>
            <Tooltip title="Tooltip on top" placement="top">
              <Button variant="outlined">Top</Button>
            </Tooltip>
            <Tooltip title="Tooltip on right" placement="right">
              <Button variant="outlined">Right</Button>
            </Tooltip>
            <Tooltip title="Tooltip on bottom" placement="bottom">
              <Button variant="outlined">Bottom</Button>
            </Tooltip>
            <Tooltip title="Tooltip on left" placement="left">
              <Button variant="outlined">Left</Button>
            </Tooltip>
          </Stack>
        </CardContent>
      </Card>
    </>
  )
}

export default Tooltips
