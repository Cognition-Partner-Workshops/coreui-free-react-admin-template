import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import { useTheme } from '@mui/material/styles'
import { AreaChart, Area, BarChart, Bar, LineChart, Line, ResponsiveContainer } from 'recharts'
import PersonIcon from '@mui/icons-material/Person'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

import WidgetsDropdown from './WidgetsDropdown'

const Widgets = () => {
  const theme = useTheme()

  const generateData = () => {
    return Array.from({ length: 7 }, () => ({
      value: Math.floor(Math.random() * 100) + 20,
    }))
  }

  const brandWidgets = [
    {
      name: 'Facebook',
      icon: <FacebookIcon sx={{ fontSize: 40 }} />,
      color: '#3b5998',
      value: '89k',
      label: 'friends',
      feeds: '459',
    },
    {
      name: 'Twitter',
      icon: <TwitterIcon sx={{ fontSize: 40 }} />,
      color: '#00aced',
      value: '973k',
      label: 'followers',
      tweets: '1.792',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedInIcon sx={{ fontSize: 40 }} />,
      color: '#4875b4',
      value: '500+',
      label: 'contacts',
      feeds: '292',
    },
  ]

  const progressWidgets = [
    { title: 'Widget 01', value: 25, color: 'primary' },
    { title: 'Widget 02', value: 50, color: 'warning' },
    { title: 'Widget 03', value: 75, color: 'error' },
    { title: 'Widget 04', value: 100, color: 'info' },
  ]

  return (
    <>
      <WidgetsDropdown />

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Brand Card Widgets
      </Typography>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {brandWidgets.map((widget, index) => (
          <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={index}>
            <Card>
              <Box
                sx={{
                  bgcolor: widget.color,
                  color: 'white',
                  p: 3,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                {widget.icon}
                <Box sx={{ textAlign: 'right' }}>
                  <Typography variant="h4" fontWeight={600}>
                    {widget.value}
                  </Typography>
                  <Typography variant="body2">{widget.label}</Typography>
                </Box>
              </Box>
              <CardContent>
                <Box sx={{ height: 70 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={generateData()}>
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke={widget.color}
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Progress Widgets
      </Typography>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {progressWidgets.map((widget, index) => (
          <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={index}>
            <Card>
              <CardContent>
                <Typography variant="subtitle2" gutterBottom>
                  {widget.title}
                </Typography>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  {widget.value}%
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={widget.value}
                  color={widget.color}
                  sx={{ height: 8, borderRadius: 4 }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Chart Widgets
      </Typography>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardHeader title="Area Chart Widget" />
            <CardContent>
              <Box sx={{ height: 200 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={generateData()}>
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke={theme.palette.primary.main}
                      fill={theme.palette.primary.light}
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardHeader title="Bar Chart Widget" />
            <CardContent>
              <Box sx={{ height: 200 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={generateData()}>
                    <Bar dataKey="value" fill={theme.palette.info.main} />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default Widgets
