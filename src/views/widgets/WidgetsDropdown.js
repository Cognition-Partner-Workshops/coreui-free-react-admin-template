import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import { useTheme } from '@mui/material/styles'
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

const WidgetCard = ({ color, value, change, changeDirection, title, chartData, chartType }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)

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
      line: { borderWidth: 1, tension: 0.4 },
      point: { radius: 4, hitRadius: 10, hoverRadius: 4 },
    },
  }

  const ChartComponent = chartType === 'bar' ? Bar : Line

  return (
    <Card sx={{ bgcolor: `${color}.main`, color: 'white' }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box>
            <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
              {value}{' '}
              <Typography component="span" variant="body2" sx={{ opacity: 0.8 }}>
                ({change}{' '}
                {changeDirection === 'down' ? (
                  <ArrowDownwardIcon fontSize="small" />
                ) : (
                  <ArrowUpwardIcon fontSize="small" />
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
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Action</MenuItem>
            <MenuItem onClick={handleClose}>Another action</MenuItem>
            <MenuItem onClick={handleClose}>Something else here...</MenuItem>
            <MenuItem disabled>Disabled action</MenuItem>
          </Menu>
        </Box>
        <Box sx={{ height: 70, mt: 2 }}>
          <ChartComponent data={chartData} options={chartOptions} />
        </Box>
      </CardContent>
    </Card>
  )
}

WidgetCard.propTypes = {
  color: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.string.isRequired,
  changeDirection: PropTypes.oneOf(['up', 'down']).isRequired,
  title: PropTypes.string.isRequired,
  chartData: PropTypes.object.isRequired,
  chartType: PropTypes.oneOf(['line', 'bar']),
}

const WidgetsDropdown = (props) => {
  const theme = useTheme()

  const lineChartData1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: 'rgba(255,255,255,.55)',
        pointBackgroundColor: theme.palette.primary.main,
        data: [65, 59, 84, 84, 51, 55, 40],
      },
    ],
  }

  const lineChartData2 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: 'rgba(255,255,255,.55)',
        pointBackgroundColor: theme.palette.info.main,
        data: [1, 18, 9, 17, 34, 22, 11],
      },
    ],
  }

  const lineChartData3 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        backgroundColor: 'rgba(255,255,255,.2)',
        borderColor: 'rgba(255,255,255,.55)',
        data: [78, 81, 80, 45, 34, 12, 40],
        fill: true,
      },
    ],
  }

  const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        backgroundColor: 'rgba(255,255,255,.2)',
        borderColor: 'rgba(255,255,255,.55)',
        data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98],
        barPercentage: 0.6,
      },
    ],
  }

  return (
    <Grid container spacing={3} sx={{ mb: props.className ? 3 : 0 }}>
      <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
        <WidgetCard
          color="primary"
          value="26K"
          change="-12.4%"
          changeDirection="down"
          title="Users"
          chartData={lineChartData1}
          chartType="line"
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
        <WidgetCard
          color="info"
          value="$6.200"
          change="40.9%"
          changeDirection="up"
          title="Income"
          chartData={lineChartData2}
          chartType="line"
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
        <WidgetCard
          color="warning"
          value="2.49%"
          change="84.7%"
          changeDirection="up"
          title="Conversion Rate"
          chartData={lineChartData3}
          chartType="line"
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
        <WidgetCard
          color="error"
          value="44K"
          change="-23.6%"
          changeDirection="down"
          title="Sessions"
          chartData={barChartData}
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
