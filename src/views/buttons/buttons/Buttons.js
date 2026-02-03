import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import HomeIcon from '@mui/icons-material/Home'

const Buttons = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Buttons" subheader="Basic Example" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Material UI includes several predefined button styles, each serving its own semantic
              purpose.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              <Button variant="contained" color="primary">
                Primary
              </Button>
              <Button variant="contained" color="secondary">
                Secondary
              </Button>
              <Button variant="contained" color="success">
                Success
              </Button>
              <Button variant="contained" color="error">
                Danger
              </Button>
              <Button variant="contained" color="warning">
                Warning
              </Button>
              <Button variant="contained" color="info">
                Info
              </Button>
              <Button variant="contained" sx={{ bgcolor: 'grey.300', color: 'text.primary' }}>
                Light
              </Button>
              <Button variant="contained" sx={{ bgcolor: 'grey.800' }}>
                Dark
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Buttons" subheader="Outlined buttons" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              In need of a button, but not the hefty background colors they bring? Use
              variant=&quot;outlined&quot; to remove all background images and colors on any button.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              <Button variant="outlined" color="primary">
                Primary
              </Button>
              <Button variant="outlined" color="secondary">
                Secondary
              </Button>
              <Button variant="outlined" color="success">
                Success
              </Button>
              <Button variant="outlined" color="error">
                Danger
              </Button>
              <Button variant="outlined" color="warning">
                Warning
              </Button>
              <Button variant="outlined" color="info">
                Info
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Buttons" subheader="Text buttons" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Text buttons are typically used for less-pronounced actions.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              <Button variant="text" color="primary">
                Primary
              </Button>
              <Button variant="text" color="secondary">
                Secondary
              </Button>
              <Button variant="text" color="success">
                Success
              </Button>
              <Button variant="text" color="error">
                Danger
              </Button>
              <Button variant="text" color="warning">
                Warning
              </Button>
              <Button variant="text" color="info">
                Info
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Buttons" subheader="Sizes" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Fancy larger or smaller buttons? Use size=&quot;large&quot; or size=&quot;small&quot;
              for additional sizes.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
              <Button variant="contained" color="primary" size="small">
                Small
              </Button>
              <Button variant="contained" color="primary">
                Default
              </Button>
              <Button variant="contained" color="primary" size="large">
                Large
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Buttons" subheader="Disabled state" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Make buttons look inactive by adding the disabled prop.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              <Button variant="contained" color="primary" disabled>
                Primary
              </Button>
              <Button variant="contained" color="secondary" disabled>
                Secondary
              </Button>
              <Button variant="outlined" color="primary" disabled>
                Outlined
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Buttons" subheader="With icons" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Sometimes you might want to have icons for certain buttons to enhance the UX.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
              <Button variant="contained" startIcon={<HomeIcon />}>
                Home
              </Button>
              <Button variant="outlined" endIcon={<HomeIcon />}>
                Home
              </Button>
              <IconButton color="primary">
                <HomeIcon />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Buttons
