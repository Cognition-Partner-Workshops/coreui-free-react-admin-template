import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'

import WidgetsBrand from './WidgetsBrand'
import WidgetsDropdown from './WidgetsDropdown'

const Widgets = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Widgets" subheader="Widgets Dropdown" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Widgets dropdown component showcasing statistics with charts.
            </Typography>
            <WidgetsDropdown />
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Widgets" subheader="Widgets Brand" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Brand widgets showcasing social media statistics.
            </Typography>
            <WidgetsBrand />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Widgets
