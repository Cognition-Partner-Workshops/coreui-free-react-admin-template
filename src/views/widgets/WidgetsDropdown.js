import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import { AreaChart, Area, ResponsiveContainer } from 'recharts'
import PersonIcon from '@mui/icons-material/Person'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

const WidgetsDropdown = ({ className }) => {
  const theme = useTheme()

  const generateData = () => {
    return Array.from({ length: 7 }, () => ({
      value: Math.floor(Math.random() * 100) + 20,
    }))
  }

  const widgets = [
    {
      title: 'Users',
      value: '26K',
      change: '-12.4%',
      color: theme.palette.primary.main,
      bgColor: theme.palette.primary.light,
      icon: <PersonIcon />,
      data: generateData(),
    },
    {
      title: 'Income',
      value: '$6,200',
      change: '40.9%',
      color: theme.palette.info.main,
      bgColor: theme.palette.info.light,
      icon: <AttachMoneyIcon />,
      data: generateData(),
    },
    {
      title: 'Conversion Rate',
      value: '2.49%',
      change: '84.7%',
      color: theme.palette.warning.main,
      bgColor: theme.palette.warning.light,
      icon: <TrendingUpIcon />,
      data: generateData(),
    },
    {
      title: 'Sessions',
      value: '44K',
      change: '-23.6%',
      color: theme.palette.error.main,
      bgColor: theme.palette.error.light,
      icon: <AccessTimeIcon />,
      data: generateData(),
    },
  ]

  return (
    <Grid container spacing={3} sx={{ mb: 4 }} className={className}>
      {widgets.map((widget, index) => (
        <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={index}>
          <Card
            sx={{
              bgcolor: widget.color,
              color: 'white',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <CardContent sx={{ pb: 0 }}>
              <Box
                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}
              >
                <Box>
                  <Typography variant="h4" fontWeight={600}>
                    {widget.value}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    {widget.title}
                  </Typography>
                </Box>
                <Box sx={{ opacity: 0.5 }}>{widget.icon}</Box>
              </Box>
            </CardContent>
            <Box sx={{ height: 70, mt: 2 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={widget.data}>
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="rgba(255,255,255,0.5)"
                    fill="rgba(255,255,255,0.2)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

WidgetsDropdown.propTypes = {
  className: PropTypes.string,
}

export default WidgetsDropdown
