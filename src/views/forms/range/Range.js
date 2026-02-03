import React from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Slider from '@mui/material/Slider'
import Stack from '@mui/material/Stack'

const Range = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Range
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Use MUI Slider for range inputs with custom styling.
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Basic Slider
          </Typography>
          <Stack spacing={4} sx={{ maxWidth: 400 }}>
            <Slider defaultValue={50} aria-label="Default" />
            <Slider defaultValue={30} disabled aria-label="Disabled" />
            <Slider defaultValue={[20, 40]} aria-label="Range" />
          </Stack>
        </CardContent>
      </Card>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Slider with Steps
          </Typography>
          <Stack spacing={4} sx={{ maxWidth: 400 }}>
            <Slider defaultValue={30} step={10} marks min={0} max={100} />
            <Slider defaultValue={50} step={5} marks min={0} max={100} valueLabelDisplay="auto" />
          </Stack>
        </CardContent>
      </Card>
    </>
  )
}

export default Range
