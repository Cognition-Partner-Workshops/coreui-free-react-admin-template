import React from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import HomeIcon from '@mui/icons-material/Home'
import SettingsIcon from '@mui/icons-material/Settings'
import PersonIcon from '@mui/icons-material/Person'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsIcon from '@mui/icons-material/Notifications'
import EmailIcon from '@mui/icons-material/Email'
import FavoriteIcon from '@mui/icons-material/Favorite'
import StarIcon from '@mui/icons-material/Star'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const icons = [
  { icon: HomeIcon, name: 'Home' },
  { icon: SettingsIcon, name: 'Settings' },
  { icon: PersonIcon, name: 'Person' },
  { icon: SearchIcon, name: 'Search' },
  { icon: NotificationsIcon, name: 'Notifications' },
  { icon: EmailIcon, name: 'Email' },
  { icon: FavoriteIcon, name: 'Favorite' },
  { icon: StarIcon, name: 'Star' },
  { icon: DeleteIcon, name: 'Delete' },
  { icon: EditIcon, name: 'Edit' },
  { icon: AddIcon, name: 'Add' },
  { icon: RemoveIcon, name: 'Remove' },
  { icon: CheckIcon, name: 'Check' },
  { icon: CloseIcon, name: 'Close' },
  { icon: MenuIcon, name: 'Menu' },
  { icon: MoreVertIcon, name: 'MoreVert' },
]

const MaterialIcons = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Material Icons
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        MUI provides over 2,000 Material Design icons. Here are some commonly used ones.
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Common Icons
          </Typography>
          <Grid container spacing={2}>
            {icons.map(({ icon: Icon, name }) => (
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }} key={name}>
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
                  <Icon sx={{ fontSize: 32, mb: 1 }} />
                  <Typography variant="caption">{name}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Icon Sizes
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <HomeIcon sx={{ fontSize: 16 }} />
            <HomeIcon sx={{ fontSize: 24 }} />
            <HomeIcon sx={{ fontSize: 32 }} />
            <HomeIcon sx={{ fontSize: 48 }} />
            <HomeIcon sx={{ fontSize: 64 }} />
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Icon Colors
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <HomeIcon color="primary" sx={{ fontSize: 32 }} />
            <HomeIcon color="secondary" sx={{ fontSize: 32 }} />
            <HomeIcon color="success" sx={{ fontSize: 32 }} />
            <HomeIcon color="error" sx={{ fontSize: 32 }} />
            <HomeIcon color="warning" sx={{ fontSize: 32 }} />
            <HomeIcon color="info" sx={{ fontSize: 32 }} />
            <HomeIcon color="disabled" sx={{ fontSize: 32 }} />
          </Box>
        </CardContent>
      </Card>
    </>
  )
}

export default MaterialIcons
