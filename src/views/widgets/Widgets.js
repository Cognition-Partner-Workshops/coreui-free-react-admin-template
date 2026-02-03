import React from 'react'
import Grid from '@mui/material/Grid'
import WidgetsDropdown from './WidgetsDropdown'
import WidgetsBrand from './WidgetsBrand'

const Widgets = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <WidgetsDropdown />
      </Grid>
      <Grid item xs={12}>
        <WidgetsBrand withCharts />
      </Grid>
    </Grid>
  )
}

export default Widgets
