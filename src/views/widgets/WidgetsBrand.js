import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
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

const BrandWidget = ({ icon, bgColor, values, chartData, withCharts }) => {
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
    <Card sx={{ bgcolor: bgColor, color: 'white', position: 'relative', overflow: 'hidden' }}>
      {withCharts && (
        <Box sx={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.3 }}>
          <Line data={chartData} options={chartOptions} />
        </Box>
      )}
      <CardContent sx={{ position: 'relative', zIndex: 1, textAlign: 'center', py: 3 }}>
        {icon}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mt: 2 }}>
          {values.map((item, index) => (
            <Box key={index}>
              <Typography variant="h5" fontWeight="600">
                {item.value}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                {item.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  )
}

BrandWidget.propTypes = {
  icon: PropTypes.node.isRequired,
  bgColor: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
  chartData: PropTypes.object,
  withCharts: PropTypes.bool,
}

const WidgetsBrand = (props) => {
  const brands = [
    {
      icon: <FacebookIcon sx={{ fontSize: 52 }} />,
      bgColor: '#3b5998',
      values: [
        { title: 'friends', value: '89K' },
        { title: 'feeds', value: '459' },
      ],
      chartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
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
      bgColor: '#00aced',
      values: [
        { title: 'followers', value: '973k' },
        { title: 'tweets', value: '1.792' },
      ],
      chartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
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
      bgColor: '#4875b4',
      values: [
        { title: 'contacts', value: '500' },
        { title: 'feeds', value: '1.292' },
      ],
      chartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
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
      bgColor: '#f9b115',
      values: [
        { title: 'events', value: '12+' },
        { title: 'meetings', value: '4' },
      ],
      chartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
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
    <Box sx={props.sx}>
      <Grid container spacing={3}>
        {brands.map((brand, index) => (
          <Grid item xs={12} sm={6} xl={3} key={index}>
            <BrandWidget {...brand} withCharts={props.withCharts} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

WidgetsBrand.propTypes = {
  sx: PropTypes.object,
  withCharts: PropTypes.bool,
}

export default WidgetsBrand
