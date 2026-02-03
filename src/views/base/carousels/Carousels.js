import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import MobileStepper from '@mui/material/MobileStepper'
import Button from '@mui/material/Button'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import { DocsComponents, DocsExample } from 'src/components'

import AngularImg from 'src/assets/images/angular.jpg'
import ReactImg from 'src/assets/images/react.jpg'
import VueImg from 'src/assets/images/vue.jpg'

const images = [
  { label: 'React', imgPath: ReactImg },
  { label: 'Angular', imgPath: AngularImg },
  { label: 'Vue', imgPath: VueImg },
]

const SimpleCarousel = () => {
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = images.length

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
      <Box
        component="img"
        sx={{
          height: 300,
          display: 'block',
          maxWidth: '100%',
          overflow: 'hidden',
          width: '100%',
          objectFit: 'cover',
        }}
        src={images[activeStep].imgPath}
        alt={images[activeStep].label}
      />
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
  )
}

const CarouselWithCaptions = () => {
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = images.length

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
      <Box sx={{ position: 'relative' }}>
        <Box
          component="img"
          sx={{
            height: 300,
            display: 'block',
            maxWidth: '100%',
            overflow: 'hidden',
            width: '100%',
            objectFit: 'cover',
          }}
          src={images[activeStep].imgPath}
          alt={images[activeStep].label}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 50,
            left: 0,
            right: 0,
            bgcolor: 'rgba(0, 0, 0, 0.5)',
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
  )
}

const Carousels = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/carousel/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>MUI Carousel</strong> <Typography component="span">Basic</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              MUI provides MobileStepper component that can be used to create carousel-like
              experiences. For more advanced carousels, consider using libraries like
              react-material-ui-carousel.
            </Typography>
            <DocsExample href="react-stepper#mobile-stepper">
              <SimpleCarousel />
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>MUI Carousel</strong>{' '}
                <Typography component="span">With Captions</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              You can add captions to slides by overlaying text on the images.
            </Typography>
            <DocsExample href="react-stepper#mobile-stepper">
              <CarouselWithCaptions />
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Carousels
