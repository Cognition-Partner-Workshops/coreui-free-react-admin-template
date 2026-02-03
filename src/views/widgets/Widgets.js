import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'
import { useTheme } from '@mui/material/styles'
import SettingsIcon from '@mui/icons-material/Settings'
import PersonIcon from '@mui/icons-material/Person'
import NightlightIcon from '@mui/icons-material/Nightlight'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { SparkLineChart } from '@mui/x-charts/SparkLineChart'

import WidgetsBrand from './WidgetsBrand'
import WidgetsDropdown from './WidgetsDropdown'

const WidgetStatsB = ({ value, title, progress, text, color, inverse }) => {
  const theme = useTheme()
  const colorMap = {
    success: theme.palette.success.main,
    info: theme.palette.info.main,
    warning: theme.palette.warning.main,
    primary: theme.palette.primary.main,
    danger: theme.palette.error.main,
  }

  return (
    <Card
      sx={{
        bgcolor: inverse ? colorMap[color] : 'background.paper',
        color: inverse ? 'white' : 'text.primary',
      }}
    >
      <CardContent>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          {value}
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          {title}
        </Typography>
        <LinearProgress
          variant="determinate"
          value={progress?.value || 0}
          sx={{
            mt: 2,
            mb: 1,
            height: 6,
            borderRadius: 3,
            bgcolor: inverse ? 'rgba(255,255,255,0.2)' : 'grey.200',
            '& .MuiLinearProgress-bar': {
              bgcolor: inverse ? 'white' : colorMap[progress?.color || color],
            },
          }}
        />
        <Typography variant="caption" sx={{ opacity: 0.7 }}>
          {text}
        </Typography>
      </CardContent>
    </Card>
  )
}

const WidgetStatsC = ({ icon, value, title, progress, color }) => {
  const theme = useTheme()
  const colorMap = {
    success: theme.palette.success.main,
    info: theme.palette.info.main,
    warning: theme.palette.warning.main,
    primary: theme.palette.primary.main,
    danger: theme.palette.error.main,
  }

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              {value}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {title}
            </Typography>
          </Box>
          <Box sx={{ color: colorMap[color] }}>{icon}</Box>
        </Box>
        <LinearProgress
          variant="determinate"
          value={progress?.value || 0}
          sx={{
            mt: 2,
            height: 4,
            borderRadius: 2,
            bgcolor: 'grey.200',
            '& .MuiLinearProgress-bar': { bgcolor: colorMap[color] },
          }}
        />
      </CardContent>
    </Card>
  )
}

const WidgetStatsF = ({ icon, value, title, color }) => {
  const theme = useTheme()
  const colorMap = {
    success: theme.palette.success.main,
    info: theme.palette.info.main,
    warning: theme.palette.warning.main,
    primary: theme.palette.primary.main,
    danger: theme.palette.error.main,
  }

  return (
    <Card>
      <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box
          sx={{
            bgcolor: colorMap[color],
            color: 'white',
            p: 2,
            borderRadius: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {icon}
        </Box>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {value}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textTransform: 'uppercase' }}>
            {title}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

const WidgetStatsE = ({ value, title, chartData, color }) => {
  const theme = useTheme()
  const colorMap = {
    success: theme.palette.success.main,
    info: theme.palette.info.main,
    warning: theme.palette.warning.main,
    primary: theme.palette.primary.main,
    danger: theme.palette.error.main,
  }

  return (
    <Card>
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {value}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {title}
        </Typography>
        <Box sx={{ height: 40, mt: 1 }}>
          <SparkLineChart
            data={chartData}
            height={40}
            colors={[colorMap[color] || colorMap.primary]}
          />
        </Box>
      </CardContent>
    </Card>
  )
}

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const Widgets = () => {
  return (
    <Card sx={{ mb: 4 }}>
      <CardHeader title="Widgets" />
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Widget Stats A
        </Typography>
        <WidgetsDropdown />

        <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
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

        <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
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

        <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
          Widget Stats E
        </Typography>
        <Grid container spacing={3}>
          {['danger', 'primary', 'success', 'info', 'warning'].map((color, index) => (
            <Grid size={{ xs: 6, sm: 4, md: 2 }} key={index}>
              <WidgetStatsE
                value="1,123"
                title="title"
                chartData={Array.from({ length: 15 }, () => random(40, 100))}
                color={color}
              />
            </Grid>
          ))}
        </Grid>

        <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
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
              color="danger"
            />
          </Grid>
        </Grid>

        <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
          Widget Stats C
        </Typography>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <WidgetStatsC
              icon={<PersonIcon sx={{ fontSize: 40 }} />}
              value="87.500"
              title="Visitors"
              progress={{ value: 75 }}
              color="info"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <WidgetStatsC
              icon={<PersonIcon sx={{ fontSize: 40 }} />}
              value="385"
              title="New Clients"
              progress={{ value: 75 }}
              color="success"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <WidgetStatsC
              icon={<SettingsIcon sx={{ fontSize: 40 }} />}
              value="1238"
              title="Products sold"
              progress={{ value: 75 }}
              color="warning"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <WidgetStatsC
              icon={<NotificationsIcon sx={{ fontSize: 40 }} />}
              value="28%"
              title="Returning Visitors"
              progress={{ value: 75 }}
              color="primary"
            />
          </Grid>
        </Grid>

        <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
          Widget Stats D (Brand Widgets)
        </Typography>
        <WidgetsBrand withCharts />
      </CardContent>
    </Card>
  )
}

export default Widgets
