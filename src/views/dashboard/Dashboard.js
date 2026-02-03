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
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import PeopleIcon from '@mui/icons-material/People'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import TrendingDownIcon from '@mui/icons-material/TrendingDown'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

const StatCard = ({ title, value, icon, color, trend }) => (
  <Card>
    <CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box>
          <Typography color="text.secondary" variant="body2">
            {title}
          </Typography>
          <Typography variant="h4" sx={{ my: 1 }}>
            {value}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            {trend > 0 ? (
              <TrendingUpIcon color="success" fontSize="small" />
            ) : (
              <TrendingDownIcon color="error" fontSize="small" />
            )}
            <Typography variant="body2" color={trend > 0 ? 'success.main' : 'error.main'}>
              {Math.abs(trend)}%
            </Typography>
          </Box>
        </Box>
        <Avatar sx={{ bgcolor: `${color}.main`, width: 56, height: 56 }}>{icon}</Avatar>
      </Box>
    </CardContent>
  </Card>
)

const Dashboard = () => {
  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'error' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]

  const tableExample = [
    {
      avatar: avatar1,
      name: 'Yiorgos Avraamu',
      status: 'New',
      registered: 'Jan 1, 2023',
      country: 'USA',
      usage: 50,
      activity: '10 sec ago',
    },
    {
      avatar: avatar2,
      name: 'Avram Tarasios',
      status: 'Recurring',
      registered: 'Jan 1, 2023',
      country: 'Brazil',
      usage: 22,
      activity: '5 minutes ago',
    },
    {
      avatar: avatar3,
      name: 'Quintin Ed',
      status: 'New',
      registered: 'Jan 1, 2023',
      country: 'India',
      usage: 74,
      activity: '1 hour ago',
    },
    {
      avatar: avatar4,
      name: 'Enéas Kwadwo',
      status: 'New',
      registered: 'Jan 1, 2023',
      country: 'France',
      usage: 98,
      activity: 'Last month',
    },
    {
      avatar: avatar5,
      name: 'Agapetus Tadeáš',
      status: 'New',
      registered: 'Jan 1, 2023',
      country: 'Spain',
      usage: 22,
      activity: 'Last week',
    },
    {
      avatar: avatar6,
      name: 'Friderik Dávid',
      status: 'New',
      registered: 'Jan 1, 2023',
      country: 'Poland',
      usage: 43,
      activity: 'Last week',
    },
  ]

  return (
    <Box>
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard title="Users" value="26K" icon={<PeopleIcon />} color="primary" trend={12.4} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard
            title="Income"
            value="$6,200"
            icon={<AttachMoneyIcon />}
            color="info"
            trend={-5.2}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard
            title="Conversion Rate"
            value="2.49%"
            icon={<TrendingUpIcon />}
            color="warning"
            trend={8.1}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard
            title="Sessions"
            value="44K"
            icon={<ShoppingCartIcon />}
            color="error"
            trend={23.6}
          />
        </Grid>
      </Grid>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}
          >
            <Box>
              <Typography variant="h6">Traffic</Typography>
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
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'grey.100',
              borderRadius: 1,
            }}
          >
            <Typography color="text.secondary">
              Chart Area - Use @mui/x-charts for charts
            </Typography>
          </Box>
        </CardContent>
        <Box sx={{ px: 3, pb: 3 }}>
          <Grid container spacing={2}>
            {progressExample.map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 2.4 }} key={index}>
                <Typography variant="body2" color="text.secondary">
                  {item.title}
                </Typography>
                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                  {item.value} ({item.percent}%)
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={item.percent}
                  color={item.color}
                  sx={{ height: 4, borderRadius: 2 }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Card>

      <Card>
        <CardHeader title="Traffic & Sales" />
        <CardContent>
          <Grid container spacing={3} sx={{ mb: 3 }}>
            <Grid size={{ xs: 6, md: 3 }}>
              <Box sx={{ borderLeft: 4, borderColor: 'info.main', pl: 2, py: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  New Clients
                </Typography>
                <Typography variant="h5">9,123</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 6, md: 3 }}>
              <Box sx={{ borderLeft: 4, borderColor: 'error.main', pl: 2, py: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  Recurring Clients
                </Typography>
                <Typography variant="h5">22,643</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 6, md: 3 }}>
              <Box sx={{ borderLeft: 4, borderColor: 'warning.main', pl: 2, py: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  Pageviews
                </Typography>
                <Typography variant="h5">78,623</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 6, md: 3 }}>
              <Box sx={{ borderLeft: 4, borderColor: 'success.main', pl: 2, py: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  Organic
                </Typography>
                <Typography variant="h5">49,123</Typography>
              </Box>
            </Grid>
          </Grid>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <PeopleIcon fontSize="small" />
                  </TableCell>
                  <TableCell>User</TableCell>
                  <TableCell>Country</TableCell>
                  <TableCell>Usage</TableCell>
                  <TableCell>Activity</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableExample.map((item, index) => (
                  <TableRow key={index} hover>
                    <TableCell>
                      <Avatar src={item.avatar} />
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">{item.name}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {item.status} | Registered: {item.registered}
                      </Typography>
                    </TableCell>
                    <TableCell>{item.country}</TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="body2">{item.usage}%</Typography>
                        <LinearProgress
                          variant="determinate"
                          value={item.usage}
                          sx={{ flexGrow: 1, height: 6, borderRadius: 3 }}
                        />
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption" color="text.secondary">
                        Last login
                      </Typography>
                      <Typography variant="body2">{item.activity}</Typography>
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
