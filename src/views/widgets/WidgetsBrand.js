import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { SparkLineChart } from '@mui/x-charts/SparkLineChart'

const BrandWidget = ({ icon, color, values, chartData, withChart }) => {
  return (
    <Card sx={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
      <Box
        sx={{
          bgcolor: color,
          color: 'white',
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          minHeight: 100,
        }}
      >
        {withChart && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.3,
            }}
          >
            <SparkLineChart data={chartData} height={100} curve="natural" area />
          </Box>
        )}
        <Box sx={{ position: 'relative', zIndex: 1 }}>{icon}</Box>
      </Box>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
          {values.map((item, index) => (
            <Box key={index}>
              <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                {item.value}
              </Typography>
              <Typography variant="body2" color="text.secondary">
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
  color: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
  chartData: PropTypes.array,
  withChart: PropTypes.bool,
}

const WidgetsBrand = (props) => {
  return (
    <Grid container spacing={3} sx={{ mb: props.className ? 4 : 0 }}>
      <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
        <BrandWidget
          icon={<FacebookIcon sx={{ fontSize: 52 }} />}
          color="#3b5998"
          values={[
            { title: 'friends', value: '89K' },
            { title: 'feeds', value: '459' },
          ]}
          chartData={[65, 59, 84, 84, 51, 55, 40]}
          withChart={props.withCharts}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
        <BrandWidget
          icon={<TwitterIcon sx={{ fontSize: 52 }} />}
          color="#00aced"
          values={[
            { title: 'followers', value: '973k' },
            { title: 'tweets', value: '1.792' },
          ]}
          chartData={[1, 13, 9, 17, 34, 41, 38]}
          withChart={props.withCharts}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
        <BrandWidget
          icon={<LinkedInIcon sx={{ fontSize: 52 }} />}
          color="#4875b4"
          values={[
            { title: 'contacts', value: '500' },
            { title: 'feeds', value: '1.292' },
          ]}
          chartData={[78, 81, 80, 45, 34, 12, 40]}
          withChart={props.withCharts}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
        <BrandWidget
          icon={<CalendarMonthIcon sx={{ fontSize: 52 }} />}
          color="#f9b115"
          values={[
            { title: 'events', value: '12+' },
            { title: 'meetings', value: '4' },
          ]}
          chartData={[35, 23, 56, 22, 97, 23, 64]}
          withChart={props.withCharts}
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
