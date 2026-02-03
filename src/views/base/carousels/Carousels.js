import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import MobileStepper from '@mui/material/MobileStepper'
import Button from '@mui/material/Button'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'

const slides = [
  { label: 'First slide', bgcolor: 'primary.main' },
  { label: 'Second slide', bgcolor: 'secondary.main' },
  { label: 'Third slide', bgcolor: 'success.main' },
]

const Carousels = () => {
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = slides.length

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Carousel
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        A slideshow component for cycling through elements. MUI uses MobileStepper for similar
        functionality.
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Basic Carousel
          </Typography>
          <Box sx={{ maxWidth: 600, flexGrow: 1 }}>
            <Box
              sx={{
                height: 255,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: slides[activeStep].bgcolor,
                color: 'white',
              }}
            >
              <Typography variant="h4">{slides[activeStep].label}</Typography>
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
    </>
  )
}

export default Carousels
