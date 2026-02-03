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
import { AreaChart, Area, ResponsiveContainer } from 'recharts'

const BrandWidget = ({ icon, bgColor, values, chartData, withCharts }) => {
  return (
    <Card sx={{ overflow: 'hidden', height: '100%' }}>
      <Box
        sx={{
          bgcolor: bgColor,
          color: 'white',
          p: 3,
          position: 'relative',
          minHeight: withCharts ? 120 : 'auto',
        }}
      >
        {withCharts && chartData && (
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
        <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>{icon}</Box>
      </Box>
      <CardContent sx={{ p: 0 }}>
        <Grid container>
          {values.map((item, index) => (
            <Grid
              size={6}
              key={index}
              sx={{
                textAlign: 'center',
                py: 2,
                borderRight: index === 0 ? 1 : 0,
                borderColor: 'divider',
              }}
            >
              <Typography variant="h6" fontWeight={600}>
                {item.value}
              </Typography>
              <Typography variant="caption" color="text.secondary" textTransform="uppercase">
                {item.title}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  )
}

BrandWidget.propTypes = {
  icon: PropTypes.node,
  bgColor: PropTypes.string,
  values: PropTypes.array,
  chartData: PropTypes.array,
  withCharts: PropTypes.bool,
}

const WidgetsBrand = (props) => {
  const facebookData = [
    { value: 65 },
    { value: 59 },
    { value: 84 },
    { value: 84 },
    { value: 51 },
    { value: 55 },
    { value: 40 },
  ]

  const twitterData = [
    { value: 1 },
    { value: 13 },
    { value: 9 },
    { value: 17 },
    { value: 34 },
    { value: 41 },
    { value: 38 },
  ]

  const linkedinData = [
    { value: 78 },
    { value: 81 },
    { value: 80 },
    { value: 45 },
    { value: 34 },
    { value: 12 },
    { value: 40 },
  ]

  const eventsData = [
    { value: 35 },
    { value: 23 },
    { value: 56 },
    { value: 22 },
    { value: 97 },
    { value: 23 },
    { value: 64 },
  ]

  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
        <BrandWidget
          icon={<FacebookIcon sx={{ fontSize: 52 }} />}
          bgColor="#3b5998"
          values={[
            { title: 'friends', value: '89K' },
            { title: 'feeds', value: '459' },
          ]}
          chartData={facebookData}
          withCharts={props.withCharts}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
        <BrandWidget
          icon={<TwitterIcon sx={{ fontSize: 52 }} />}
          bgColor="#00aced"
          values={[
            { title: 'followers', value: '973k' },
            { title: 'tweets', value: '1.792' },
          ]}
          chartData={twitterData}
          withCharts={props.withCharts}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
        <BrandWidget
          icon={<LinkedInIcon sx={{ fontSize: 52 }} />}
          bgColor="#4875b4"
          values={[
            { title: 'contacts', value: '500' },
            { title: 'feeds', value: '1.292' },
          ]}
          chartData={linkedinData}
          withCharts={props.withCharts}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
        <BrandWidget
          icon={<CalendarMonthIcon sx={{ fontSize: 52 }} />}
          bgColor="#f9b115"
          values={[
            { title: 'events', value: '12+' },
            { title: 'meetings', value: '4' },
          ]}
          chartData={eventsData}
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
