import React, { useState } from 'react'
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  LinearProgress,
  IconButton,
  Menu,
  MenuItem,
  Button,
  ButtonGroup,
  Divider,
  useTheme,
  alpha,
  Skeleton,
  Fade,
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import PersonIcon from '@mui/icons-material/Person'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PaymentIcon from '@mui/icons-material/Payment'
import DescriptionIcon from '@mui/icons-material/Description'
import BugReportIcon from '@mui/icons-material/BugReport'

import WidgetsDropdown from '../widgets/WidgetsDropdown'
import MainChart from './MainChart'

const Dashboard = () => {
  const theme = useTheme()
  const [loading, setLoading] = useState(false)

  const tableData = [
    {
      avatar: '/avatars/1.jpg',
      user: { name: 'Yiorgos Avraamu', new: true, registered: 'Jan 1, 2023' },
      country: { name: 'USA', flag: '🇺🇸' },
      usage: { value: 50, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'success' },
      payment: { name: 'Mastercard', icon: '💳' },
      activity: '10 sec ago',
    },
    {
      avatar: '/avatars/2.jpg',
      user: { name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2023' },
      country: { name: 'Brazil', flag: '🇧🇷' },
      usage: { value: 22, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'info' },
      payment: { name: 'Visa', icon: '💳' },
      activity: '5 minutes ago',
    },
    {
      avatar: '/avatars/3.jpg',
      user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2023' },
      country: { name: 'India', flag: '🇮🇳' },
      usage: { value: 74, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'warning' },
      payment: { name: 'Stripe', icon: '💳' },
      activity: '1 hour ago',
    },
    {
      avatar: '/avatars/4.jpg',
      user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2023' },
      country: { name: 'France', flag: '🇫🇷' },
      usage: { value: 98, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'error' },
      payment: { name: 'PayPal', icon: '💳' },
      activity: 'Last month',
    },
    {
      avatar: '/avatars/5.jpg',
      user: { name: 'Agapetus Tadeáš', new: true, registered: 'Jan 1, 2023' },
      country: { name: 'Spain', flag: '🇪🇸' },
      usage: { value: 22, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'primary' },
      payment: { name: 'Google Wallet', icon: '💳' },
      activity: 'Last week',
    },
    {
      avatar: '/avatars/6.jpg',
      user: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2023' },
      country: { name: 'Poland', flag: '🇵🇱' },
      usage: { value: 43, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'success' },
      payment: { name: 'Amex', icon: '💳' },
      activity: 'Last week',
    },
  ]

  const progressGroupData1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  const progressGroupData2 = [
    { title: 'Male', value: 53, icon: PersonIcon, color: 'warning' },
    { title: 'Female', value: 43, icon: PersonIcon, color: 'success' },
  ]

  const progressGroupData3 = [
    { title: 'Organic Search', value: 191235, percent: 56, icon: SearchIcon, color: 'success' },
    { title: 'Facebook', value: 51223, percent: 15, icon: PersonIcon, color: 'info' },
    { title: 'Twitter', value: 37564, percent: 11, icon: PersonIcon, color: 'warning' },
    { title: 'LinkedIn', value: 27319, percent: 8, icon: PersonIcon, color: 'error' },
  ]

  return (
    <Fade in timeout={500}>
      <Box>
        <WidgetsDropdown className="mb-4" />

        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid size={{ sm: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  Traffic
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  January - July 2023
                </Typography>
              </Grid>
              <Grid
                size={{ sm: 7 }}
                sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}
              >
                <ButtonGroup variant="outlined" size="small">
                  <Button>Day</Button>
                  <Button>Month</Button>
                  <Button variant="contained">Year</Button>
                </ButtonGroup>
                <IconButton sx={{ ml: 2 }}>
                  <CloudDownloadIcon />
                </IconButton>
              </Grid>
            </Grid>
            <MainChart />
          </CardContent>
        </Card>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid size={{ xs: 12, lg: 6 }}>
            <Card sx={{ height: '100%' }}>
              <CardHeader
                title="Traffic & Sales"
                action={
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                }
              />
              <CardContent>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ mb: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <PersonIcon fontSize="small" color="primary" />
                          <Typography variant="body2">New Clients</Typography>
                        </Box>
                        <Typography variant="body2" fontWeight={600}>
                          9,123
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={41}
                        sx={{
                          height: 6,
                          borderRadius: 3,
                          backgroundColor: alpha(theme.palette.primary.main, 0.1),
                        }}
                      />
                    </Box>
                    <Box sx={{ mb: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <ShoppingCartIcon fontSize="small" color="info" />
                          <Typography variant="body2">Recurring Clients</Typography>
                        </Box>
                        <Typography variant="body2" fontWeight={600}>
                          22,643
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={76}
                        color="info"
                        sx={{
                          height: 6,
                          borderRadius: 3,
                          backgroundColor: alpha(theme.palette.info.main, 0.1),
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ mb: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <PaymentIcon fontSize="small" color="warning" />
                          <Typography variant="body2">Pageviews</Typography>
                        </Box>
                        <Typography variant="body2" fontWeight={600}>
                          78,623
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={56}
                        color="warning"
                        sx={{
                          height: 6,
                          borderRadius: 3,
                          backgroundColor: alpha(theme.palette.warning.main, 0.1),
                        }}
                      />
                    </Box>
                    <Box sx={{ mb: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <DescriptionIcon fontSize="small" color="error" />
                          <Typography variant="body2">Organic</Typography>
                        </Box>
                        <Typography variant="body2" fontWeight={600}>
                          49,123
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={84}
                        color="error"
                        sx={{
                          height: 6,
                          borderRadius: 3,
                          backgroundColor: alpha(theme.palette.error.main, 0.1),
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 3 }} />
                {progressGroupData1.map((item, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                      <Typography variant="body2">{item.title}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.value1}% / {item.value2}%
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                      <LinearProgress
                        variant="determinate"
                        value={item.value1}
                        color="info"
                        sx={{ flex: 1, height: 6, borderRadius: 3 }}
                      />
                      <LinearProgress
                        variant="determinate"
                        value={item.value2}
                        color="success"
                        sx={{ flex: 1, height: 6, borderRadius: 3 }}
                      />
                    </Box>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }}>
            <Card sx={{ height: '100%' }}>
              <CardHeader
                title="Traffic Sources"
                action={
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                }
              />
              <CardContent>
                {progressGroupData2.map((item, index) => (
                  <Box key={index} sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <item.icon fontSize="small" color={item.color} />
                        <Typography variant="body2">{item.title}</Typography>
                      </Box>
                      <Typography variant="body2" fontWeight={600}>
                        {item.value}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={item.value}
                      color={item.color}
                      sx={{
                        height: 6,
                        borderRadius: 3,
                        backgroundColor: alpha(theme.palette[item.color].main, 0.1),
                      }}
                    />
                  </Box>
                ))}
                <Divider sx={{ my: 3 }} />
                {progressGroupData3.map((item, index) => (
                  <Box key={index} sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <item.icon fontSize="small" color={item.color} />
                        <Typography variant="body2">{item.title}</Typography>
                      </Box>
                      <Box sx={{ textAlign: 'right' }}>
                        <Typography variant="body2" fontWeight={600}>
                          {item.value.toLocaleString()}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          ({item.percent}%)
                        </Typography>
                      </Box>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={item.percent}
                      color={item.color}
                      sx={{
                        height: 6,
                        borderRadius: 3,
                        backgroundColor: alpha(theme.palette[item.color].main, 0.1),
                      }}
                    />
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Card>
          <CardHeader title="Users" />
          <CardContent sx={{ p: 0 }}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>User</TableCell>
                    <TableCell>Country</TableCell>
                    <TableCell>Usage</TableCell>
                    <TableCell>Payment Method</TableCell>
                    <TableCell>Activity</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableData.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        '&:hover': {
                          backgroundColor: alpha(theme.palette.primary.main, 0.04),
                        },
                        transition: theme.transitions.create('background-color'),
                      }}
                    >
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Avatar src={row.avatar} alt={row.user.name}>
                            {row.user.name.charAt(0)}
                          </Avatar>
                          <Box>
                            <Typography variant="body2" fontWeight={500}>
                              {row.user.name}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              {row.user.new ? 'New' : 'Recurring'} | Registered:{' '}
                              {row.user.registered}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">
                          {row.country.flag} {row.country.name}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Box sx={{ minWidth: 100 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                            <Typography variant="caption" fontWeight={500}>
                              {row.usage.value}%
                            </Typography>
                          </Box>
                          <LinearProgress
                            variant="determinate"
                            value={row.usage.value}
                            color={row.usage.color}
                            sx={{ height: 4, borderRadius: 2 }}
                          />
                          <Typography variant="caption" color="text.secondary">
                            {row.usage.period}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">
                          {row.payment.icon} {row.payment.name}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" color="text.secondary">
                          {row.activity}
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
    </Fade>
  )
}

export default Dashboard
