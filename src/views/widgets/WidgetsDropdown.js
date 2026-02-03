import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { LineChart, Line, BarChart, Bar, ResponsiveContainer, Area, AreaChart } from 'recharts'

const StatWidget = ({ color, value, change, changeType, title, chartData, chartType }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const colorMap = {
    primary: '#321fdb',
    info: '#39f',
    warning: '#f9b115',
    error: '#e55353',
  }

  return (
    <Card sx={{ bgcolor: colorMap[color], color: 'white', height: '100%' }}>
      <CardContent sx={{ pb: 0 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box>
            <Typography variant="h4" component="div" fontWeight={600}>
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
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              {title}
            </Typography>
          </Box>
          <IconButton size="small" sx={{ color: 'white' }} onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Action</MenuItem>
            <MenuItem onClick={handleClose}>Another action</MenuItem>
            <MenuItem onClick={handleClose}>Something else here...</MenuItem>
            <MenuItem disabled>Disabled action</MenuItem>
          </Menu>
        </Box>
      </CardContent>
      <Box sx={{ height: 70, mt: 2 }}>
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
              />
            </AreaChart>
          ) : (
            <LineChart data={chartData}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="rgba(255,255,255,0.55)"
                strokeWidth={2}
                dot={{ fill: colorMap[color], strokeWidth: 2 }}
              />
            </LineChart>
          )}
        </ResponsiveContainer>
      </Box>
    </Card>
  )
}

StatWidget.propTypes = {
  color: PropTypes.string,
  value: PropTypes.string,
  change: PropTypes.string,
  changeType: PropTypes.string,
  title: PropTypes.string,
  chartData: PropTypes.array,
  chartType: PropTypes.string,
}

const WidgetsDropdown = () => {
  const usersData = [
    { value: 65 },
    { value: 59 },
    { value: 84 },
    { value: 84 },
    { value: 51 },
    { value: 55 },
    { value: 40 },
  ]

  const incomeData = [
    { value: 1 },
    { value: 18 },
    { value: 9 },
    { value: 17 },
    { value: 34 },
    { value: 22 },
    { value: 11 },
  ]

  const conversionData = [
    { value: 78 },
    { value: 81 },
    { value: 80 },
    { value: 45 },
    { value: 34 },
    { value: 12 },
    { value: 40 },
  ]

  const sessionsData = [
    { value: 78 },
    { value: 81 },
    { value: 80 },
    { value: 45 },
    { value: 34 },
    { value: 12 },
    { value: 40 },
    { value: 85 },
    { value: 65 },
    { value: 23 },
    { value: 12 },
    { value: 98 },
    { value: 34 },
    { value: 84 },
    { value: 67 },
    { value: 82 },
  ]

  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
        <StatWidget
          color="primary"
          value="26K"
          change="-12.4%"
          changeType="down"
          title="Users"
          chartData={usersData}
          chartType="line"
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
        <StatWidget
          color="info"
          value="$6.200"
          change="40.9%"
          changeType="up"
          title="Income"
          chartData={incomeData}
          chartType="line"
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
        <StatWidget
          color="warning"
          value="2.49%"
          change="84.7%"
          changeType="up"
          title="Conversion Rate"
          chartData={conversionData}
          chartType="area"
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
        <StatWidget
          color="error"
          value="44K"
          change="-23.6%"
          changeType="down"
          title="Sessions"
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
