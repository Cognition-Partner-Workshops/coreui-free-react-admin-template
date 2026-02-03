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
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import RefreshIcon from '@mui/icons-material/Refresh'
import DownloadIcon from '@mui/icons-material/Download'
import UploadIcon from '@mui/icons-material/Upload'
import PrintIcon from '@mui/icons-material/Print'
import ShareIcon from '@mui/icons-material/Share'
import LockIcon from '@mui/icons-material/Lock'

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

const CoreUIIcons = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Material UI Icons" subheader="Common Icons" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Material UI provides over 2,100 official Material icons. Here are some commonly used
              icons.
            </Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<HomeIcon />} name="Home" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<SettingsIcon />} name="Settings" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<PersonIcon />} name="Person" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<SearchIcon />} name="Search" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<NotificationsIcon />} name="Notifications" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<EmailIcon />} name="Email" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<FavoriteIcon />} name="Favorite" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<StarIcon />} name="Star" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<DeleteIcon />} name="Delete" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<EditIcon />} name="Edit" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<AddIcon />} name="Add" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<RemoveIcon />} name="Remove" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<CheckIcon />} name="Check" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<CloseIcon />} name="Close" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<MenuIcon />} name="Menu" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<MoreVertIcon />} name="MoreVert" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<ArrowBackIcon />} name="ArrowBack" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<ArrowForwardIcon />} name="ArrowForward" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<RefreshIcon />} name="Refresh" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<DownloadIcon />} name="Download" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<UploadIcon />} name="Upload" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<PrintIcon />} name="Print" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<ShareIcon />} name="Share" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<LockIcon />} name="Lock" />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default CoreUIIcons
