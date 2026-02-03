import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Slider from '@mui/material/Slider'
import Box from '@mui/material/Box'

const Range = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Range" subheader="Basic Example" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use Slider component for custom range inputs with consistent cross-browser styling.
            </Typography>
            <Box sx={{ px: 2 }}>
              <Typography gutterBottom>Example range</Typography>
              <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Range" subheader="Disabled" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Add the disabled prop on a slider to give it a grayed out appearance and remove
              pointer events.
            </Typography>
            <Box sx={{ px: 2 }}>
              <Slider disabled defaultValue={50} aria-label="Disabled slider" />
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Range" subheader="Min and max" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Slider has implicit values for min and max—0 and 100, respectively. You may specify
              new values for those using the min and max props.
            </Typography>
            <Box sx={{ px: 2 }}>
              <Typography gutterBottom>Example range (0-5)</Typography>
              <Slider
                defaultValue={3}
                min={0}
                max={5}
                aria-label="Small steps"
                valueLabelDisplay="auto"
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Range" subheader="Steps" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              By default, sliders &quot;snap&quot; to integers. To change this, you can specify a
              step value.
            </Typography>
            <Box sx={{ px: 2 }}>
              <Typography gutterBottom>Example range (step: 0.5)</Typography>
              <Slider
                defaultValue={2.5}
                step={0.5}
                min={0}
                max={5}
                aria-label="Small steps"
                valueLabelDisplay="auto"
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Range
