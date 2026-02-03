import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FlagIcon from '@mui/icons-material/Flag'
import PublicIcon from '@mui/icons-material/Public'
import LanguageIcon from '@mui/icons-material/Language'
import PlaceIcon from '@mui/icons-material/Place'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import MapIcon from '@mui/icons-material/Map'

const IconBox = ({ icon, name }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      p: 2,
      border: 1,
      borderColor: 'divider',
      borderRadius: 1,
    }}
  >
    {icon}
    <Typography variant="caption" sx={{ mt: 1 }}>
      {name}
    </Typography>
  </Box>
)

const Flags = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Flag Icons" subheader="Location and Map Icons" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Material UI provides various location and map-related icons that can be used to
              represent countries and regions.
            </Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<FlagIcon color="primary" />} name="Flag" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<PublicIcon color="primary" />} name="Public" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<LanguageIcon color="primary" />} name="Language" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<PlaceIcon color="primary" />} name="Place" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<LocationOnIcon color="primary" />} name="LocationOn" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<MapIcon color="primary" />} name="Map" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<FlagIcon color="error" />} name="Flag (Red)" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<FlagIcon color="success" />} name="Flag (Green)" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<FlagIcon color="warning" />} name="Flag (Yellow)" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<FlagIcon color="info" />} name="Flag (Blue)" />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Flags
