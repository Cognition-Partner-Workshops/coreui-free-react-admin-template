import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import HomeIcon from '@mui/icons-material/Home'
import SettingsIcon from '@mui/icons-material/Settings'
import PersonIcon from '@mui/icons-material/Person'
import SearchIcon from '@mui/icons-material/Search'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import SaveIcon from '@mui/icons-material/Save'
import DownloadIcon from '@mui/icons-material/Download'
import UploadIcon from '@mui/icons-material/Upload'
import RefreshIcon from '@mui/icons-material/Refresh'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import LockIcon from '@mui/icons-material/Lock'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import NotificationsIcon from '@mui/icons-material/Notifications'
import FavoriteIcon from '@mui/icons-material/Favorite'
import StarIcon from '@mui/icons-material/Star'
import CheckIcon from '@mui/icons-material/Check'
import WarningIcon from '@mui/icons-material/Warning'
import { DocsLink } from 'src/components'

const CoreUIIcons = () => {
  const icons = [
    { icon: HomeIcon, name: 'Home' },
    { icon: SettingsIcon, name: 'Settings' },
    { icon: PersonIcon, name: 'Person' },
    { icon: SearchIcon, name: 'Search' },
    { icon: MenuIcon, name: 'Menu' },
    { icon: CloseIcon, name: 'Close' },
    { icon: AddIcon, name: 'Add' },
    { icon: DeleteIcon, name: 'Delete' },
    { icon: EditIcon, name: 'Edit' },
    { icon: SaveIcon, name: 'Save' },
    { icon: DownloadIcon, name: 'Download' },
    { icon: UploadIcon, name: 'Upload' },
    { icon: RefreshIcon, name: 'Refresh' },
    { icon: VisibilityIcon, name: 'Visibility' },
    { icon: VisibilityOffIcon, name: 'VisibilityOff' },
    { icon: LockIcon, name: 'Lock' },
    { icon: EmailIcon, name: 'Email' },
    { icon: PhoneIcon, name: 'Phone' },
    { icon: CalendarTodayIcon, name: 'Calendar' },
    { icon: NotificationsIcon, name: 'Notifications' },
    { icon: FavoriteIcon, name: 'Favorite' },
    { icon: StarIcon, name: 'Star' },
    { icon: CheckIcon, name: 'Check' },
    { icon: WarningIcon, name: 'Warning' },
  ]

  return (
    <>
      <DocsLink href="https://mui.com/material-ui/material-icons/" />
      <Card sx={{ mb: 4 }}>
        <CardHeader title={<strong>MUI Icons</strong>} />
        <CardContent>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            MUI provides over 2,100 official Material icons through @mui/icons-material.
          </Typography>
          <Grid container spacing={3}>
            {icons.map(({ icon: Icon, name }) => (
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
                  <Icon sx={{ fontSize: 40, mb: 1 }} />
                  <Typography variant="caption">{name}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default CoreUIIcons
