import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import HomeIcon from '@mui/icons-material/Home'
import SettingsIcon from '@mui/icons-material/Settings'
import PersonIcon from '@mui/icons-material/Person'
import SearchIcon from '@mui/icons-material/Search'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'
import FavoriteIcon from '@mui/icons-material/Favorite'
import StarIcon from '@mui/icons-material/Star'

const CoreUIIcons = () => {
  const icons = [
    { icon: <HomeIcon />, name: 'Home' },
    { icon: <SettingsIcon />, name: 'Settings' },
    { icon: <PersonIcon />, name: 'Person' },
    { icon: <SearchIcon />, name: 'Search' },
    { icon: <MailIcon />, name: 'Mail' },
    { icon: <NotificationsIcon />, name: 'Notifications' },
    { icon: <FavoriteIcon />, name: 'Favorite' },
    { icon: <StarIcon />, name: 'Star' },
  ]

  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title="MUI Icons" subheader="Material UI provides a rich set of icons" />
      <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          MUI uses @mui/icons-material package for icons. Visit the MUI Icons documentation for the
          full list.
        </Typography>
        <Grid container spacing={2}>
          {icons.map((item, index) => (
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }} key={index}>
              <Box
                sx={{
                  textAlign: 'center',
                  p: 2,
                  border: 1,
                  borderColor: 'divider',
                  borderRadius: 1,
                }}
              >
                {item.icon}
                <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                  {item.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CoreUIIcons
