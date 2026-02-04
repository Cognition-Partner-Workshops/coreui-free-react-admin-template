import React from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  alpha,
  Skeleton,
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import TrendingDownIcon from '@mui/icons-material/TrendingDown'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import { LineChart, Line, BarChart, Bar, ResponsiveContainer } from 'recharts'

const StatWidget = ({ title, value, trend, trendValue, color, chartType, chartData }) => {
  const theme = useTheme()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const isPositive = trend === 'up'
  const TrendIcon = isPositive ? TrendingUpIcon : TrendingDownIcon

  return (
    <Card
      sx={{
        backgroundColor: color,
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        transition: theme.transitions.create(['transform', 'box-shadow']),
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: theme.shadows[8],
        },
      }}
    >
      <CardContent sx={{ pb: 0 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box>
            <Typography variant="h4" fontWeight={600} sx={{ mb: 0.5 }}>
              {value}
              <Typography
                component="span"
                variant="body2"
                sx={{ ml: 1, opacity: 0.9, display: 'inline-flex', alignItems: 'center' }}
              >
                ({trendValue} <TrendIcon sx={{ fontSize: 16, ml: 0.5 }} />)
              </Typography>
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              {title}
            </Typography>
          </Box>
          <IconButton
            size="small"
            sx={{ color: 'white', opacity: 0.8, '&:hover': { opacity: 1 } }}
            onClick={handleMenuOpen}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{ sx: { minWidth: 150 } }}
          >
            <MenuItem onClick={handleMenuClose}>Action</MenuItem>
            <MenuItem onClick={handleMenuClose}>Another action</MenuItem>
            <MenuItem onClick={handleMenuClose}>Something else</MenuItem>
            <MenuItem disabled>Disabled action</MenuItem>
          </Menu>
        </Box>
      </CardContent>
      <Box sx={{ height: 70, mt: 2 }}>
        <ResponsiveContainer width="100%" height="100%">
          {chartType === 'bar' ? (
            <BarChart data={chartData}>
              <Bar dataKey="value" fill="rgba(255,255,255,0.3)" />
            </BarChart>
          ) : (
            <LineChart data={chartData}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="rgba(255,255,255,0.55)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          )}
        </ResponsiveContainer>
      </Box>
    </Card>
  )
}

StatWidget.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  trend: PropTypes.oneOf(['up', 'down']).isRequired,
  trendValue: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  chartType: PropTypes.oneOf(['line', 'bar']),
  chartData: PropTypes.array.isRequired,
}

const WidgetsDropdown = (props) => {
  const theme = useTheme()

  const lineData1 = [
    { value: 65 },
    { value: 59 },
    { value: 84 },
    { value: 84 },
    { value: 51 },
    { value: 55 },
    { value: 40 },
  ]

  const lineData2 = [
    { value: 1 },
    { value: 18 },
    { value: 9 },
    { value: 17 },
    { value: 34 },
    { value: 22 },
    { value: 11 },
  ]

  const lineData3 = [
    { value: 78 },
    { value: 81 },
    { value: 80 },
    { value: 45 },
    { value: 34 },
    { value: 12 },
    { value: 40 },
  ]

  const barData = [
    { value: 78 },
    { value: 81 },
    { value: 80 },
    { value: 45 },
    { value: 34 },
    { value: 12 },
    { value: 40 },
    { value: 85 },
    { value: 65 },
    { value: 23 },
    { value: 12 },
    { value: 98 },
    { value: 34 },
    { value: 84 },
    { value: 67 },
    { value: 82 },
  ]

  return (
    <Grid container spacing={3} sx={props.className ? { mb: 3 } : {}}>
      <Grid size={{ xs: 12, sm: 6, xl: 4, xxl: 3 }}>
        <StatWidget
          title="Users"
          value="26K"
          trend="down"
          trendValue="-12.4%"
          color={theme.palette.primary.main}
          chartType="line"
          chartData={lineData1}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, xl: 4, xxl: 3 }}>
        <StatWidget
          title="Income"
          value="$6.200"
          trend="up"
          trendValue="40.9%"
          color={theme.palette.info.main}
          chartType="line"
          chartData={lineData2}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, xl: 4, xxl: 3 }}>
        <StatWidget
          title="Conversion Rate"
          value="2.49%"
          trend="up"
          trendValue="84.7%"
          color={theme.palette.warning.main}
          chartType="line"
          chartData={lineData3}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, xl: 4, xxl: 3 }}>
        <StatWidget
          title="Sessions"
          value="44K"
          trend="down"
          trendValue="-23.6%"
          color={theme.palette.error.main}
          chartType="bar"
          chartData={barData}
        />
      </Grid>
    </Grid>
  )
}

WidgetsDropdown.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
}

export default WidgetsDropdown
