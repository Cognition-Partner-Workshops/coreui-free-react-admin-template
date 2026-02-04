import React, { useState } from 'react'
import { Card, CardContent, CardHeader, Typography, Grid, Slider, Box } from '@mui/material'
import { DocsComponents, DocsExample } from 'src/components'

const Range = () => {
  const [value, setValue] = useState(50)

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <DocsComponents href="components/slider/" />
        <Card sx={{ mb: 3 }}>
          <CardHeader title={<Typography variant="h6">Range / Slider</Typography>} />
          <CardContent>
            <DocsExample href="components/slider">
              <Box sx={{ width: 300 }}>
                <Typography gutterBottom>Default slider</Typography>
                <Slider
                  value={value}
                  onChange={(e, newValue) => setValue(newValue)}
                  valueLabelDisplay="auto"
                />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Slider{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Disabled
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/slider#disabled">
              <Box sx={{ width: 300 }}>
                <Slider disabled defaultValue={30} />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Slider{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Min and max
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/slider#min-max">
              <Box sx={{ width: 300 }}>
                <Typography gutterBottom>Temperature (0-100)</Typography>
                <Slider defaultValue={20} min={0} max={100} valueLabelDisplay="auto" />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Slider{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Steps
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/slider#steps">
              <Box sx={{ width: 300 }}>
                <Typography gutterBottom>Step: 10</Typography>
                <Slider
                  defaultValue={30}
                  step={10}
                  marks
                  min={0}
                  max={100}
                  valueLabelDisplay="auto"
                />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Slider{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Colors
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/slider#colors">
              <Box sx={{ width: 300, display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Slider defaultValue={30} color="primary" />
                <Slider defaultValue={30} color="secondary" />
                <Slider defaultValue={30} color="success" />
                <Slider defaultValue={30} color="warning" />
                <Slider defaultValue={30} color="error" />
                <Slider defaultValue={30} color="info" />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Range
