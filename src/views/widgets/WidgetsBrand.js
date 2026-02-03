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

const BrandCard = ({ icon, values, bgColor }) => (
  <Card sx={{ bgcolor: bgColor, color: 'white' }}>
    <CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>{icon}</Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          borderTop: '1px solid rgba(255,255,255,0.2)',
          pt: 2,
        }}
      >
        {values.map((item, index) => (
          <Box key={index} sx={{ textAlign: 'center' }}>
            <Typography variant="h6">{item.value}</Typography>
            <Typography variant="caption" sx={{ opacity: 0.8 }}>
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </CardContent>
  </Card>
)

const WidgetsBrand = (props) => {
  return (
    <Grid container spacing={3} sx={{ mb: props.className ? 3 : 0 }}>
      <Grid size={{ xs: 12, sm: 6, xl: 4, xxl: 3 }}>
        <BrandCard
          icon={<FacebookIcon sx={{ fontSize: 52 }} />}
          values={[
            { title: 'friends', value: '89K' },
            { title: 'feeds', value: '459' },
          ]}
          bgColor="#3b5998"
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, xl: 4, xxl: 3 }}>
        <BrandCard
          icon={<TwitterIcon sx={{ fontSize: 52 }} />}
          values={[
            { title: 'followers', value: '973K' },
            { title: 'tweets', value: '1,792' },
          ]}
          bgColor="#00aced"
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, xl: 4, xxl: 3 }}>
        <BrandCard
          icon={<LinkedInIcon sx={{ fontSize: 52 }} />}
          values={[
            { title: 'contacts', value: '500' },
            { title: 'feeds', value: '1,292' },
          ]}
          bgColor="#4875b4"
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, xl: 4, xxl: 3 }}>
        <BrandCard
          icon={<CalendarMonthIcon sx={{ fontSize: 52 }} />}
          values={[
            { title: 'events', value: '12+' },
            { title: 'meetings', value: '4' },
          ]}
          bgColor="#f9b115"
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
