import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'
import Avatar from '@mui/material/Avatar'
import SettingsIcon from '@mui/icons-material/Settings'
import PersonIcon from '@mui/icons-material/Person'
import NightsStayIcon from '@mui/icons-material/NightsStay'
import NotificationsIcon from '@mui/icons-material/Notifications'

const StatWidget = ({ title, value, progress, color, text }) => (
  <Card>
    <CardContent>
      <Typography variant="h5" gutterBottom>
        {value}
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        {title}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={progress}
        color={color}
        sx={{ height: 6, borderRadius: 3, mb: 1 }}
      />
      <Typography variant="caption" color="text.secondary">
        {text}
      </Typography>
    </CardContent>
  </Card>
)

const IconWidget = ({ icon, title, value, color }) => (
  <Card>
    <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Avatar sx={{ bgcolor: `${color}.main`, width: 48, height: 48 }}>{icon}</Avatar>
      <Box>
        <Typography variant="h6">{value}</Typography>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </Box>
    </CardContent>
  </Card>
)

const Widgets = () => {
  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title="Widgets" />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Stats Widgets
        </Typography>
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid size={{ xs: 12, sm: 6, xl: 4 }}>
            <StatWidget
              value="89.9%"
              title="Widget title"
              progress={89.9}
              color="success"
              text="Lorem ipsum dolor sit amet enim."
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, xl: 4 }}>
            <StatWidget
              value="12,124"
              title="Widget title"
              progress={89.9}
              color="info"
              text="Lorem ipsum dolor sit amet enim."
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, xl: 4 }}>
            <StatWidget
              value="$98,111.00"
              title="Widget title"
              progress={89.9}
              color="warning"
              text="Lorem ipsum dolor sit amet enim."
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, xl: 4 }}>
            <StatWidget
              value="2 TB"
              title="Widget title"
              progress={89.9}
              color="primary"
              text="Lorem ipsum dolor sit amet enim."
            />
          </Grid>
        </Grid>

        <Typography variant="h6" gutterBottom>
          Icon Widgets
        </Typography>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6, xl: 4 }}>
            <IconWidget icon={<SettingsIcon />} title="Income" value="$1,999.50" color="primary" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, xl: 4 }}>
            <IconWidget icon={<PersonIcon />} title="Income" value="$1,999.50" color="info" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, xl: 4 }}>
            <IconWidget
              icon={<NightsStayIcon />}
              title="Income"
              value="$1,999.50"
              color="warning"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, xl: 4 }}>
            <IconWidget
              icon={<NotificationsIcon />}
              title="Income"
              value="$1,999.50"
              color="error"
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Widgets
