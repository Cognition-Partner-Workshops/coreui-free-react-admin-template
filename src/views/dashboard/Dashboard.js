import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
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
import Divider from '@mui/material/Divider'
import { useTheme } from '@mui/material/styles'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import PeopleIcon from '@mui/icons-material/People'
import PersonIcon from '@mui/icons-material/Person'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import CreditCardIcon from '@mui/icons-material/CreditCard'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import MainChart from './MainChart'

const Dashboard = () => {
  const theme = useTheme()

  const colorMap = {
    success: theme.palette.success.main,
    info: theme.palette.info.main,
    warning: theme.palette.warning.main,
    danger: theme.palette.error.main,
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
  }

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

  const progressGroupExample2 = [
    { title: 'Male', icon: <PersonIcon />, value: 53 },
    { title: 'Female', icon: <PersonOutlineIcon />, value: 43 },
  ]

  const progressGroupExample3 = [
    { title: 'Organic Search', icon: <GoogleIcon />, percent: 56, value: '191,235' },
    { title: 'Facebook', icon: <FacebookIcon />, percent: 15, value: '51,223' },
    { title: 'Twitter', icon: <TwitterIcon />, percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: <LinkedInIcon />, percent: 8, value: '27,319' },
  ]

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: { name: 'Yiorgos Avraamu', new: true, registered: 'Jan 1, 2023' },
      country: { name: 'USA' },
      usage: { value: 50, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'success' },
      payment: { name: 'Mastercard' },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: { name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2023' },
      country: { name: 'Brazil' },
      usage: { value: 22, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'info' },
      payment: { name: 'Visa' },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2023' },
      country: { name: 'India' },
      usage: { value: 74, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'warning' },
      payment: { name: 'Stripe' },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2023' },
      country: { name: 'France' },
      usage: { value: 98, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'danger' },
      payment: { name: 'PayPal' },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: { name: 'Agapetus Tadeáš', new: true, registered: 'Jan 1, 2023' },
      country: { name: 'Spain' },
      usage: { value: 22, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'primary' },
      payment: { name: 'Google Wallet' },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2023' },
      country: { name: 'Poland' },
      usage: { value: 43, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'success' },
      payment: { name: 'Amex' },
      activity: 'Last week',
    },
  ]

  return (
    <Box>
      <WidgetsDropdown className="mb-4" />

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Box
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}
          >
            <Box>
              <Typography variant="h5" component="h4">
                Traffic
              </Typography>
              <Typography variant="body2" color="text.secondary">
                January - July 2023
              </Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
              <ButtonGroup variant="outlined" size="small">
                {['Day', 'Month', 'Year'].map((value) => (
                  <Button key={value} variant={value === 'Month' ? 'contained' : 'outlined'}>
                    {value}
                  </Button>
                ))}
              </ButtonGroup>
              <Button variant="contained" size="small">
                <CloudDownloadIcon />
              </Button>
            </Box>
          </Box>
          <MainChart />
        </CardContent>
        <Divider />
        <CardContent>
          <Grid container spacing={2} sx={{ textAlign: 'center' }}>
            {progressExample.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                lg={3}
                xl={2.4}
                key={index}
                sx={{
                  display:
                    index === progressExample.length - 1 ? { xs: 'none', xl: 'block' } : 'block',
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  {item.title}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  {item.value} ({item.percent}%)
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={item.percent}
                  sx={{
                    mt: 1,
                    height: 4,
                    borderRadius: 2,
                    backgroundColor: theme.palette.grey[200],
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: colorMap[item.color],
                    },
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      <WidgetsBrand className="mb-4" withCharts />

      <Card sx={{ mb: 4 }}>
        <CardContent sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Typography variant="h6">Traffic & Sales</Typography>
        </CardContent>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box sx={{ borderLeft: 4, borderColor: 'info.main', py: 1, px: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                      New Clients
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      9,123
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ borderLeft: 4, borderColor: 'error.main', py: 1, px: 2 }}>
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
                <Box key={index} sx={{ mb: 3 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {item.title}
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={item.value1}
                    sx={{
                      height: 4,
                      borderRadius: 2,
                      mb: 0.5,
                      backgroundColor: theme.palette.grey[200],
                      '& .MuiLinearProgress-bar': { backgroundColor: theme.palette.info.main },
                    }}
                  />
                  <LinearProgress
                    variant="determinate"
                    value={item.value2}
                    sx={{
                      height: 4,
                      borderRadius: 2,
                      backgroundColor: theme.palette.grey[200],
                      '& .MuiLinearProgress-bar': { backgroundColor: theme.palette.error.main },
                    }}
                  />
                </Box>
              ))}
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box sx={{ borderLeft: 4, borderColor: 'warning.main', py: 1, px: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                      Pageviews
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      78,623
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ borderLeft: 4, borderColor: 'success.main', py: 1, px: 2 }}>
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
              {progressGroupExample2.map((item, index) => (
                <Box key={index} sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Box sx={{ mr: 1, color: 'text.secondary' }}>{item.icon}</Box>
                    <Typography variant="body2">{item.title}</Typography>
                    <Typography variant="body2" sx={{ ml: 'auto', fontWeight: 600 }}>
                      {item.value}%
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={item.value}
                    sx={{
                      height: 4,
                      borderRadius: 2,
                      backgroundColor: theme.palette.grey[200],
                      '& .MuiLinearProgress-bar': { backgroundColor: theme.palette.warning.main },
                    }}
                  />
                </Box>
              ))}
              <Box sx={{ mb: 4 }} />
              {progressGroupExample3.map((item, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Box sx={{ mr: 1, color: 'text.secondary' }}>{item.icon}</Box>
                    <Typography variant="body2">{item.title}</Typography>
                    <Typography variant="body2" sx={{ ml: 'auto', fontWeight: 600 }}>
                      {item.value}{' '}
                      <Typography component="span" variant="body2" color="text.secondary">
                        ({item.percent}%)
                      </Typography>
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={item.percent}
                    sx={{
                      height: 4,
                      borderRadius: 2,
                      backgroundColor: theme.palette.grey[200],
                      '& .MuiLinearProgress-bar': { backgroundColor: theme.palette.success.main },
                    }}
                  />
                </Box>
              ))}
            </Grid>
          </Grid>

          <Box sx={{ mt: 4 }}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: theme.palette.action.hover }}>
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
                            borderColor: colorMap[item.avatar.status],
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">{item.user.name}</Typography>
                        <Typography variant="caption" color="text.secondary">
                          {item.user.new ? 'New' : 'Recurring'} | Registered: {item.user.registered}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography variant="body2">{item.country.name}</Typography>
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
                            backgroundColor: theme.palette.grey[200],
                            '& .MuiLinearProgress-bar': {
                              backgroundColor: colorMap[item.usage.color],
                            },
                          }}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <CreditCardIcon />
                      </TableCell>
                      <TableCell>
                        <Typography variant="caption" color="text.secondary">
                          Last login
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {item.activity}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Dashboard
