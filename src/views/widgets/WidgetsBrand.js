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
import EventIcon from '@mui/icons-material/Event'
import { SparkLineChart } from '@mui/x-charts/SparkLineChart'

const WidgetsBrand = (props) => {
  const brands = [
    {
      id: 'facebook',
      icon: <FacebookIcon sx={{ fontSize: 52, color: 'white' }} />,
      color: '#3b5998',
      values: [
        { title: 'friends', value: '89K' },
        { title: 'feeds', value: '459' },
      ],
      data: [65, 59, 84, 84, 51, 55, 40],
    },
    {
      id: 'twitter',
      icon: <TwitterIcon sx={{ fontSize: 52, color: 'white' }} />,
      color: '#00aced',
      values: [
        { title: 'followers', value: '973k' },
        { title: 'tweets', value: '1.792' },
      ],
      data: [1, 13, 9, 17, 34, 41, 38],
    },
    {
      id: 'linkedin',
      icon: <LinkedInIcon sx={{ fontSize: 52, color: 'white' }} />,
      color: '#4875b4',
      values: [
        { title: 'contacts', value: '500' },
        { title: 'feeds', value: '1.292' },
      ],
      data: [78, 81, 80, 45, 34, 12, 40],
    },
    {
      id: 'events',
      icon: <EventIcon sx={{ fontSize: 52, color: 'white' }} />,
      color: '#f9b115',
      values: [
        { title: 'events', value: '12+' },
        { title: 'meetings', value: '4' },
      ],
      data: [35, 23, 56, 22, 97, 23, 64],
    },
  ]

  return (
    <Grid container spacing={3} sx={{ mb: 4, ...props.sx }}>
      {brands.map((brand) => (
        <Grid size={{ xs: 12, sm: 6, xl: 4, xxl: 3 }} key={brand.id}>
          <Card sx={{ overflow: 'hidden' }}>
            <Box
              sx={{
                bgcolor: brand.color,
                position: 'relative',
                p: 3,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: 120,
              }}
            >
              {props.withCharts && (
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
                  <SparkLineChart
                    data={brand.data}
                    height={120}
                    curve="natural"
                    colors={['rgba(255,255,255,0.8)']}
                    area
                  />
                </Box>
              )}
              <Box sx={{ position: 'relative', zIndex: 1 }}>{brand.icon}</Box>
            </Box>
            <CardContent sx={{ p: 0 }}>
              <Grid container>
                {brand.values.map((item, index) => (
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
                    <Typography variant="h6" fontWeight="bold">
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
        </Grid>
      ))}
    </Grid>
  )
}

WidgetsBrand.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
  sx: PropTypes.object,
}

export default WidgetsBrand
