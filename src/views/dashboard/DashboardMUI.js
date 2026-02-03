import React from 'react'
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  Button,
  ButtonGroup,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Chip,
  Divider,
  Paper,
} from '@mui/material'
import {
  CloudDownload as CloudDownloadIcon,
  People as PeopleIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
} from '@mui/icons-material'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

const colorMap = {
  success: '#1b9e3e',
  info: '#39f',
  warning: '#f9b115',
  danger: '#e55353',
  primary: '#5856d6',
}

const StatCard = ({ title, value, percent, trend, color }) => (
  <Card sx={{ height: '100%', bgcolor: color, color: 'white' }}>
    <CardContent>
      <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
        {value}
        <Typography component="span" variant="body2" sx={{ ml: 1 }}>
          ({percent}%{' '}
          {trend === 'up' ? (
            <TrendingUpIcon fontSize="small" />
          ) : (
            <TrendingDownIcon fontSize="small" />
          )}
          )
        </Typography>
      </Typography>
      <Typography variant="body2" sx={{ opacity: 0.8 }}>
        {title}
      </Typography>
    </CardContent>
  </Card>
)

const ProgressItem = ({ title, value, percent, color }) => (
  <Box sx={{ textAlign: 'center', mb: 2 }}>
    <Typography variant="body2" color="text.secondary">
      {title}
    </Typography>
    <Typography variant="body1" sx={{ fontWeight: 600 }}>
      {value} ({percent}%)
    </Typography>
    <LinearProgress
      variant="determinate"
      value={percent}
      sx={{
        mt: 1,
        height: 4,
        borderRadius: 2,
        bgcolor: 'grey.200',
        '& .MuiLinearProgress-bar': {
          bgcolor: colorMap[color],
        },
      }}
    />
  </Box>
)

const DashboardMUI = () => {
  const statsData = [
    { title: 'Users', value: '26K', percent: -12.4, trend: 'down', color: '#39f' },
    { title: 'Income', value: '$6.200', percent: 40.9, trend: 'up', color: '#f9b115' },
    { title: 'Conversion Rate', value: '2.49%', percent: 84.7, trend: 'up', color: '#e55353' },
    { title: 'Sessions', value: '44K', percent: -23.6, trend: 'down', color: '#e55353' },
  ]

  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: { name: 'Yiorgos Avraamu', new: true, registered: 'Jan 1, 2023' },
      country: 'USA',
      usage: { value: 50, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'success' },
      payment: 'Mastercard',
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: { name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2023' },
      country: 'Brazil',
      usage: { value: 22, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'info' },
      payment: 'Visa',
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2023' },
      country: 'India',
      usage: { value: 74, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'warning' },
      payment: 'Stripe',
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2023' },
      country: 'France',
      usage: { value: 98, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'danger' },
      payment: 'PayPal',
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: { name: 'Agapetus Tadeáš', new: true, registered: 'Jan 1, 2023' },
      country: 'Spain',
      usage: { value: 22, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'primary' },
      payment: 'Google Wallet',
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2023' },
      country: 'Poland',
      usage: { value: 43, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'success' },
      payment: 'Amex',
      activity: 'Last week',
    },
  ]

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {statsData.map((stat, index) => (
          <Grid item xs={12} sm={6} lg={3} key={index}>
            <StatCard {...stat} />
          </Grid>
        ))}
      </Grid>

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Box
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}
          >
            <Box>
              <Typography variant="h5" component="h2">
                Traffic
              </Typography>
              <Typography variant="body2" color="text.secondary">
                January - July 2023
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <ButtonGroup variant="outlined" size="small">
                <Button>Day</Button>
                <Button variant="contained">Month</Button>
                <Button>Year</Button>
              </ButtonGroup>
              <Button variant="contained" startIcon={<CloudDownloadIcon />}>
                Download
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              height: 300,
              bgcolor: 'grey.100',
              borderRadius: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 3,
            }}
          >
            <Typography color="text.secondary">Chart Area (Material UI)</Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Grid container spacing={2}>
            {progressExample.map((item, index) => (
              <Grid item xs={12} sm={6} md={2.4} key={index}>
                <ProgressItem {...item} />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      <Card sx={{ mb: 4 }}>
        <CardHeader title="Traffic & Sales" />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      borderLeft: 4,
                      borderColor: colorMap.info,
                      py: 1,
                      px: 2,
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      New Clients
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      9,123
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      borderLeft: 4,
                      borderColor: colorMap.danger,
                      py: 1,
                      px: 2,
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      Recurring Clients
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      22,643
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <Divider sx={{ my: 2 }} />

              {progressGroupExample1.map((item, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                    {item.title}
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={item.value1}
                    sx={{
                      height: 4,
                      borderRadius: 2,
                      mb: 0.5,
                      bgcolor: 'grey.200',
                      '& .MuiLinearProgress-bar': { bgcolor: colorMap.info },
                    }}
                  />
                  <LinearProgress
                    variant="determinate"
                    value={item.value2}
                    sx={{
                      height: 4,
                      borderRadius: 2,
                      bgcolor: 'grey.200',
                      '& .MuiLinearProgress-bar': { bgcolor: colorMap.danger },
                    }}
                  />
                </Box>
              ))}
            </Grid>

            <Grid item xs={12} md={6}>
              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      borderLeft: 4,
                      borderColor: colorMap.warning,
                      py: 1,
                      px: 2,
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      Pageviews
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      78,623
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      borderLeft: 4,
                      borderColor: colorMap.success,
                      py: 1,
                      px: 2,
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      Organic
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      49,123
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <Divider sx={{ my: 2 }} />

              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                  <Typography variant="body2">Male</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    53%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={53}
                  sx={{
                    height: 4,
                    borderRadius: 2,
                    bgcolor: 'grey.200',
                    '& .MuiLinearProgress-bar': { bgcolor: colorMap.warning },
                  }}
                />
              </Box>

              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                  <Typography variant="body2">Female</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    43%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={43}
                  sx={{
                    height: 4,
                    borderRadius: 2,
                    bgcolor: 'grey.200',
                    '& .MuiLinearProgress-bar': { bgcolor: colorMap.warning },
                  }}
                />
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }} />

          <TableContainer component={Paper} variant="outlined">
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: 'grey.50' }}>
                  <TableCell align="center">
                    <PeopleIcon />
                  </TableCell>
                  <TableCell>User</TableCell>
                  <TableCell align="center">Country</TableCell>
                  <TableCell>Usage</TableCell>
                  <TableCell align="center">Payment Method</TableCell>
                  <TableCell>Activity</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableExample.map((item, index) => (
                  <TableRow key={index} hover>
                    <TableCell align="center">
                      <Avatar
                        src={item.avatar.src}
                        sx={{
                          width: 40,
                          height: 40,
                          border: 2,
                          borderColor: colorMap[item.avatar.status] || 'grey.400',
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {item.user.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {item.user.new ? 'New' : 'Recurring'} | Registered: {item.user.registered}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="body2">{item.country}</Typography>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {item.usage.value}%
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {item.usage.period}
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={item.usage.value}
                        sx={{
                          height: 4,
                          borderRadius: 2,
                          bgcolor: 'grey.200',
                          '& .MuiLinearProgress-bar': { bgcolor: colorMap[item.usage.color] },
                        }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Chip label={item.payment} size="small" variant="outlined" />
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption" color="text.secondary">
                        Last login
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {item.activity}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  )
}

export default DashboardMUI
