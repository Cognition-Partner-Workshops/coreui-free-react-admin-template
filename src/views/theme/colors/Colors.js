import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'

const ColorBox = ({ color, name, hex }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      mb: 2,
    }}
  >
    <Box
      sx={{
        width: '100%',
        height: 100,
        bgcolor: color,
        borderRadius: 1,
        mb: 1,
      }}
    />
    <Typography variant="subtitle2">{name}</Typography>
    <Typography variant="caption" color="text.secondary">
      {hex}
    </Typography>
  </Box>
)

const Colors = () => {
  const theme = useTheme()

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Theme Colors" subheader="Primary Palette" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Material UI uses a color system that supports both light and dark themes.
            </Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <ColorBox color="primary.main" name="Primary" hex={theme.palette.primary.main} />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <ColorBox
                  color="primary.light"
                  name="Primary Light"
                  hex={theme.palette.primary.light}
                />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <ColorBox
                  color="primary.dark"
                  name="Primary Dark"
                  hex={theme.palette.primary.dark}
                />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <ColorBox
                  color="secondary.main"
                  name="Secondary"
                  hex={theme.palette.secondary.main}
                />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <ColorBox
                  color="secondary.light"
                  name="Secondary Light"
                  hex={theme.palette.secondary.light}
                />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <ColorBox
                  color="secondary.dark"
                  name="Secondary Dark"
                  hex={theme.palette.secondary.dark}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Theme Colors" subheader="Status Colors" />
          <CardContent>
            <Grid container spacing={2}>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <ColorBox color="success.main" name="Success" hex={theme.palette.success.main} />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <ColorBox color="info.main" name="Info" hex={theme.palette.info.main} />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <ColorBox color="warning.main" name="Warning" hex={theme.palette.warning.main} />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <ColorBox color="error.main" name="Error" hex={theme.palette.error.main} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Theme Colors" subheader="Grey Palette" />
          <CardContent>
            <Grid container spacing={2}>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <ColorBox color="grey.100" name="Grey 100" hex="#f5f5f5" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <ColorBox color="grey.200" name="Grey 200" hex="#eeeeee" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <ColorBox color="grey.300" name="Grey 300" hex="#e0e0e0" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <ColorBox color="grey.400" name="Grey 400" hex="#bdbdbd" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <ColorBox color="grey.500" name="Grey 500" hex="#9e9e9e" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <ColorBox color="grey.600" name="Grey 600" hex="#757575" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <ColorBox color="grey.700" name="Grey 700" hex="#616161" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <ColorBox color="grey.800" name="Grey 800" hex="#424242" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <ColorBox color="grey.900" name="Grey 900" hex="#212121" />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Colors
