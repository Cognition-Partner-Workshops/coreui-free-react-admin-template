import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import { useTheme } from '@mui/material/styles'
import { SparkLineChart } from '@mui/x-charts/SparkLineChart'
import { BarChart } from '@mui/x-charts/BarChart'

const WidgetsDropdown = (props) => {
  const theme = useTheme()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [activeMenu, setActiveMenu] = React.useState(null)

  const handleClick = (event, menuId) => {
    setAnchorEl(event.currentTarget)
    setActiveMenu(menuId)
  }

  const handleClose = () => {
    setAnchorEl(null)
    setActiveMenu(null)
  }

  const widgets = [
    {
      id: 'users',
      value: '26K',
      change: '-12.4%',
      isPositive: false,
      title: 'Users',
      color: theme.palette.primary.main,
      data: [65, 59, 84, 84, 51, 55, 40],
    },
    {
      id: 'income',
      value: '$6.200',
      change: '40.9%',
      isPositive: true,
      title: 'Income',
      color: theme.palette.info.main,
      data: [1, 18, 9, 17, 34, 22, 11],
    },
    {
      id: 'conversion',
      value: '2.49%',
      change: '84.7%',
      isPositive: true,
      title: 'Conversion Rate',
      color: theme.palette.warning.main,
      data: [78, 81, 80, 45, 34, 12, 40],
    },
    {
      id: 'sessions',
      value: '44K',
      change: '-23.6%',
      isPositive: false,
      title: 'Sessions',
      color: theme.palette.error.main,
      data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
      isBar: true,
    },
  ]

  return (
    <Grid container spacing={3} sx={{ mb: 4, ...props.sx }}>
      {widgets.map((widget) => (
        <Grid size={{ xs: 12, sm: 6, xl: 4, xxl: 3 }} key={widget.id}>
          <Card
            sx={{
              bgcolor: widget.color,
              color: 'white',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <CardContent sx={{ pb: 0 }}>
              <Box
                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}
              >
                <Box>
                  <Typography
                    variant="h4"
                    component="div"
                    sx={{ fontWeight: 'bold', color: 'white' }}
                  >
                    {widget.value}{' '}
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: 'rgba(255,255,255,0.7)' }}
                    >
                      ({widget.change}{' '}
                      {widget.isPositive ? (
                        <ArrowUpwardIcon sx={{ fontSize: 14 }} />
                      ) : (
                        <ArrowDownwardIcon sx={{ fontSize: 14 }} />
                      )}
                      )
                    </Typography>
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                    {widget.title}
                  </Typography>
                </Box>
                <IconButton
                  size="small"
                  sx={{ color: 'white' }}
                  onClick={(e) => handleClick(e, widget.id)}
                >
                  <MoreVertIcon />
                </IconButton>
              </Box>
            </CardContent>
            <Box sx={{ height: 70, mt: 2, px: 2 }}>
              {widget.isBar ? (
                <BarChart
                  series={[{ data: widget.data, color: 'rgba(255,255,255,0.5)' }]}
                  height={70}
                  margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
                  xAxis={[{ scaleType: 'band', data: widget.data.map((_, i) => i) }]}
                  slotProps={{ legend: { hidden: true } }}
                  leftAxis={null}
                  bottomAxis={null}
                />
              ) : (
                <SparkLineChart
                  data={widget.data}
                  height={70}
                  curve="natural"
                  colors={['rgba(255,255,255,0.7)']}
                  showHighlight
                  showTooltip
                />
              )}
            </Box>
          </Card>
        </Grid>
      ))}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Action</MenuItem>
        <MenuItem onClick={handleClose}>Another action</MenuItem>
        <MenuItem onClick={handleClose}>Something else here...</MenuItem>
        <MenuItem disabled>Disabled action</MenuItem>
      </Menu>
    </Grid>
  )
}

WidgetsDropdown.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
  sx: PropTypes.object,
}

export default WidgetsDropdown
