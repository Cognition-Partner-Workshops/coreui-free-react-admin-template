import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
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

const BrandCard = ({ icon: Icon, bgColor, values, chartData, withCharts }) => {
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
    <Card sx={{ overflow: 'hidden' }}>
      <Box
        sx={{
          bgcolor: bgColor,
          color: 'white',
          p: 3,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 100,
        }}
      >
        {withCharts && (
          <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.3 }}>
            <Line data={chartData} options={chartOptions} />
          </Box>
        )}
        <Icon sx={{ fontSize: 52, position: 'relative', zIndex: 1 }} />
      </Box>
      <CardContent sx={{ display: 'flex', justifyContent: 'space-around', py: 2 }}>
        {values.map((item, index) => (
          <Box key={index} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" fontWeight="bold">
              {item.value}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {item.title}
            </Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  )
}

BrandCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  bgColor: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
  chartData: PropTypes.object,
  withCharts: PropTypes.bool,
}

const WidgetsBrand = (props) => {
  const createChartData = (data) => ({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data,
        fill: true,
      },
    ],
  })

  return (
    <Grid container spacing={3} sx={{ mb: props.className ? 3 : 0 }}>
      <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
        <BrandCard
          icon={FacebookIcon}
          bgColor="#3b5998"
          values={[
            { title: 'friends', value: '89K' },
            { title: 'feeds', value: '459' },
          ]}
          chartData={createChartData([65, 59, 84, 84, 51, 55, 40])}
          withCharts={props.withCharts}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
        <BrandCard
          icon={TwitterIcon}
          bgColor="#00aced"
          values={[
            { title: 'followers', value: '973k' },
            { title: 'tweets', value: '1.792' },
          ]}
          chartData={createChartData([1, 13, 9, 17, 34, 41, 38])}
          withCharts={props.withCharts}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
        <BrandCard
          icon={LinkedInIcon}
          bgColor="#4875b4"
          values={[
            { title: 'contacts', value: '500' },
            { title: 'feeds', value: '1.292' },
          ]}
          chartData={createChartData([78, 81, 80, 45, 34, 12, 40])}
          withCharts={props.withCharts}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
        <BrandCard
          icon={CalendarMonthIcon}
          bgColor="#ed6c02"
          values={[
            { title: 'events', value: '12+' },
            { title: 'meetings', value: '4' },
          ]}
          chartData={createChartData([35, 23, 56, 22, 97, 23, 64])}
          withCharts={props.withCharts}
        />
      </Grid>
    </Grid>
  )
}

WidgetsBrand.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
}

export default WidgetsBrand
