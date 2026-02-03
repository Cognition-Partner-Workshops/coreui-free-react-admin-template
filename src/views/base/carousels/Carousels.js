import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MobileStepper from '@mui/material/MobileStepper'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import { DocsComponents, DocsExample } from 'src/components'

import AngularImg from 'src/assets/images/angular.jpg'
import ReactImg from 'src/assets/images/react.jpg'
import VueImg from 'src/assets/images/vue.jpg'

const images = [
  { src: ReactImg, label: 'React', caption: 'First slide label' },
  { src: AngularImg, label: 'Angular', caption: 'Second slide label' },
  { src: VueImg, label: 'Vue', caption: 'Third slide label' },
]

const SimpleCarousel = ({ showControls = false, showIndicators = false, showCaptions = false }) => {
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = images.length

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps)
  }

  return (
    <Box sx={{ maxWidth: '100%', flexGrow: 1, position: 'relative' }}>
      <Box sx={{ position: 'relative' }}>
        <img
          src={images[activeStep].src}
          alt={images[activeStep].label}
          style={{ width: '100%', display: 'block' }}
        />
        {showCaptions && (
          <Box
            sx={{
              position: 'absolute',
              bottom: 50,
              left: '50%',
              transform: 'translateX(-50%)',
              textAlign: 'center',
              color: 'white',
              textShadow: '1px 1px 2px black',
            }}
          >
            <Typography variant="h6">{images[activeStep].caption}</Typography>
            <Typography variant="body2">
              Some representative placeholder content for this slide.
            </Typography>
          </Box>
        )}
      </Box>
      {showControls && (
        <>
          <IconButton
            onClick={handleBack}
            sx={{
              position: 'absolute',
              top: '50%',
              left: 8,
              transform: 'translateY(-50%)',
              bgcolor: 'rgba(255,255,255,0.8)',
            }}
          >
            <KeyboardArrowLeft />
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              top: '50%',
              right: 8,
              transform: 'translateY(-50%)',
              bgcolor: 'rgba(255,255,255,0.8)',
            }}
          >
            <KeyboardArrowRight />
          </IconButton>
        </>
      )}
      {showIndicators && (
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          sx={{ justifyContent: 'center', bgcolor: 'transparent' }}
          backButton={null}
          nextButton={null}
        />
      )}
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
                <strong>Carousel</strong> <small>Slide only</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Here&apos;s a carousel with slides
            </Typography>
            <DocsExample href="components/carousel">
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
                <strong>Carousel</strong> <small>With controls</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Adding in the previous and next controls.
            </Typography>
            <DocsExample href="components/carousel/#with-controls">
              <SimpleCarousel showControls />
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>Carousel</strong> <small>With indicators</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              You can attach the indicators to the carousel, lengthwise the controls, too.
            </Typography>
            <DocsExample href="components/carousel/#with-indicators">
              <SimpleCarousel showControls showIndicators />
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>Carousel</strong> <small>With captions</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              You can add captions to slides.
            </Typography>
            <DocsExample href="components/carousel/#with-captions">
              <SimpleCarousel showControls showIndicators showCaptions />
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Carousels
