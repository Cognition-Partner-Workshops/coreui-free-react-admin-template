import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Box from '@mui/material/Box'
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
import Badge from '@mui/material/Badge'
import Divider from '@mui/material/Divider'
import { useTheme, styled } from '@mui/material/styles'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import PeopleIcon from '@mui/icons-material/People'
import PersonIcon from '@mui/icons-material/Person'
import Person2Icon from '@mui/icons-material/Person2'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import PaymentIcon from '@mui/icons-material/Payment'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import MainChart from './MainChart'

const StyledBadge = styled(Badge)(({ theme, statuscolor }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: statuscolor,
    color: statuscolor,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      border: '1px solid currentColor',
      content: '""',
    },
  },
}))

const StatBox = ({ title, value, color }) => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        borderLeft: 4,
        borderColor: color,
        py: 1,
        px: 2,
        mb: 2,
      }}
    >
      <Typography variant="body2" color="text.secondary">
        {title}
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 600 }}>
        {value}
      </Typography>
    </Box>
  )
}

const Dashboard = () => {
  const theme = useTheme()

  const colorMap = {
    success: theme.palette.success.main,
    info: theme.palette.info.main,
    warning: theme.palette.warning.main,
    danger: theme.palette.error.main,
    primary: theme.palette.primary.main,
    secondary: theme.palette.grey[500],
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
    { title: 'Female', icon: <Person2Icon />, value: 43 },
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
    <>
      <WidgetsDropdown className="mb-4" />
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid size={{ xs: 12, sm: 5 }}>
              <Typography variant="h5" component="h4" sx={{ mb: 0 }}>
                Traffic
              </Typography>
              <Typography variant="body2" color="text.secondary">
                January - July 2023
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 7 }} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                <ButtonGroup variant="outlined" size="small">
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
            </Grid>
          </Grid>
          <MainChart />
        </CardContent>
        <Divider />
        <CardContent>
          <Grid container spacing={3} sx={{ textAlign: 'center' }}>
            {progressExample.map((item, index) => (
              <Grid
                size={{ xs: 6, sm: 4, lg: 2.4 }}
                key={index}
                sx={{ display: index === 4 ? { xs: 'none', xl: 'block' } : 'block' }}
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
                    bgcolor: 'grey.200',
                    '& .MuiLinearProgress-bar': {
                      bgcolor: colorMap[item.color],
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
        <CardHeader title="Traffic & Sales" />
        <CardContent>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Grid container spacing={2}>
                <Grid size={6}>
                  <StatBox title="New Clients" value="9,123" color="info.main" />
                </Grid>
                <Grid size={6}>
                  <StatBox title="Recurring Clients" value="22,643" color="error.main" />
                </Grid>
              </Grid>
              <Divider sx={{ mb: 3 }} />
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
                      bgcolor: 'grey.200',
                      '& .MuiLinearProgress-bar': { bgcolor: 'info.main' },
                    }}
                  />
                  <LinearProgress
                    variant="determinate"
                    value={item.value2}
                    sx={{
                      height: 4,
                      borderRadius: 2,
                      bgcolor: 'grey.200',
                      '& .MuiLinearProgress-bar': { bgcolor: 'error.main' },
                    }}
                  />
                </Box>
              ))}
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Grid container spacing={2}>
                <Grid size={6}>
                  <StatBox title="Pageviews" value="78,623" color="warning.main" />
                </Grid>
                <Grid size={6}>
                  <StatBox title="Organic" value="49,123" color="success.main" />
                </Grid>
              </Grid>
              <Divider sx={{ mb: 3 }} />
              {progressGroupExample2.map((item, index) => (
                <Box key={index} sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    {item.icon}
                    <Typography sx={{ ml: 1 }}>{item.title}</Typography>
                    <Typography sx={{ ml: 'auto', fontWeight: 600 }}>{item.value}%</Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={item.value}
                    sx={{
                      height: 4,
                      borderRadius: 2,
                      bgcolor: 'grey.200',
                      '& .MuiLinearProgress-bar': { bgcolor: 'warning.main' },
                    }}
                  />
                </Box>
              ))}
              <Box sx={{ mb: 4 }} />
              {progressGroupExample3.map((item, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    {item.icon}
                    <Typography sx={{ ml: 1 }}>{item.title}</Typography>
                    <Typography sx={{ ml: 'auto', fontWeight: 600 }}>
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
                      bgcolor: 'grey.200',
                      '& .MuiLinearProgress-bar': { bgcolor: 'success.main' },
                    }}
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
                      <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                        statuscolor={colorMap[item.avatar.status]}
                      >
                        <Avatar src={item.avatar.src} />
                      </StyledBadge>
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
                      <CreditCardIcon />
                      <Typography variant="caption" display="block">
                        {item.payment}
                      </Typography>
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
        </CardContent>
      </Card>
    </>
  )
}

export default Dashboard
