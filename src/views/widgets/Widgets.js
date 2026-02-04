import React from 'react'
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  LinearProgress,
  Link,
  useTheme,
  alpha,
} from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import PersonIcon from '@mui/icons-material/Person'
import NightsStayIcon from '@mui/icons-material/NightsStay'
import NotificationsIcon from '@mui/icons-material/Notifications'
import LaptopIcon from '@mui/icons-material/Laptop'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import { DocsExample } from 'src/components'
import WidgetsBrand from './WidgetsBrand'
import WidgetsDropdown from './WidgetsDropdown'

const WidgetStatsB = ({ value, title, progress, text, color, inverse }) => {
  const theme = useTheme()

  return (
    <Card
      sx={{
        backgroundColor: inverse ? theme.palette[color]?.main : 'background.paper',
        color: inverse ? 'white' : 'text.primary',
        transition: theme.transitions.create(['transform', 'box-shadow']),
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: theme.shadows[4],
        },
      }}
    >
      <CardContent>
        <Typography variant="h5" fontWeight={600} gutterBottom>
          {value}
        </Typography>
        <Typography
          variant="body2"
          color={inverse ? 'inherit' : 'text.secondary'}
          sx={{ opacity: inverse ? 0.8 : 1 }}
        >
          {title}
        </Typography>
        <Box sx={{ mt: 2, mb: 1 }}>
          <LinearProgress
            variant="determinate"
            value={progress?.value || 0}
            sx={{
              height: 6,
              borderRadius: 3,
              backgroundColor: inverse
                ? 'rgba(255,255,255,0.2)'
                : alpha(
                    theme.palette[progress?.color || color]?.main || theme.palette.primary.main,
                    0.2,
                  ),
              '& .MuiLinearProgress-bar': {
                backgroundColor: inverse ? 'white' : theme.palette[progress?.color || color]?.main,
                borderRadius: 3,
              },
            }}
          />
        </Box>
        <Typography
          variant="caption"
          color={inverse ? 'inherit' : 'text.secondary'}
          sx={{ opacity: inverse ? 0.8 : 1 }}
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  )
}

const WidgetStatsF = ({ icon: Icon, title, value, color, footer }) => {
  const theme = useTheme()

  return (
    <Card
      sx={{
        transition: theme.transitions.create(['transform', 'box-shadow']),
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: theme.shadows[4],
        },
      }}
    >
      <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: 2,
            backgroundColor: alpha(theme.palette[color]?.main || theme.palette.primary.main, 0.1),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.palette[color]?.main || theme.palette.primary.main,
          }}
        >
          <Icon sx={{ fontSize: 28 }} />
        </Box>
        <Box>
          <Typography variant="h6" fontWeight={600}>
            {value}
          </Typography>
          <Typography variant="body2" color="text.secondary" textTransform="uppercase">
            {title}
          </Typography>
        </Box>
      </CardContent>
      {footer && <Box sx={{ px: 2, py: 1, borderTop: 1, borderColor: 'divider' }}>{footer}</Box>}
    </Card>
  )
}

const Widgets = () => {
  const theme = useTheme()

  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title="Widgets" />
      <CardContent>
        <DocsExample href="components/card">
          <WidgetsDropdown />
        </DocsExample>

        <DocsExample href="components/linear-progress">
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6, xl: 4, xxl: 3 }}>
              <WidgetStatsB
                progress={{ color: 'success', value: 89.9 }}
                text="Lorem ipsum dolor sit amet enim."
                title="Widget title"
                value="89.9%"
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, xl: 4, xxl: 3 }}>
              <WidgetStatsB
                value="12.124"
                title="Widget title"
                progress={{ color: 'info', value: 89.9 }}
                text="Lorem ipsum dolor sit amet enim."
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, xl: 4, xxl: 3 }}>
              <WidgetStatsB
                value="$98.111,00"
                title="Widget title"
                progress={{ color: 'warning', value: 89.9 }}
                text="Lorem ipsum dolor sit amet enim."
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, xl: 4, xxl: 3 }}>
              <WidgetStatsB
                value="2 TB"
                title="Widget title"
                progress={{ color: 'primary', value: 89.9 }}
                text="Lorem ipsum dolor sit amet enim."
              />
            </Grid>
          </Grid>
        </DocsExample>

        <DocsExample href="components/linear-progress">
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6, xl: 4, xxl: 3 }}>
              <WidgetStatsB
                color="success"
                inverse
                value="89.9%"
                title="Widget title"
                progress={{ value: 89.9 }}
                text="Lorem ipsum dolor sit amet enim."
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, xl: 4, xxl: 3 }}>
              <WidgetStatsB
                color="info"
                inverse
                value="12.124"
                title="Widget title"
                progress={{ value: 89.9 }}
                text="Lorem ipsum dolor sit amet enim."
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, xl: 4, xxl: 3 }}>
              <WidgetStatsB
                color="warning"
                inverse
                value="$98.111,00"
                title="Widget title"
                progress={{ value: 89.9 }}
                text="Lorem ipsum dolor sit amet enim."
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, xl: 4, xxl: 3 }}>
              <WidgetStatsB
                color="primary"
                inverse
                value="2 TB"
                title="Widget title"
                progress={{ value: 89.9 }}
                text="Lorem ipsum dolor sit amet enim."
              />
            </Grid>
          </Grid>
        </DocsExample>

        <DocsExample href="components/card">
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6, xl: 4, xxl: 3 }}>
              <WidgetStatsF icon={SettingsIcon} title="income" value="$1.999,50" color="primary" />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, xl: 4, xxl: 3 }}>
              <WidgetStatsF icon={PersonIcon} title="income" value="$1.999,50" color="info" />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, xl: 4, xxl: 3 }}>
              <WidgetStatsF
                icon={NightsStayIcon}
                title="income"
                value="$1.999,50"
                color="warning"
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, xl: 4, xxl: 3 }}>
              <WidgetStatsF
                icon={NotificationsIcon}
                title="income"
                value="$1.999,50"
                color="error"
              />
            </Grid>
          </Grid>
        </DocsExample>

        <DocsExample href="components/card">
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6, xl: 4, xxl: 3 }}>
              <WidgetStatsF
                icon={SettingsIcon}
                title="income"
                value="$1.999,50"
                color="primary"
                footer={
                  <Link
                    href="https://mui.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    <Typography variant="caption" color="text.secondary">
                      View more
                    </Typography>
                    <ArrowForwardIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                  </Link>
                }
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, xl: 4, xxl: 3 }}>
              <WidgetStatsF
                icon={LaptopIcon}
                title="income"
                value="$1.999,50"
                color="info"
                footer={
                  <Link
                    href="https://mui.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    <Typography variant="caption" color="text.secondary">
                      View more
                    </Typography>
                    <ArrowForwardIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                  </Link>
                }
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, xl: 4, xxl: 3 }}>
              <WidgetStatsF
                icon={NightsStayIcon}
                title="income"
                value="$1.999,50"
                color="warning"
                footer={
                  <Link
                    href="https://mui.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    <Typography variant="caption" color="text.secondary">
                      View more
                    </Typography>
                    <ArrowForwardIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                  </Link>
                }
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, xl: 4, xxl: 3 }}>
              <WidgetStatsF
                icon={NotificationsIcon}
                title="income"
                value="$1.999,50"
                color="error"
                footer={
                  <Link
                    href="https://mui.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    <Typography variant="caption" color="text.secondary">
                      View more
                    </Typography>
                    <ArrowForwardIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                  </Link>
                }
              />
            </Grid>
          </Grid>
        </DocsExample>

        <DocsExample href="components/card">
          <WidgetsBrand withCharts />
        </DocsExample>
      </CardContent>
    </Card>
  )
}

export default Widgets
