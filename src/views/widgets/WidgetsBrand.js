import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler)

const BrandWidget = ({ icon, values, color, chartData, withCharts }) => {
  const chartOptions = {
    elements: {
      line: { tension: 0.4 },
      point: { radius: 0, hitRadius: 10, hoverRadius: 4, hoverBorderWidth: 3 },
    },
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: { x: { display: false }, y: { display: false } },
  }

  return (
    <Card sx={{ height: '100%', overflow: 'hidden' }}>
      <Box
        sx={{
          bgcolor: color,
          color: 'white',
          py: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          minHeight: 100,
        }}
      >
        {withCharts && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.5,
            }}
          >
            <Line data={chartData} options={chartOptions} />
          </Box>
        )}
        <Box sx={{ position: 'relative', zIndex: 1 }}>{icon}</Box>
      </Box>
      <CardContent sx={{ display: 'flex', justifyContent: 'space-around', py: 2 }}>
        {values.map((item, index) => (
          <Box key={index} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" fontWeight={600}>
              {item.value}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.title}
            </Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  )
}

BrandWidget.propTypes = {
  icon: PropTypes.node.isRequired,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
  color: PropTypes.string.isRequired,
  chartData: PropTypes.object,
  withCharts: PropTypes.bool,
}

const WidgetsBrand = (props) => {
  const theme = useTheme()

  const brands = [
    {
      icon: <FacebookIcon sx={{ fontSize: 52 }} />,
      values: [
        { title: 'friends', value: '89K' },
        { title: 'feeds', value: '459' },
      ],
      color: '#3b5998',
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            backgroundColor: 'rgba(255,255,255,.1)',
            borderColor: 'rgba(255,255,255,.55)',
            pointHoverBackgroundColor: '#fff',
            borderWidth: 2,
            data: [65, 59, 84, 84, 51, 55, 40],
            fill: true,
          },
        ],
      },
    },
    {
      icon: <TwitterIcon sx={{ fontSize: 52 }} />,
      values: [
        { title: 'followers', value: '973k' },
        { title: 'tweets', value: '1.792' },
      ],
      color: '#00aced',
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            backgroundColor: 'rgba(255,255,255,.1)',
            borderColor: 'rgba(255,255,255,.55)',
            pointHoverBackgroundColor: '#fff',
            borderWidth: 2,
            data: [1, 13, 9, 17, 34, 41, 38],
            fill: true,
          },
        ],
      },
    },
    {
      icon: <LinkedInIcon sx={{ fontSize: 52 }} />,
      values: [
        { title: 'contacts', value: '500' },
        { title: 'feeds', value: '1.292' },
      ],
      color: '#4875b4',
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            backgroundColor: 'rgba(255,255,255,.1)',
            borderColor: 'rgba(255,255,255,.55)',
            pointHoverBackgroundColor: '#fff',
            borderWidth: 2,
            data: [78, 81, 80, 45, 34, 12, 40],
            fill: true,
          },
        ],
      },
    },
    {
      icon: <CalendarMonthIcon sx={{ fontSize: 52 }} />,
      values: [
        { title: 'events', value: '12+' },
        { title: 'meetings', value: '4' },
      ],
      color: theme.palette.warning.main,
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            backgroundColor: 'rgba(255,255,255,.1)',
            borderColor: 'rgba(255,255,255,.55)',
            pointHoverBackgroundColor: '#fff',
            borderWidth: 2,
            data: [35, 23, 56, 22, 97, 23, 64],
            fill: true,
          },
        ],
      },
    },
  ]

  return (
    <Grid container spacing={3} sx={props.sx}>
      {brands.map((brand, index) => (
        <Grid key={index} size={{ xs: 12, sm: 6, xl: 3 }}>
          <BrandWidget {...brand} withCharts={props.withCharts} />
        </Grid>
      ))}
    </Grid>
  )
}

WidgetsBrand.propTypes = {
  sx: PropTypes.object,
  withCharts: PropTypes.bool,
}

export default WidgetsBrand
