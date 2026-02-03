import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'
import SettingsIcon from '@mui/icons-material/Settings'
import PersonIcon from '@mui/icons-material/Person'
import NightlightIcon from '@mui/icons-material/Nightlight'
import NotificationsIcon from '@mui/icons-material/Notifications'

import WidgetsBrand from './WidgetsBrand'
import WidgetsDropdown from './WidgetsDropdown'

const WidgetStatsB = ({ value, title, text, progress, color, inverse }) => (
  <Card
    sx={{
      bgcolor: inverse ? `${color}.main` : 'background.paper',
      color: inverse ? 'white' : 'text.primary',
    }}
  >
    <CardContent>
      <Typography variant="h5" fontWeight="bold">
        {value}
      </Typography>
      <Typography variant="body2" color={inverse ? 'inherit' : 'text.secondary'}>
        {title}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={progress?.value || 0}
        color={progress?.color || color || 'primary'}
        sx={{ my: 1, height: 6, borderRadius: 1 }}
      />
      <Typography variant="caption" color={inverse ? 'inherit' : 'text.secondary'}>
        {text}
      </Typography>
    </CardContent>
  </Card>
)

const WidgetStatsF = ({ icon, title, value, color }) => (
  <Card>
    <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Box sx={{ bgcolor: `${color}.main`, color: 'white', p: 2, borderRadius: 1 }}>{icon}</Box>
      <Box>
        <Typography variant="h6" fontWeight="bold">
          {value}
        </Typography>
        <Typography variant="body2" color="text.secondary" textTransform="uppercase">
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
          Widget Stats A
        </Typography>
        <WidgetsDropdown />

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          Widget Stats B
        </Typography>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
            <WidgetStatsB
              progress={{ color: 'success', value: 89.9 }}
              text="Lorem ipsum dolor sit amet enim."
              title="Widget title"
              value="89.9%"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
            <WidgetStatsB
              value="12.124"
              title="Widget title"
              progress={{ color: 'info', value: 89.9 }}
              text="Lorem ipsum dolor sit amet enim."
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
            <WidgetStatsB
              value="$98.111,00"
              title="Widget title"
              progress={{ color: 'warning', value: 89.9 }}
              text="Lorem ipsum dolor sit amet enim."
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
            <WidgetStatsB
              value="2 TB"
              title="Widget title"
              progress={{ color: 'primary', value: 89.9 }}
              text="Lorem ipsum dolor sit amet enim."
            />
          </Grid>
        </Grid>

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          Widget Stats B (Inverse)
        </Typography>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
            <WidgetStatsB
              color="success"
              inverse
              value="89.9%"
              title="Widget title"
              progress={{ value: 89.9 }}
              text="Lorem ipsum dolor sit amet enim."
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
            <WidgetStatsB
              color="info"
              inverse
              value="12.124"
              title="Widget title"
              progress={{ value: 89.9 }}
              text="Lorem ipsum dolor sit amet enim."
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
            <WidgetStatsB
              color="warning"
              inverse
              value="$98.111,00"
              title="Widget title"
              progress={{ value: 89.9 }}
              text="Lorem ipsum dolor sit amet enim."
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
            <WidgetStatsB
              color="primary"
              inverse
              value="2 TB"
              title="Widget title"
              progress={{ value: 89.9 }}
              text="Lorem ipsum dolor sit amet enim."
            />
          </Grid>
        </Grid>

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          Widget Stats F
        </Typography>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
            <WidgetStatsF
              icon={<SettingsIcon />}
              title="income"
              value="$1.999,50"
              color="primary"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
            <WidgetStatsF icon={<PersonIcon />} title="income" value="$1.999,50" color="info" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
            <WidgetStatsF
              icon={<NightlightIcon />}
              title="income"
              value="$1.999,50"
              color="warning"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
            <WidgetStatsF
              icon={<NotificationsIcon />}
              title="income"
              value="$1.999,50"
              color="error"
            />
          </Grid>
        </Grid>

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          Widget Stats D (Brand)
        </Typography>
        <WidgetsBrand withCharts />
      </CardContent>
    </Card>
  )
}

export default Widgets
