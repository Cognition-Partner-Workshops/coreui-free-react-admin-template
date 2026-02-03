import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import LinearProgress from '@mui/material/LinearProgress'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import PersonIcon from '@mui/icons-material/Person'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MaleIcon from '@mui/icons-material/Male'
import FemaleIcon from '@mui/icons-material/Female'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import MainChart from './MainChart'

const Dashboard = () => {
  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'error' },
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

  const progressGroupExample2 = [
    { title: 'Male', icon: MaleIcon, value: 53 },
    { title: 'Female', icon: FemaleIcon, value: 43 },
  ]

  const progressGroupExample3 = [
    { title: 'Organic Search', icon: GoogleIcon, percent: 56, value: '191,235' },
    { title: 'Facebook', icon: FacebookIcon, percent: 15, value: '51,223' },
    { title: 'Twitter', icon: TwitterIcon, percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: LinkedInIcon, percent: 8, value: '27,319' },
  ]

  const tableExample = [
    {
      avatar: avatar1,
      user: { name: 'Yiorgos Avraamu', new: true, registered: 'Jan 1, 2023' },
      country: 'USA',
      usage: { value: 50, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'success' },
      payment: 'Mastercard',
      activity: '10 sec ago',
    },
    {
      avatar: avatar2,
      user: { name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2023' },
      country: 'Brazil',
      usage: { value: 22, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'info' },
      payment: 'Visa',
      activity: '5 minutes ago',
    },
    {
      avatar: avatar3,
      user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2023' },
      country: 'India',
      usage: { value: 74, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'warning' },
      payment: 'Stripe',
      activity: '1 hour ago',
    },
    {
      avatar: avatar4,
      user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2023' },
      country: 'France',
      usage: { value: 98, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'error' },
      payment: 'PayPal',
      activity: 'Last month',
    },
    {
      avatar: avatar5,
      user: { name: 'Agapetus Tadeáš', new: true, registered: 'Jan 1, 2023' },
      country: 'Spain',
      usage: { value: 22, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'primary' },
      payment: 'Google Wallet',
      activity: 'Last week',
    },
    {
      avatar: avatar6,
      user: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2023' },
      country: 'Poland',
      usage: { value: 43, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'success' },
      payment: 'Amex',
      activity: 'Last week',
    },
  ]

  const getColorValue = (color) => {
    const colorMap = {
      success: 'success.main',
      info: 'info.main',
      warning: 'warning.main',
      error: 'error.main',
      primary: 'primary.main',
    }
    return colorMap[color] || 'primary.main'
  }

  return (
    <Box>
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <Card>
            <CardContent>
              <Typography variant="h4" color="primary">
                26K
              </Typography>
              <Typography color="text.secondary">Users</Typography>
              <LinearProgress variant="determinate" value={25} color="primary" sx={{ mt: 1 }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <Card>
            <CardContent>
              <Typography variant="h4" color="info.main">
                $6,200
              </Typography>
              <Typography color="text.secondary">Income</Typography>
              <LinearProgress variant="determinate" value={50} color="info" sx={{ mt: 1 }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <Card>
            <CardContent>
              <Typography variant="h4" color="warning.main">
                2.49%
              </Typography>
              <Typography color="text.secondary">Conversion Rate</Typography>
              <LinearProgress variant="determinate" value={75} color="warning" sx={{ mt: 1 }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <Card>
            <CardContent>
              <Typography variant="h4" color="error.main">
                44K
              </Typography>
              <Typography color="text.secondary">Sessions</Typography>
              <LinearProgress variant="determinate" value={90} color="error" sx={{ mt: 1 }} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              mb: 2,
            }}
          >
            <Box>
              <Typography variant="h5">Traffic</Typography>
              <Typography color="text.secondary" variant="body2">
                January - July 2023
              </Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              <ButtonGroup size="small">
                {['Day', 'Month', 'Year'].map((value) => (
                  <Button key={value} variant={value === 'Month' ? 'contained' : 'outlined'}>
                    {value}
                  </Button>
                ))}
              </ButtonGroup>
              <Button variant="contained" startIcon={<CloudDownloadIcon />}>
                Download
              </Button>
            </Box>
          </Box>
          <MainChart />
        </CardContent>
        <Divider />
        <CardContent>
          <Grid container spacing={2}>
            {progressExample.map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, lg: 2.4 }} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography color="text.secondary" variant="body2">
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                    {item.value} ({item.percent}%)
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={item.percent}
                    color={item.color}
                    sx={{ mt: 1, height: 4 }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardHeader title="Traffic & Sales" />
        <CardContent>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid size={6}>
                  <Box sx={{ borderLeft: 4, borderColor: 'info.main', pl: 2, py: 1 }}>
                    <Typography color="text.secondary" variant="body2">
                      New Clients
                    </Typography>
                    <Typography variant="h6">9,123</Typography>
                  </Box>
                </Grid>
                <Grid size={6}>
                  <Box sx={{ borderLeft: 4, borderColor: 'error.main', pl: 2, py: 1 }}>
                    <Typography color="text.secondary" variant="body2">
                      Recurring Clients
                    </Typography>
                    <Typography variant="h6">22,643</Typography>
                  </Box>
                </Grid>
              </Grid>
              <Divider sx={{ mb: 2 }} />
              {progressGroupExample1.map((item, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography color="text.secondary" variant="body2" sx={{ mb: 0.5 }}>
                    {item.title}
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={item.value1}
                    color="info"
                    sx={{ mb: 0.5, height: 4 }}
                  />
                  <LinearProgress
                    variant="determinate"
                    value={item.value2}
                    color="error"
                    sx={{ height: 4 }}
                  />
                </Box>
              ))}
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid size={6}>
                  <Box sx={{ borderLeft: 4, borderColor: 'warning.main', pl: 2, py: 1 }}>
                    <Typography color="text.secondary" variant="body2">
                      Pageviews
                    </Typography>
                    <Typography variant="h6">78,623</Typography>
                  </Box>
                </Grid>
                <Grid size={6}>
                  <Box sx={{ borderLeft: 4, borderColor: 'success.main', pl: 2, py: 1 }}>
                    <Typography color="text.secondary" variant="body2">
                      Organic
                    </Typography>
                    <Typography variant="h6">49,123</Typography>
                  </Box>
                </Grid>
              </Grid>
              <Divider sx={{ mb: 2 }} />
              {progressGroupExample2.map((item, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      mb: 0.5,
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <item.icon fontSize="small" />
                      <Typography variant="body2">{item.title}</Typography>
                    </Box>
                    <Typography variant="body2" fontWeight="bold">
                      {item.value}%
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={item.value}
                    color="warning"
                    sx={{ height: 4 }}
                  />
                </Box>
              ))}
              <Box sx={{ mb: 3 }} />
              {progressGroupExample3.map((item, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      mb: 0.5,
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <item.icon fontSize="small" />
                      <Typography variant="body2">{item.title}</Typography>
                    </Box>
                    <Typography variant="body2">
                      <strong>{item.value}</strong>{' '}
                      <Typography component="span" color="text.secondary" variant="body2">
                        ({item.percent}%)
                      </Typography>
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={item.percent}
                    color="success"
                    sx={{ height: 4 }}
                  />
                </Box>
              ))}
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }} />

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center">
                    <PersonIcon />
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
                      <Avatar src={item.avatar} sx={{ width: 40, height: 40 }} />
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">{item.user.name}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {item.user.new ? 'New' : 'Recurring'} | Registered: {item.user.registered}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="body2">{item.country}</Typography>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                        <Typography variant="body2" fontWeight="bold">
                          {item.usage.value}%
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {item.usage.period}
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={item.usage.value}
                        color={item.usage.color}
                        sx={{ height: 4 }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Chip label={item.payment} size="small" variant="outlined" />
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption" color="text.secondary">
                        Last login
                      </Typography>
                      <Typography variant="body2" fontWeight="bold">
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

export default Dashboard
