import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
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
          <CardHeader
            title={
              <>
                <strong>React Range</strong>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use MUI Slider for range inputs.
            </Typography>
            <DocsExample href="forms/range">
              <Box sx={{ px: 2 }}>
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
                <strong>React Range</strong> <small>Disabled</small>
              </>
            }
          />
          <CardContent>
            <DocsExample href="forms/range#disabled">
              <Box sx={{ px: 2 }}>
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
                <strong>React Range</strong> <small>Min and max</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Slider has implicit values for min and max—0 and 100, respectively.
            </Typography>
            <DocsExample href="forms/range#min-and-max">
              <Box sx={{ px: 2 }}>
                <Slider defaultValue={3} min={0} max={5} />
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
                <strong>React Range</strong> <small>Steps</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              By default, sliders snap to integers. To change this, you can specify a step value.
            </Typography>
            <DocsExample href="forms/range#steps">
              <Box sx={{ px: 2 }}>
                <Slider defaultValue={2.5} step={0.5} min={0} max={5} marks />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Range
