import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Slider from '@mui/material/Slider'
import Box from '@mui/material/Box'
import { DocsComponents, DocsExample } from 'src/components'

const Range = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="forms/range/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<strong>MUI Slider</strong>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Sliders allow users to make selections from a range of values.
            </Typography>
            <DocsExample href="react-slider">
              <Box sx={{ maxWidth: 400 }}>
                <Typography gutterBottom>Example range</Typography>
                <Slider defaultValue={50} />
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
                <strong>MUI Slider</strong> <Typography component="span">Disabled</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use the disabled prop to disable the slider.
            </Typography>
            <DocsExample href="react-slider#disabled-slider">
              <Box sx={{ maxWidth: 400 }}>
                <Typography gutterBottom>Disabled range</Typography>
                <Slider defaultValue={50} disabled />
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
                <strong>MUI Slider</strong> <Typography component="span">Min and Max</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use the min and max props to set the range.
            </Typography>
            <DocsExample href="react-slider#range-slider">
              <Box sx={{ maxWidth: 400 }}>
                <Typography gutterBottom>Min: 0, Max: 5</Typography>
                <Slider defaultValue={3} min={0} max={5} marks />
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
                <strong>MUI Slider</strong> <Typography component="span">Steps</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use the step prop to set the step increment.
            </Typography>
            <DocsExample href="react-slider#discrete-sliders">
              <Box sx={{ maxWidth: 400 }}>
                <Typography gutterBottom>Step: 0.5</Typography>
                <Slider
                  defaultValue={2.5}
                  step={0.5}
                  min={0}
                  max={5}
                  marks
                  valueLabelDisplay="auto"
                />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Range
