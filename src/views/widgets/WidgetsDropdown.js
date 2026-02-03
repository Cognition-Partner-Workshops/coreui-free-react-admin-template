import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useTheme } from '@mui/material/styles'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { LineChart, Line, BarChart, Bar, ResponsiveContainer, Area, AreaChart } from 'recharts'

const StatWidget = ({ title, value, change, changeType, color, chartData, chartType }) => {
  const theme = useTheme()
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const colorMap = {
    primary: theme.palette.primary.main,
    info: theme.palette.info.main,
    warning: theme.palette.warning.main,
    danger: theme.palette.error.main,
  }

  const bgColor = colorMap[color] || theme.palette.primary.main

  return (
    <Card sx={{ backgroundColor: bgColor, color: 'white', height: '100%' }}>
      <CardContent sx={{ pb: 0 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box>
            <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
              {value}{' '}
              <Typography component="span" variant="body2" sx={{ opacity: 0.8 }}>
                ({change}{' '}
                {changeType === 'down' ? (
                  <ArrowDownwardIcon sx={{ fontSize: 14 }} />
                ) : (
                  <ArrowUpwardIcon sx={{ fontSize: 14 }} />
                )}
                )
              </Typography>
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mt: 0.5 }}>
              {title}
            </Typography>
          </Box>
          <IconButton onClick={handleClick} sx={{ color: 'white' }}>
            <MoreVertIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Action</MenuItem>
            <MenuItem onClick={handleClose}>Another action</MenuItem>
            <MenuItem onClick={handleClose}>Something else here...</MenuItem>
            <MenuItem disabled>Disabled action</MenuItem>
          </Menu>
        </Box>
      </CardContent>
      <Box sx={{ height: 70, mt: 2, px: 2 }}>
        <ResponsiveContainer width="100%" height="100%">
          {chartType === 'bar' ? (
            <BarChart data={chartData}>
              <Bar dataKey="value" fill="rgba(255,255,255,0.3)" />
            </BarChart>
          ) : chartType === 'area' ? (
            <AreaChart data={chartData}>
              <Area
                type="monotone"
                dataKey="value"
                stroke="rgba(255,255,255,0.55)"
                fill="rgba(255,255,255,0.2)"
                strokeWidth={2}
              />
            </AreaChart>
          ) : (
            <LineChart data={chartData}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="rgba(255,255,255,0.55)"
                strokeWidth={2}
                dot={{ fill: 'white', r: 3 }}
              />
            </LineChart>
          )}
        </ResponsiveContainer>
      </Box>
    </Card>
  )
}

const WidgetsDropdown = (props) => {
  const usersData = [
    { name: 'Jan', value: 65 },
    { name: 'Feb', value: 59 },
    { name: 'Mar', value: 84 },
    { name: 'Apr', value: 84 },
    { name: 'May', value: 51 },
    { name: 'Jun', value: 55 },
    { name: 'Jul', value: 40 },
  ]

  const incomeData = [
    { name: 'Jan', value: 1 },
    { name: 'Feb', value: 18 },
    { name: 'Mar', value: 9 },
    { name: 'Apr', value: 17 },
    { name: 'May', value: 34 },
    { name: 'Jun', value: 22 },
    { name: 'Jul', value: 11 },
  ]

  const conversionData = [
    { name: 'Jan', value: 78 },
    { name: 'Feb', value: 81 },
    { name: 'Mar', value: 80 },
    { name: 'Apr', value: 45 },
    { name: 'May', value: 34 },
    { name: 'Jun', value: 12 },
    { name: 'Jul', value: 40 },
  ]

  const sessionsData = [
    { name: 'Jan', value: 78 },
    { name: 'Feb', value: 81 },
    { name: 'Mar', value: 80 },
    { name: 'Apr', value: 45 },
    { name: 'May', value: 34 },
    { name: 'Jun', value: 12 },
    { name: 'Jul', value: 40 },
    { name: 'Aug', value: 85 },
    { name: 'Sep', value: 65 },
    { name: 'Oct', value: 23 },
    { name: 'Nov', value: 12 },
    { name: 'Dec', value: 98 },
  ]

  return (
    <Grid container spacing={3} sx={{ mb: props.className ? 4 : 0 }}>
      <Grid item xs={12} sm={6} xl={3}>
        <StatWidget
          title="Users"
          value="26K"
          change="-12.4%"
          changeType="down"
          color="primary"
          chartData={usersData}
          chartType="line"
        />
      </Grid>
      <Grid item xs={12} sm={6} xl={3}>
        <StatWidget
          title="Income"
          value="$6.200"
          change="40.9%"
          changeType="up"
          color="info"
          chartData={incomeData}
          chartType="line"
        />
      </Grid>
      <Grid item xs={12} sm={6} xl={3}>
        <StatWidget
          title="Conversion Rate"
          value="2.49%"
          change="84.7%"
          changeType="up"
          color="warning"
          chartData={conversionData}
          chartType="area"
        />
      </Grid>
      <Grid item xs={12} sm={6} xl={3}>
        <StatWidget
          title="Sessions"
          value="44K"
          change="-23.6%"
          changeType="down"
          color="danger"
          chartData={sessionsData}
          chartType="bar"
        />
      </Grid>
    </Grid>
  )
}

WidgetsDropdown.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
}

export default WidgetsDropdown
