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
          <CardHeader title={<Typography variant="h6">React Range</Typography>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use our custom range inputs for consistent cross-browser styling and built-in
              customization.
            </Typography>
            <DocsExample href="forms/range">
              <Box sx={{ width: '100%' }}>
                <Typography gutterBottom>Example range</Typography>
                <Slider defaultValue={50} />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">Disabled</Typography>} />
          <CardContent>
            <DocsExample href="forms/range#disabled">
              <Box sx={{ width: '100%' }}>
                <Slider disabled defaultValue={50} />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">Min and max</Typography>} />
          <CardContent>
            <DocsExample href="forms/range#min-and-max">
              <Box sx={{ width: '100%' }}>
                <Slider defaultValue={3} min={0} max={5} />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">Steps</Typography>} />
          <CardContent>
            <DocsExample href="forms/range#steps">
              <Box sx={{ width: '100%' }}>
                <Slider defaultValue={2} step={0.5} min={0} max={5} marks />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
export default Range
