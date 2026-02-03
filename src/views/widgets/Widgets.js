import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'
import Link from '@mui/material/Link'
import PeopleIcon from '@mui/icons-material/People'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import PieChartIcon from '@mui/icons-material/PieChart'
import SpeedIcon from '@mui/icons-material/Speed'
import ChatIcon from '@mui/icons-material/Chat'
import SettingsIcon from '@mui/icons-material/Settings'
import PersonIcon from '@mui/icons-material/Person'
import NightlightIcon from '@mui/icons-material/Nightlight'
import NotificationsIcon from '@mui/icons-material/Notifications'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import LaptopIcon from '@mui/icons-material/Laptop'
import { BarChart, Bar, LineChart, Line, ResponsiveContainer } from 'recharts'

import WidgetsBrand from './WidgetsBrand'
import WidgetsDropdown from './WidgetsDropdown'

const generateChartData = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  return ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M'].map((day) => ({
    name: day,
    value: random(40, 100),
  }))
}

const chartData = generateChartData()

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
        value={progress.value}
        color={progress.color || color || 'primary'}
        sx={{ my: 1 }}
      />
      <Typography variant="caption" color={inverse ? 'inherit' : 'text.secondary'}>
        {text}
      </Typography>
    </CardContent>
  </Card>
)

const WidgetStatsE = ({ chart, title, value }) => (
  <Card>
    <CardContent sx={{ textAlign: 'center' }}>
      <Box sx={{ height: 40, mb: 1 }}>{chart}</Box>
      <Typography variant="h6" fontWeight="bold">
        {value}
      </Typography>
      <Typography variant="caption" color="text.secondary">
        {title}
      </Typography>
    </CardContent>
  </Card>
)

const WidgetStatsF = ({ icon, title, value, color, footer }) => (
  <Card>
    <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Box
        sx={{
          bgcolor: `${color}.main`,
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
        <Typography variant="h6" fontWeight="bold">
          {value}
        </Typography>
        <Typography variant="caption" color="text.secondary" textTransform="uppercase">
          {title}
        </Typography>
      </Box>
    </CardContent>
    {footer && (
      <Box sx={{ px: 2, py: 1, bgcolor: 'grey.100', borderTop: 1, borderColor: 'divider' }}>
        {footer}
      </Box>
    )}
  </Card>
)

const WidgetStatsC = ({ icon, title, value, progress, color, inverse }) => (
  <Card
    sx={{
      bgcolor: inverse ? `${color}.main` : 'background.paper',
      color: inverse ? 'white' : 'text.primary',
    }}
  >
    <CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box>
          <Typography variant="h5" fontWeight="bold">
            {value}
          </Typography>
          <Typography variant="body2" color={inverse ? 'inherit' : 'text.secondary'}>
            {title}
          </Typography>
        </Box>
        <Box sx={{ color: inverse ? 'inherit' : `${progress.color || color}.main` }}>{icon}</Box>
      </Box>
      <LinearProgress
        variant="determinate"
        value={progress.value}
        color={inverse ? 'inherit' : progress.color || color || 'primary'}
        sx={{ mt: 2, bgcolor: inverse ? 'rgba(255,255,255,0.3)' : undefined }}
      />
    </CardContent>
  </Card>
)

const Widgets = () => {
  return (
    <Card sx={{ mb: 4 }}>
      <CardHeader title="Widgets" />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Stats Widgets A (WidgetsDropdown)
        </Typography>
        <Box sx={{ mb: 4 }}>
          <WidgetsDropdown />
        </Box>

        <Typography variant="h6" gutterBottom>
          Stats Widgets B
        </Typography>
        <Grid container spacing={2} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} xl={4}>
            <WidgetStatsB
              progress={{ color: 'success', value: 89.9 }}
              text="Lorem ipsum dolor sit amet enim."
              title="Widget title"
              value="89.9%"
            />
          </Grid>
          <Grid item xs={12} sm={6} xl={4}>
            <WidgetStatsB
              value="12.124"
              title="Widget title"
              progress={{ color: 'info', value: 89.9 }}
              text="Lorem ipsum dolor sit amet enim."
            />
          </Grid>
          <Grid item xs={12} sm={6} xl={4}>
            <WidgetStatsB
              value="$98.111,00"
              title="Widget title"
              progress={{ color: 'warning', value: 89.9 }}
              text="Lorem ipsum dolor sit amet enim."
            />
          </Grid>
          <Grid item xs={12} sm={6} xl={4}>
            <WidgetStatsB
              value="2 TB"
              title="Widget title"
              progress={{ color: 'primary', value: 89.9 }}
              text="Lorem ipsum dolor sit amet enim."
            />
          </Grid>
        </Grid>

        <Typography variant="h6" gutterBottom>
          Stats Widgets B (Inverse)
        </Typography>
        <Grid container spacing={2} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} xl={4}>
            <WidgetStatsB
              color="success"
              inverse
              value="89.9%"
              title="Widget title"
              progress={{ value: 89.9 }}
              text="Lorem ipsum dolor sit amet enim."
            />
          </Grid>
          <Grid item xs={12} sm={6} xl={4}>
            <WidgetStatsB
              color="info"
              inverse
              value="12.124"
              title="Widget title"
              progress={{ value: 89.9 }}
              text="Lorem ipsum dolor sit amet enim."
            />
          </Grid>
          <Grid item xs={12} sm={6} xl={4}>
            <WidgetStatsB
              color="warning"
              inverse
              value="$98.111,00"
              title="Widget title"
              progress={{ value: 89.9 }}
              text="Lorem ipsum dolor sit amet enim."
            />
          </Grid>
          <Grid item xs={12} sm={6} xl={4}>
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

        <Typography variant="h6" gutterBottom>
          Stats Widgets E (with Charts)
        </Typography>
        <Grid container spacing={2} sx={{ mb: 4 }}>
          <Grid item xs={6} sm={4} md={3} xl={2}>
            <WidgetStatsE
              chart={
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData.slice(0, 7)}>
                    <Bar dataKey="value" fill="#e55353" />
                  </BarChart>
                </ResponsiveContainer>
              }
              title="title"
              value="1,123"
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} xl={2}>
            <WidgetStatsE
              chart={
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData.slice(0, 7)}>
                    <Bar dataKey="value" fill="#321fdb" />
                  </BarChart>
                </ResponsiveContainer>
              }
              title="title"
              value="1,123"
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} xl={2}>
            <WidgetStatsE
              chart={
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData.slice(0, 7)}>
                    <Line type="monotone" dataKey="value" stroke="#e55353" dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              }
              title="title"
              value="1,123"
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} xl={2}>
            <WidgetStatsE
              chart={
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData.slice(0, 7)}>
                    <Line type="monotone" dataKey="value" stroke="#2eb85c" dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              }
              title="title"
              value="1,123"
            />
          </Grid>
        </Grid>

        <Typography variant="h6" gutterBottom>
          Stats Widgets F
        </Typography>
        <Grid container spacing={2} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} xl={4}>
            <WidgetStatsF
              icon={<SettingsIcon />}
              title="income"
              value="$1.999,50"
              color="primary"
            />
          </Grid>
          <Grid item xs={12} sm={6} xl={4}>
            <WidgetStatsF icon={<PersonIcon />} title="income" value="$1.999,50" color="info" />
          </Grid>
          <Grid item xs={12} sm={6} xl={4}>
            <WidgetStatsF
              icon={<NightlightIcon />}
              title="income"
              value="$1.999,50"
              color="warning"
            />
          </Grid>
          <Grid item xs={12} sm={6} xl={4}>
            <WidgetStatsF
              icon={<NotificationsIcon />}
              title="income"
              value="$1.999,50"
              color="error"
            />
          </Grid>
        </Grid>

        <Typography variant="h6" gutterBottom>
          Stats Widgets F (with Footer)
        </Typography>
        <Grid container spacing={2} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} xl={4}>
            <WidgetStatsF
              icon={<SettingsIcon />}
              title="income"
              value="$1.999,50"
              color="primary"
              footer={
                <Link
                  href="https://mui.com/"
                  target="_blank"
                  rel="noopener"
                  sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                >
                  View more <ArrowForwardIcon fontSize="small" />
                </Link>
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} xl={4}>
            <WidgetStatsF
              icon={<LaptopIcon />}
              title="income"
              value="$1.999,50"
              color="info"
              footer={
                <Link
                  href="https://mui.com/"
                  target="_blank"
                  rel="noopener"
                  sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                >
                  View more <ArrowForwardIcon fontSize="small" />
                </Link>
              }
            />
          </Grid>
        </Grid>

        <Typography variant="h6" gutterBottom>
          Brand Widgets
        </Typography>
        <Box sx={{ mb: 4 }}>
          <WidgetsBrand />
        </Box>

        <Typography variant="h6" gutterBottom>
          Brand Widgets (with Charts)
        </Typography>
        <Box sx={{ mb: 4 }}>
          <WidgetsBrand withCharts />
        </Box>

        <Typography variant="h6" gutterBottom>
          Stats Widgets C
        </Typography>
        <Grid container spacing={2} sx={{ mb: 4 }}>
          <Grid item xs={6} lg={4} xl={2}>
            <WidgetStatsC
              icon={<PeopleIcon sx={{ fontSize: 36 }} />}
              value="87.500"
              title="Visitors"
              progress={{ color: 'info', value: 75 }}
            />
          </Grid>
          <Grid item xs={6} lg={4} xl={2}>
            <WidgetStatsC
              icon={<PersonAddIcon sx={{ fontSize: 36 }} />}
              value="385"
              title="New Clients"
              progress={{ color: 'success', value: 75 }}
            />
          </Grid>
          <Grid item xs={6} lg={4} xl={2}>
            <WidgetStatsC
              icon={<ShoppingBasketIcon sx={{ fontSize: 36 }} />}
              value="1238"
              title="Products sold"
              progress={{ color: 'warning', value: 75 }}
            />
          </Grid>
          <Grid item xs={6} lg={4} xl={2}>
            <WidgetStatsC
              icon={<PieChartIcon sx={{ fontSize: 36 }} />}
              value="28%"
              title="Returning Visitors"
              progress={{ color: 'primary', value: 75 }}
            />
          </Grid>
          <Grid item xs={6} lg={4} xl={2}>
            <WidgetStatsC
              icon={<SpeedIcon sx={{ fontSize: 36 }} />}
              value="5:34:11"
              title="Avg. Time"
              progress={{ color: 'error', value: 75 }}
            />
          </Grid>
          <Grid item xs={6} lg={4} xl={2}>
            <WidgetStatsC
              icon={<ChatIcon sx={{ fontSize: 36 }} />}
              value="972"
              title="Comments"
              progress={{ color: 'info', value: 75 }}
            />
          </Grid>
        </Grid>

        <Typography variant="h6" gutterBottom>
          Stats Widgets C (Inverse)
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6} lg={4} xl={2}>
            <WidgetStatsC
              color="info"
              icon={<PeopleIcon sx={{ fontSize: 36 }} />}
              value="87.500"
              title="Visitors"
              inverse
              progress={{ value: 75 }}
            />
          </Grid>
          <Grid item xs={6} lg={4} xl={2}>
            <WidgetStatsC
              color="success"
              icon={<PersonAddIcon sx={{ fontSize: 36 }} />}
              value="385"
              title="New Clients"
              inverse
              progress={{ value: 75 }}
            />
          </Grid>
          <Grid item xs={6} lg={4} xl={2}>
            <WidgetStatsC
              color="warning"
              icon={<ShoppingBasketIcon sx={{ fontSize: 36 }} />}
              value="1238"
              title="Products sold"
              inverse
              progress={{ value: 75 }}
            />
          </Grid>
          <Grid item xs={6} lg={4} xl={2}>
            <WidgetStatsC
              color="primary"
              icon={<PieChartIcon sx={{ fontSize: 36 }} />}
              value="28%"
              title="Returning Visitors"
              inverse
              progress={{ value: 75 }}
            />
          </Grid>
          <Grid item xs={6} lg={4} xl={2}>
            <WidgetStatsC
              color="error"
              icon={<SpeedIcon sx={{ fontSize: 36 }} />}
              value="5:34:11"
              title="Avg. Time"
              inverse
              progress={{ value: 75 }}
            />
          </Grid>
          <Grid item xs={6} lg={4} xl={2}>
            <WidgetStatsC
              color="info"
              icon={<ChatIcon sx={{ fontSize: 36 }} />}
              value="972"
              title="Comments"
              inverse
              progress={{ value: 75 }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Widgets
