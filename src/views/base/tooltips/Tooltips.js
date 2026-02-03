import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

const Tooltips = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Tooltips" subheader="Basic Example" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Tooltips display informative text when users hover over, focus on, or tap an element.
            </Typography>
            <Tooltip title="Tooltip on top">
              <Button variant="contained">Hover me</Button>
            </Tooltip>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Tooltips" subheader="Positioned tooltips" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              The Tooltip has 12 placement choices. They don&apos;t have directional arrows;
              instead, they rely on motion emanating from the source to convey direction.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              <Tooltip title="Top" placement="top">
                <Button variant="outlined">Top</Button>
              </Tooltip>
              <Tooltip title="Top Start" placement="top-start">
                <Button variant="outlined">Top Start</Button>
              </Tooltip>
              <Tooltip title="Top End" placement="top-end">
                <Button variant="outlined">Top End</Button>
              </Tooltip>
              <Tooltip title="Bottom" placement="bottom">
                <Button variant="outlined">Bottom</Button>
              </Tooltip>
              <Tooltip title="Bottom Start" placement="bottom-start">
                <Button variant="outlined">Bottom Start</Button>
              </Tooltip>
              <Tooltip title="Bottom End" placement="bottom-end">
                <Button variant="outlined">Bottom End</Button>
              </Tooltip>
              <Tooltip title="Left" placement="left">
                <Button variant="outlined">Left</Button>
              </Tooltip>
              <Tooltip title="Left Start" placement="left-start">
                <Button variant="outlined">Left Start</Button>
              </Tooltip>
              <Tooltip title="Left End" placement="left-end">
                <Button variant="outlined">Left End</Button>
              </Tooltip>
              <Tooltip title="Right" placement="right">
                <Button variant="outlined">Right</Button>
              </Tooltip>
              <Tooltip title="Right Start" placement="right-start">
                <Button variant="outlined">Right Start</Button>
              </Tooltip>
              <Tooltip title="Right End" placement="right-end">
                <Button variant="outlined">Right End</Button>
              </Tooltip>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Tooltips" subheader="Arrow tooltips" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              You can use the arrow prop to give your tooltip an arrow indicating which element it
              refers to.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Tooltip title="Add" arrow>
                <Button variant="contained">Arrow</Button>
              </Tooltip>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Tooltips
