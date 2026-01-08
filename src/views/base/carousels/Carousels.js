import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MobileStepper from '@mui/material/MobileStepper'
import Button from '@mui/material/Button'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import { DocsComponents, DocsExample } from 'src/components'

import AngularImg from 'src/assets/images/angular.jpg'
import ReactImg from 'src/assets/images/react.jpg'
import VueImg from 'src/assets/images/vue.jpg'

const images = [
  { imgPath: ReactImg, label: 'React', caption: 'First slide label' },
  { imgPath: AngularImg, label: 'Angular', caption: 'Second slide label' },
  { imgPath: VueImg, label: 'Vue', caption: 'Third slide label' },
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
        <Box
          component="img"
          sx={{
            display: 'block',
            width: '100%',
            overflow: 'hidden',
          }}
          src={images[activeStep].imgPath}
          alt={images[activeStep].label}
        />
        {showCaptions && (
          <Box
            sx={{
              position: 'absolute',
              bottom: 60,
              left: 0,
              right: 0,
              textAlign: 'center',
              color: 'white',
              bgcolor: 'rgba(0,0,0,0.5)',
              p: 2,
            }}
          >
            <Typography variant="h6">{images[activeStep].caption}</Typography>
            <Typography variant="body2">
              Some representative placeholder content for the slide.
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
              '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' },
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
              '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' },
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
          backButton={<Box />}
          nextButton={<Box />}
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
              <Typography variant="h6">
                Carousel <Typography component="span" variant="body2">Slide only</Typography>
              </Typography>
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
              <Typography variant="h6">
                Carousel <Typography component="span" variant="body2">With controls</Typography>
              </Typography>
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
              <Typography variant="h6">
                Carousel <Typography component="span" variant="body2">With indicators</Typography>
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              You can attach the indicators to the carousel, alongside the controls.
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
              <Typography variant="h6">
                Carousel <Typography component="span" variant="body2">With captions</Typography>
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              You can add captions to slides easily.
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
