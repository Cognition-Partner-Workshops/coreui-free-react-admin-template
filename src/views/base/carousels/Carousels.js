import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Box,
  IconButton,
  MobileStepper,
  Button,
} from '@mui/material'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import { DocsComponents, DocsExample } from 'src/components'

const images = [
  { label: 'First slide', imgPath: 'https://picsum.photos/800/400?random=1' },
  { label: 'Second slide', imgPath: 'https://picsum.photos/800/400?random=2' },
  { label: 'Third slide', imgPath: 'https://picsum.photos/800/400?random=3' },
]

const Carousels = () => {
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = images.length

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <DocsComponents href="components/carousel/" />
        <Card sx={{ mb: 3 }}>
          <CardHeader title={<Typography variant="h6">Carousel</Typography>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              A slideshow component for cycling through elements—images or slides of text.
            </Typography>
            <DocsExample href="components/carousel">
              <Box sx={{ maxWidth: 800, flexGrow: 1, mx: 'auto' }}>
                <Box
                  component="img"
                  sx={{
                    height: 400,
                    display: 'block',
                    maxWidth: '100%',
                    overflow: 'hidden',
                    width: '100%',
                    objectFit: 'cover',
                    borderRadius: 1,
                  }}
                  src={images[activeStep].imgPath}
                  alt={images[activeStep].label}
                />
                <MobileStepper
                  steps={maxSteps}
                  position="static"
                  activeStep={activeStep}
                  nextButton={
                    <Button
                      size="small"
                      onClick={handleNext}
                      disabled={activeStep === maxSteps - 1}
                    >
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
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Carousel{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  with captions
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/carousel#with-captions">
              <Box sx={{ maxWidth: 800, flexGrow: 1, mx: 'auto' }}>
                <Box sx={{ position: 'relative' }}>
                  <Box
                    component="img"
                    sx={{
                      height: 400,
                      display: 'block',
                      maxWidth: '100%',
                      overflow: 'hidden',
                      width: '100%',
                      objectFit: 'cover',
                      borderRadius: 1,
                    }}
                    src={images[activeStep].imgPath}
                    alt={images[activeStep].label}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      bgcolor: 'rgba(0,0,0,0.5)',
                      color: 'white',
                      p: 2,
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="h6">{images[activeStep].label}</Typography>
                    <Typography variant="body2">
                      Some representative placeholder content for slide {activeStep + 1}.
                    </Typography>
                  </Box>
                </Box>
                <MobileStepper
                  steps={maxSteps}
                  position="static"
                  activeStep={activeStep}
                  nextButton={
                    <Button
                      size="small"
                      onClick={handleNext}
                      disabled={activeStep === maxSteps - 1}
                    >
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
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Carousels
