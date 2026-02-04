import React from 'react'
import PropTypes from 'prop-types'
import { Box, Card, CardContent, Typography, Grid, useTheme } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EventIcon from '@mui/icons-material/Event'
import { LineChart, Line, ResponsiveContainer } from 'recharts'

const BrandWidget = ({ icon: Icon, iconBgColor, values, chartData, withChart }) => {
  const theme = useTheme()

  return (
    <Card
      sx={{
        overflow: 'hidden',
        transition: theme.transitions.create(['transform', 'box-shadow']),
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: theme.shadows[8],
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: iconBgColor,
          color: 'white',
          py: 3,
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
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
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="rgba(255,255,255,0.55)"
                  strokeWidth={2}
                  dot={false}
                  fill="rgba(255,255,255,0.1)"
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        )}
        <Icon sx={{ fontSize: 52, position: 'relative', zIndex: 1 }} />
      </Box>
      <CardContent sx={{ py: 2 }}>
        <Grid container spacing={2}>
          {values.map((item, index) => (
            <Grid size={6} key={index}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" fontWeight={600}>
                  {item.value}
                </Typography>
                <Typography variant="body2" color="text.secondary" textTransform="uppercase">
                  {item.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  )
}

BrandWidget.propTypes = {
  icon: PropTypes.elementType.isRequired,
  iconBgColor: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  chartData: PropTypes.array,
  withChart: PropTypes.bool,
}

const WidgetsBrand = (props) => {
  const chartData1 = [
    { value: 65 },
    { value: 59 },
    { value: 84 },
    { value: 84 },
    { value: 51 },
    { value: 55 },
    { value: 40 },
  ]

  const chartData2 = [
    { value: 1 },
    { value: 13 },
    { value: 9 },
    { value: 17 },
    { value: 34 },
    { value: 41 },
    { value: 38 },
  ]

  const chartData3 = [
    { value: 78 },
    { value: 81 },
    { value: 80 },
    { value: 45 },
    { value: 34 },
    { value: 12 },
    { value: 40 },
  ]

  const chartData4 = [
    { value: 35 },
    { value: 23 },
    { value: 56 },
    { value: 22 },
    { value: 97 },
    { value: 23 },
    { value: 64 },
  ]

  return (
    <Grid container spacing={3} sx={props.className ? { mb: 3 } : {}}>
      <Grid size={{ xs: 12, sm: 6, xl: 4, xxl: 3 }}>
        <BrandWidget
          icon={FacebookIcon}
          iconBgColor="#3b5998"
          values={[
            { title: 'friends', value: '89K' },
            { title: 'feeds', value: '459' },
          ]}
          chartData={chartData1}
          withChart={props.withCharts}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, xl: 4, xxl: 3 }}>
        <BrandWidget
          icon={TwitterIcon}
          iconBgColor="#00aced"
          values={[
            { title: 'followers', value: '973k' },
            { title: 'tweets', value: '1.792' },
          ]}
          chartData={chartData2}
          withChart={props.withCharts}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, xl: 4, xxl: 3 }}>
        <BrandWidget
          icon={LinkedInIcon}
          iconBgColor="#4875b4"
          values={[
            { title: 'contacts', value: '500' },
            { title: 'feeds', value: '1.292' },
          ]}
          chartData={chartData3}
          withChart={props.withCharts}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, xl: 4, xxl: 3 }}>
        <BrandWidget
          icon={EventIcon}
          iconBgColor="#f9b115"
          values={[
            { title: 'events', value: '12+' },
            { title: 'meetings', value: '4' },
          ]}
          chartData={chartData4}
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
