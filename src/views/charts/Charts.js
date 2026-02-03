import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import { LineChart } from '@mui/x-charts/LineChart'
import { BarChart } from '@mui/x-charts/BarChart'
import { PieChart } from '@mui/x-charts/PieChart'

const Charts = () => {
  const lineData = [2, 5.5, 2, 8.5, 1.5, 5]
  const xLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']

  const barData = [4, 3, 5, 2, 6, 4]

  const pieData = [
    { id: 0, value: 10, label: 'Series A' },
    { id: 1, value: 15, label: 'Series B' },
    { id: 2, value: 20, label: 'Series C' },
  ]

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Charts" subheader="Line Chart" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              A line chart displays information as a series of data points connected by straight
              line segments.
            </Typography>
            <LineChart
              xAxis={[{ scaleType: 'point', data: xLabels }]}
              series={[
                {
                  data: lineData,
                  area: true,
                },
              ]}
              height={300}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Charts" subheader="Bar Chart" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              A bar chart presents categorical data with rectangular bars with heights proportional
              to the values that they represent.
            </Typography>
            <BarChart
              xAxis={[{ scaleType: 'band', data: xLabels }]}
              series={[{ data: barData }]}
              height={300}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Charts" subheader="Pie Chart" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              A pie chart is a circular statistical graphic divided into slices to illustrate
              numerical proportion.
            </Typography>
            <PieChart
              series={[
                {
                  data: pieData,
                },
              ]}
              height={300}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Charts
