import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import Box from '@mui/material/Box'
import { DocsComponents, DocsExample } from 'src/components'

const Tooltips = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/tooltip/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<strong>MUI Tooltip</strong>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Tooltips display informative text when users hover over, focus on, or tap an element.
            </Typography>
            <DocsExample href="react-tooltip">
              <Box sx={{ display: 'flex', gap: 2 }}>
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
                <strong>MUI Tooltip</strong> <Typography component="span">Arrow</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              You can use the arrow prop to add an arrow to the tooltip.
            </Typography>
            <DocsExample href="react-tooltip#arrow-tooltips">
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Tooltip title="Add" arrow>
                  <Button variant="contained">Arrow</Button>
                </Tooltip>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Tooltips
