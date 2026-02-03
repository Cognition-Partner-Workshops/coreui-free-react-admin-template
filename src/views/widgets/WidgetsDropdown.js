import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import TrendingDownIcon from '@mui/icons-material/TrendingDown'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const StatCard = ({ title, value, trend, trendValue, color }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  return (
    <Card sx={{ bgcolor: `${color}.main`, color: 'white' }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="h4">{value}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', opacity: 0.8 }}>
                {trend === 'up' ? (
                  <TrendingUpIcon fontSize="small" />
                ) : (
                  <TrendingDownIcon fontSize="small" />
                )}
                <Typography variant="body2">{trendValue}</Typography>
              </Box>
            </Box>
            <Typography variant="body2" sx={{ opacity: 0.8, mt: 1 }}>
              {title}
            </Typography>
          </Box>
          <IconButton
            size="small"
            sx={{ color: 'white' }}
            onClick={(e) => setAnchorEl(e.currentTarget)}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
            <MenuItem onClick={() => setAnchorEl(null)}>Action</MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>Another action</MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>Something else</MenuItem>
          </Menu>
        </Box>
        <Box
          sx={{
            height: 70,
            mt: 2,
            bgcolor: 'rgba(255,255,255,0.1)',
            borderRadius: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="caption" sx={{ opacity: 0.7 }}>
            Chart placeholder
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

const WidgetsDropdown = (props) => {
  return (
    <Grid container spacing={3} sx={{ mb: props.className ? 3 : 0 }}>
      <Grid size={{ xs: 12, sm: 6, xl: 4, xxl: 3 }}>
        <StatCard title="Users" value="26K" trend="down" trendValue="-12.4%" color="primary" />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, xl: 4, xxl: 3 }}>
        <StatCard title="Income" value="$6,200" trend="up" trendValue="40.9%" color="info" />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, xl: 4, xxl: 3 }}>
        <StatCard
          title="Conversion Rate"
          value="2.49%"
          trend="up"
          trendValue="84.7%"
          color="warning"
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, xl: 4, xxl: 3 }}>
        <StatCard title="Sessions" value="44K" trend="down" trendValue="-23.6%" color="error" />
      </Grid>
    </Grid>
  )
}

WidgetsDropdown.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
}

export default WidgetsDropdown
