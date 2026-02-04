import React from 'react'
import { Card, CardContent, CardHeader, Typography, Grid, Paper } from '@mui/material'
import FlagIcon from '@mui/icons-material/Flag'
import PublicIcon from '@mui/icons-material/Public'
import LanguageIcon from '@mui/icons-material/Language'
import PlaceIcon from '@mui/icons-material/Place'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import MapIcon from '@mui/icons-material/Map'
import ExploreIcon from '@mui/icons-material/Explore'
import TravelExploreIcon from '@mui/icons-material/TravelExplore'

const flags = [
  { icon: FlagIcon, name: 'Flag' },
  { icon: PublicIcon, name: 'Public' },
  { icon: LanguageIcon, name: 'Language' },
  { icon: PlaceIcon, name: 'Place' },
  { icon: LocationOnIcon, name: 'LocationOn' },
  { icon: MapIcon, name: 'Map' },
  { icon: ExploreIcon, name: 'Explore' },
  { icon: TravelExploreIcon, name: 'TravelExplore' },
]

const Flags = () => {
  return (
    <Card>
      <CardHeader
        title={<Typography variant="h6">Location & Map Icons</Typography>}
        subheader={
          <Typography variant="body2" color="text.secondary">
            MUI provides location and map-related icons. For country flags, consider using a
            dedicated flag icon library.
          </Typography>
        }
      />
      <CardContent>
        <Grid container spacing={2}>
          {flags.map(({ icon: Icon, name }) => (
            <Grid key={name} size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <Paper
                sx={{
                  p: 2,
                  textAlign: 'center',
                  '&:hover': {
                    bgcolor: 'action.hover',
                  },
                }}
                variant="outlined"
              >
                <Icon sx={{ fontSize: 32, mb: 1 }} />
                <Typography variant="caption" display="block" noWrap>
                  {name}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Flags
