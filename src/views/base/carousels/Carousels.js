import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import MobileStepper from '@mui/material/MobileStepper'
import Button from '@mui/material/Button'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'

const slides = [
  { label: 'First slide', color: '#777' },
  { label: 'Second slide', color: '#666' },
  { label: 'Third slide', color: '#555' },
]

const Carousels = () => {
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = slides.length

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Carousel" subheader="Basic Example" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              A slideshow component for cycling through elements—images or slides of text.
            </Typography>
            <Box sx={{ maxWidth: 600, flexGrow: 1 }}>
              <Box
                sx={{
                  height: 255,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: slides[activeStep].color,
                  color: 'white',
                }}
              >
                <Typography variant="h5">{slides[activeStep].label}</Typography>
              </Box>
              <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                  <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                    Next
                    <KeyboardArrowRight />
                  </Button>
                }
                backButton={
                  <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    <KeyboardArrowLeft />
                    Back
                  </Button>
                }
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Carousel" subheader="With Captions" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Add captions to your slides with text overlays.
            </Typography>
            <Box sx={{ maxWidth: 600, flexGrow: 1 }}>
              <Box
                sx={{
                  height: 255,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: slides[activeStep].color,
                  color: 'white',
                  position: 'relative',
                }}
              >
                <Typography variant="h5">{slides[activeStep].label}</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Some representative placeholder content for slide {activeStep + 1}.
                </Typography>
              </Box>
              <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                  <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                    Next
                    <KeyboardArrowRight />
                  </Button>
                }
                backButton={
                  <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    <KeyboardArrowLeft />
                    Back
                  </Button>
                }
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Carousels
