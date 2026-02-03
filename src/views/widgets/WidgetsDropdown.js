import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { SparkLineChart } from '@mui/x-charts/SparkLineChart'
import { BarChart } from '@mui/x-charts/BarChart'

const StatWidget = ({ color, value, change, changeType, title, chartData, chartType }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const theme = useTheme()

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <Card
      sx={{
        bgcolor: color,
        color: 'white',
        height: '100%',
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box>
            <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
              {value}{' '}
              <Typography component="span" variant="body2" sx={{ opacity: 0.8 }}>
                ({change}{' '}
                {changeType === 'down' ? (
                  <ArrowDownwardIcon sx={{ fontSize: 14 }} />
                ) : (
                  <ArrowUpwardIcon sx={{ fontSize: 14 }} />
                )}
                )
              </Typography>
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mt: 1 }}>
              {title}
            </Typography>
          </Box>
          <IconButton sx={{ color: 'white' }} onClick={handleMenuOpen}>
            <MoreVertIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose}>Action</MenuItem>
            <MenuItem onClick={handleMenuClose}>Another action</MenuItem>
            <MenuItem onClick={handleMenuClose}>Something else here...</MenuItem>
            <MenuItem disabled>Disabled action</MenuItem>
          </Menu>
        </Box>
        <Box sx={{ mt: 2, height: 70 }}>
          {chartType === 'bar' ? (
            <BarChart
              series={[{ data: chartData, color: 'rgba(255,255,255,0.5)' }]}
              height={70}
              xAxis={[{ scaleType: 'band', data: chartData.map((_, i) => i) }]}
              margin={{ top: 5, bottom: 5, left: 5, right: 5 }}
              leftAxis={null}
              bottomAxis={null}
            />
          ) : (
            <SparkLineChart
              data={chartData}
              height={70}
              curve="natural"
              area
              colors={['rgba(255,255,255,0.5)']}
            />
          )}
        </Box>
      </CardContent>
    </Card>
  )
}

StatWidget.propTypes = {
  color: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.string.isRequired,
  changeType: PropTypes.oneOf(['up', 'down']).isRequired,
  title: PropTypes.string.isRequired,
  chartData: PropTypes.array.isRequired,
  chartType: PropTypes.oneOf(['line', 'bar']),
}

const WidgetsDropdown = (props) => {
  const theme = useTheme()

  return (
    <Grid container spacing={3} sx={{ mb: props.className ? 4 : 0 }}>
      <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
        <StatWidget
          color={theme.palette.primary.main}
          value="26K"
          change="-12.4%"
          changeType="down"
          title="Users"
          chartData={[65, 59, 84, 84, 51, 55, 40]}
          chartType="line"
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
        <StatWidget
          color={theme.palette.info.main}
          value="$6.200"
          change="40.9%"
          changeType="up"
          title="Income"
          chartData={[1, 18, 9, 17, 34, 22, 11]}
          chartType="line"
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
        <StatWidget
          color={theme.palette.warning.main}
          value="2.49%"
          change="84.7%"
          changeType="up"
          title="Conversion Rate"
          chartData={[78, 81, 80, 45, 34, 12, 40]}
          chartType="line"
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
        <StatWidget
          color={theme.palette.error.main}
          value="44K"
          change="-23.6%"
          changeType="down"
          title="Sessions"
          chartData={[78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82]}
          chartType="bar"
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
