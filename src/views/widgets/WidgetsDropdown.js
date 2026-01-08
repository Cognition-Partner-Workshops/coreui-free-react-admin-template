import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@mui/material/styles'
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

const StatsWidget = ({
  color,
  value,
  change,
  changeIcon,
  title,
  chartData,
  chartType = 'line',
}) => {
  const theme = useTheme()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

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
    <Card
      sx={{ bgcolor: `${color}.main`, color: 'white', position: 'relative', overflow: 'hidden' }}
    >
      <CardContent sx={{ pb: 0 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box>
            <Typography variant="h4" component="div" fontWeight="600">
              {value}{' '}
              <Typography component="span" variant="body2" sx={{ opacity: 0.8 }}>
                ({change} {changeIcon})
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
      <Box sx={{ height: 70, mt: 2, px: 2 }}>
        {chartType === 'line' ? (
          <Line data={chartData} options={chartOptions} />
        ) : (
          <Bar data={chartData} options={chartOptions} />
        )}
      </Box>
    </Card>
  )
}

StatsWidget.propTypes = {
  color: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.string.isRequired,
  changeIcon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  chartData: PropTypes.object.isRequired,
  chartType: PropTypes.string,
}

const WidgetsDropdown = (props) => {
  const theme = useTheme()

  const widgets = [
    {
      color: 'primary',
      value: '26K',
      change: '-12.4%',
      changeIcon: <ArrowDownwardIcon fontSize="small" />,
      title: 'Users',
      chartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            backgroundColor: 'transparent',
            borderColor: 'rgba(255,255,255,.55)',
            pointBackgroundColor: theme.palette.primary.main,
            data: [65, 59, 84, 84, 51, 55, 40],
          },
        ],
      },
    },
    {
      color: 'info',
      value: '$6.200',
      change: '40.9%',
      changeIcon: <ArrowUpwardIcon fontSize="small" />,
      title: 'Income',
      chartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            backgroundColor: 'transparent',
            borderColor: 'rgba(255,255,255,.55)',
            pointBackgroundColor: theme.palette.info.main,
            data: [1, 18, 9, 17, 34, 22, 11],
          },
        ],
      },
    },
    {
      color: 'warning',
      value: '2.49%',
      change: '84.7%',
      changeIcon: <ArrowUpwardIcon fontSize="small" />,
      title: 'Conversion Rate',
      chartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            backgroundColor: 'rgba(255,255,255,.2)',
            borderColor: 'rgba(255,255,255,.55)',
            data: [78, 81, 80, 45, 34, 12, 40],
            fill: true,
          },
        ],
      },
    },
    {
      color: 'error',
      value: '44K',
      change: '-23.6%',
      changeIcon: <ArrowDownwardIcon fontSize="small" />,
      title: 'Sessions',
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
        ],
        datasets: [
          {
            backgroundColor: 'rgba(255,255,255,.2)',
            borderColor: 'rgba(255,255,255,.55)',
            data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98],
            barPercentage: 0.6,
          },
        ],
      },
    },
  ]

  return (
    <Box sx={props.sx}>
      <Grid container spacing={3}>
        {widgets.map((widget, index) => (
          <Grid item xs={12} sm={6} xl={3} key={index}>
            <StatsWidget {...widget} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

WidgetsDropdown.propTypes = {
  sx: PropTypes.object,
  withCharts: PropTypes.bool,
}

export default WidgetsDropdown
