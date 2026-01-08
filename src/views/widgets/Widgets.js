import React, { useMemo } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import { useTheme } from '@mui/material/styles'
import SettingsIcon from '@mui/icons-material/Settings'
import PersonIcon from '@mui/icons-material/Person'
import NightsStayIcon from '@mui/icons-material/NightsStay'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { DocsExample } from 'src/components'
import WidgetsBrand from './WidgetsBrand'
import WidgetsDropdown from './WidgetsDropdown'

const generateRandomData = (count, min, max) =>
  Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1) + min))

const StatWidget = ({ title, value, progress, color, text }) => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <Typography variant="h5" component="div">
        {value}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {title}
      </Typography>
      <LinearProgress variant="determinate" value={progress} color={color} sx={{ mt: 2, mb: 1 }} />
      <Typography variant="caption" color="text.secondary">
        {text}
      </Typography>
    </CardContent>
  </Card>
)

const IconWidget = ({ icon, title, value, color }) => (
  <Card sx={{ height: '100%' }}>
    <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Box
        sx={{
          bgcolor: `${color}.main`,
          color: `${color}.contrastText`,
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
        <Typography variant="h6">{value}</Typography>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </Box>
    </CardContent>
  </Card>
)

const Widgets = () => {
  const theme = useTheme()
  const randomData = useMemo(() => generateRandomData(15, 40, 100), [])

  return (
    <Card sx={{ mb: 4 }}>
      <CardHeader title={<Typography variant="h6">Widgets</Typography>} />
      <CardContent>
        <DocsExample href="components/widgets/#cwidgetstatsa">
          <WidgetsDropdown />
        </DocsExample>
        <DocsExample href="components/widgets/#cwidgetstatsb">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} xl={3}>
              <StatWidget
                value="89.9%"
                title="Widget title"
                progress={89.9}
                color="success"
                text="Lorem ipsum dolor sit amet enim."
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <StatWidget
                value="12,124"
                title="Widget title"
                progress={89.9}
                color="info"
                text="Lorem ipsum dolor sit amet enim."
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <StatWidget
                value="$98,111.00"
                title="Widget title"
                progress={89.9}
                color="warning"
                text="Lorem ipsum dolor sit amet enim."
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <StatWidget
                value="2 TB"
                title="Widget title"
                progress={89.9}
                color="primary"
                text="Lorem ipsum dolor sit amet enim."
              />
            </Grid>
          </Grid>
        </DocsExample>
        <DocsExample href="components/widgets/#cwidgetstatsf">
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6} xl={3}>
              <IconWidget
                icon={<SettingsIcon />}
                title="income"
                value="$1,999.50"
                color="primary"
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <IconWidget icon={<PersonIcon />} title="income" value="$1,999.50" color="info" />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <IconWidget
                icon={<NightsStayIcon />}
                title="income"
                value="$1,999.50"
                color="warning"
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <IconWidget
                icon={<NotificationsIcon />}
                title="income"
                value="$1,999.50"
                color="error"
              />
            </Grid>
          </Grid>
        </DocsExample>
        <DocsExample href="components/widgets/#cwidgetstatsbrand">
          <WidgetsBrand withCharts />
        </DocsExample>
      </CardContent>
    </Card>
  )
}

export default Widgets
