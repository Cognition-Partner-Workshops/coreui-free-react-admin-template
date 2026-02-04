import React from 'react'
import { Card, CardContent, CardHeader, Typography, Grid, Box, Paper } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import SettingsIcon from '@mui/icons-material/Settings'
import PersonIcon from '@mui/icons-material/Person'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsIcon from '@mui/icons-material/Notifications'
import EmailIcon from '@mui/icons-material/Email'
import FavoriteIcon from '@mui/icons-material/Favorite'
import StarIcon from '@mui/icons-material/Star'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import RefreshIcon from '@mui/icons-material/Refresh'
import DownloadIcon from '@mui/icons-material/Download'
import UploadIcon from '@mui/icons-material/Upload'
import PrintIcon from '@mui/icons-material/Print'
import ShareIcon from '@mui/icons-material/Share'
import LockIcon from '@mui/icons-material/Lock'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import InfoIcon from '@mui/icons-material/Info'
import WarningIcon from '@mui/icons-material/Warning'
import ErrorIcon from '@mui/icons-material/Error'
import HelpIcon from '@mui/icons-material/Help'

const icons = [
  { icon: HomeIcon, name: 'Home' },
  { icon: SettingsIcon, name: 'Settings' },
  { icon: PersonIcon, name: 'Person' },
  { icon: SearchIcon, name: 'Search' },
  { icon: NotificationsIcon, name: 'Notifications' },
  { icon: EmailIcon, name: 'Email' },
  { icon: FavoriteIcon, name: 'Favorite' },
  { icon: StarIcon, name: 'Star' },
  { icon: ShoppingCartIcon, name: 'ShoppingCart' },
  { icon: DeleteIcon, name: 'Delete' },
  { icon: EditIcon, name: 'Edit' },
  { icon: AddIcon, name: 'Add' },
  { icon: RemoveIcon, name: 'Remove' },
  { icon: CheckIcon, name: 'Check' },
  { icon: CloseIcon, name: 'Close' },
  { icon: MenuIcon, name: 'Menu' },
  { icon: MoreVertIcon, name: 'MoreVert' },
  { icon: ArrowBackIcon, name: 'ArrowBack' },
  { icon: ArrowForwardIcon, name: 'ArrowForward' },
  { icon: RefreshIcon, name: 'Refresh' },
  { icon: DownloadIcon, name: 'Download' },
  { icon: UploadIcon, name: 'Upload' },
  { icon: PrintIcon, name: 'Print' },
  { icon: ShareIcon, name: 'Share' },
  { icon: LockIcon, name: 'Lock' },
  { icon: VisibilityIcon, name: 'Visibility' },
  { icon: VisibilityOffIcon, name: 'VisibilityOff' },
  { icon: InfoIcon, name: 'Info' },
  { icon: WarningIcon, name: 'Warning' },
  { icon: ErrorIcon, name: 'Error' },
  { icon: HelpIcon, name: 'Help' },
]

const CoreUIIcons = () => {
  return (
    <Card>
      <CardHeader
        title={<Typography variant="h6">Material Icons</Typography>}
        subheader={
          <Typography variant="body2" color="text.secondary">
            MUI provides over 2,100 official Material icons. Here are some commonly used ones.
          </Typography>
        }
      />
      <CardContent>
        <Grid container spacing={2}>
          {icons.map(({ icon: Icon, name }) => (
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

export default CoreUIIcons
