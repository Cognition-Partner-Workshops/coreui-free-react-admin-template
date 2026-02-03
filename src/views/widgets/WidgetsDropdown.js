import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Line, Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Filler,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Filler)

const StatWidget = ({ title, value, change, changeType, color, chartData, chartType }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const chartOptions = {
    plugins: { legend: { display: false } },
    maintainAspectRatio: false,
    scales: {
      x: { display: false },
      y: { display: false },
    },
    elements: {
      line: { borderWidth: 2, tension: 0.4 },
      point: { radius: 0, hitRadius: 10, hoverRadius: 4 },
    },
  }

  return (
    <Card sx={{ bgcolor: color, color: 'white', height: '100%' }}>
      <CardContent sx={{ pb: 0 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box>
            <Typography variant="h4" component="div" fontWeight={600}>
              {value}{' '}
              <Typography component="span" variant="body2" sx={{ opacity: 0.8 }}>
                ({change}{' '}
                {changeType === 'down' ? (
                  <ArrowDownwardIcon fontSize="small" />
                ) : (
                  <ArrowUpwardIcon fontSize="small" />
                )}
                )
              </Typography>
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mt: 0.5 }}>
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
      <Box sx={{ height: 70, mt: 2, px: 2 }}>
        {chartType === 'bar' ? (
          <Bar data={chartData} options={chartOptions} />
        ) : (
          <Line data={chartData} options={chartOptions} />
        )}
      </Box>
    </Card>
  )
}

StatWidget.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.string.isRequired,
  changeType: PropTypes.oneOf(['up', 'down']).isRequired,
  color: PropTypes.string.isRequired,
  chartData: PropTypes.object.isRequired,
  chartType: PropTypes.oneOf(['line', 'bar']),
}

const WidgetsDropdown = (props) => {
  const theme = useTheme()

  const widgets = [
    {
      title: 'Users',
      value: '26K',
      change: '-12.4%',
      changeType: 'down',
      color: theme.palette.primary.main,
      chartType: 'line',
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Users',
            backgroundColor: 'transparent',
            borderColor: 'rgba(255,255,255,.55)',
            pointBackgroundColor: theme.palette.primary.main,
            data: [65, 59, 84, 84, 51, 55, 40],
          },
        ],
      },
    },
    {
      title: 'Income',
      value: '$6.200',
      change: '40.9%',
      changeType: 'up',
      color: theme.palette.info.main,
      chartType: 'line',
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Income',
            backgroundColor: 'transparent',
            borderColor: 'rgba(255,255,255,.55)',
            pointBackgroundColor: theme.palette.info.main,
            data: [1, 18, 9, 17, 34, 22, 11],
          },
        ],
      },
    },
    {
      title: 'Conversion Rate',
      value: '2.49%',
      change: '84.7%',
      changeType: 'up',
      color: theme.palette.warning.main,
      chartType: 'line',
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Conversion',
            backgroundColor: 'rgba(255,255,255,.2)',
            borderColor: 'rgba(255,255,255,.55)',
            data: [78, 81, 80, 45, 34, 12, 40],
            fill: true,
          },
        ],
      },
    },
    {
      title: 'Sessions',
      value: '44K',
      change: '-23.6%',
      changeType: 'down',
      color: theme.palette.error.main,
      chartType: 'bar',
      chartData: {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
          'Jan',
          'Feb',
          'Mar',
          'Apr',
        ],
        datasets: [
          {
            label: 'Sessions',
            backgroundColor: 'rgba(255,255,255,.2)',
            borderColor: 'rgba(255,255,255,.55)',
            data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
            barPercentage: 0.6,
          },
        ],
      },
    },
  ]

  return (
    <Grid container spacing={3} sx={props.sx}>
      {widgets.map((widget, index) => (
        <Grid key={index} size={{ xs: 12, sm: 6, xl: 3 }}>
          <StatWidget {...widget} />
        </Grid>
      ))}
    </Grid>
  )
}

WidgetsDropdown.propTypes = {
  sx: PropTypes.object,
  withCharts: PropTypes.bool,
}

export default WidgetsDropdown
