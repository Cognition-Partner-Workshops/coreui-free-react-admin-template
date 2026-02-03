import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import HomeIcon from '@mui/icons-material/Home'
import SettingsIcon from '@mui/icons-material/Settings'
import PersonIcon from '@mui/icons-material/Person'
import SearchIcon from '@mui/icons-material/Search'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'
import FavoriteIcon from '@mui/icons-material/Favorite'
import StarIcon from '@mui/icons-material/Star'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import AddIcon from '@mui/icons-material/Add'
import CheckIcon from '@mui/icons-material/Check'

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
    { icon: <DeleteIcon />, name: 'Delete' },
    { icon: <EditIcon />, name: 'Edit' },
    { icon: <AddIcon />, name: 'Add' },
    { icon: <CheckIcon />, name: 'Check' },
  ]

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<strong>MUI Icons</strong>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              MUI provides over 2,100 official Material icons. Visit{' '}
              <a
                href="https://mui.com/material-ui/material-icons/"
                target="_blank"
                rel="noopener noreferrer"
              >
                MUI Icons documentation
              </a>{' '}
              for the full list.
            </Typography>
            <Grid container spacing={2}>
              {icons.map(({ icon, name }) => (
                <Grid item xs={6} sm={4} md={3} lg={2} key={name}>
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
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default CoreUIIcons
