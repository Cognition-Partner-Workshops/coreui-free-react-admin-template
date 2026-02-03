import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EventIcon from '@mui/icons-material/Event'
import { LineChart, Line, ResponsiveContainer, Area, AreaChart } from 'recharts'

const BrandWidget = ({ icon, bgColor, values, chartData, withChart }) => {
  return (
    <Card sx={{ height: '100%', overflow: 'hidden' }}>
      <Box
        sx={{
          backgroundColor: bgColor,
          color: 'white',
          position: 'relative',
          py: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 100,
        }}
      >
        {withChart && chartData && (
          <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.3 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="rgba(255,255,255,0.55)"
                  fill="rgba(255,255,255,0.1)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </Box>
        )}
        <Box sx={{ position: 'relative', zIndex: 1 }}>{icon}</Box>
      </Box>
      <CardContent sx={{ display: 'flex', justifyContent: 'space-around', py: 2 }}>
        {values.map((item, index) => (
          <Box key={index} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
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

const WidgetsBrand = (props) => {
  const facebookData = [
    { name: 'Jan', value: 65 },
    { name: 'Feb', value: 59 },
    { name: 'Mar', value: 84 },
    { name: 'Apr', value: 84 },
    { name: 'May', value: 51 },
    { name: 'Jun', value: 55 },
    { name: 'Jul', value: 40 },
  ]

  const twitterData = [
    { name: 'Jan', value: 1 },
    { name: 'Feb', value: 13 },
    { name: 'Mar', value: 9 },
    { name: 'Apr', value: 17 },
    { name: 'May', value: 34 },
    { name: 'Jun', value: 41 },
    { name: 'Jul', value: 38 },
  ]

  const linkedinData = [
    { name: 'Jan', value: 78 },
    { name: 'Feb', value: 81 },
    { name: 'Mar', value: 80 },
    { name: 'Apr', value: 45 },
    { name: 'May', value: 34 },
    { name: 'Jun', value: 12 },
    { name: 'Jul', value: 40 },
  ]

  const eventsData = [
    { name: 'Jan', value: 35 },
    { name: 'Feb', value: 23 },
    { name: 'Mar', value: 56 },
    { name: 'Apr', value: 22 },
    { name: 'May', value: 97 },
    { name: 'Jun', value: 23 },
    { name: 'Jul', value: 64 },
  ]

  return (
    <Grid container spacing={3} sx={{ mb: props.className ? 4 : 0 }}>
      <Grid item xs={12} sm={6} xl={3}>
        <BrandWidget
          icon={<FacebookIcon sx={{ fontSize: 52 }} />}
          bgColor="#3b5998"
          values={[
            { title: 'friends', value: '89K' },
            { title: 'feeds', value: '459' },
          ]}
          chartData={facebookData}
          withChart={props.withCharts}
        />
      </Grid>
      <Grid item xs={12} sm={6} xl={3}>
        <BrandWidget
          icon={<TwitterIcon sx={{ fontSize: 52 }} />}
          bgColor="#00aced"
          values={[
            { title: 'followers', value: '973k' },
            { title: 'tweets', value: '1.792' },
          ]}
          chartData={twitterData}
          withChart={props.withCharts}
        />
      </Grid>
      <Grid item xs={12} sm={6} xl={3}>
        <BrandWidget
          icon={<LinkedInIcon sx={{ fontSize: 52 }} />}
          bgColor="#4875b4"
          values={[
            { title: 'contacts', value: '500' },
            { title: 'feeds', value: '1.292' },
          ]}
          chartData={linkedinData}
          withChart={props.withCharts}
        />
      </Grid>
      <Grid item xs={12} sm={6} xl={3}>
        <BrandWidget
          icon={<EventIcon sx={{ fontSize: 52 }} />}
          bgColor="#f9b115"
          values={[
            { title: 'events', value: '12+' },
            { title: 'meetings', value: '4' },
          ]}
          chartData={eventsData}
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
