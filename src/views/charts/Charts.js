import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import { BarChart } from '@mui/x-charts/BarChart'
import { LineChart } from '@mui/x-charts/LineChart'
import { PieChart } from '@mui/x-charts/PieChart'

const generateRandomData = (length) => Array.from({ length }, () => Math.round(Math.random() * 100))

const lineData1 = generateRandomData(7)
const lineData2 = generateRandomData(7)

const Charts = () => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Card sx={{ mb: 3 }}>
          <CardHeader title="Bar Chart" />
          <CardContent>
            <BarChart
              xAxis={[{ scaleType: 'band', data: months }]}
              series={[
                { data: [40, 20, 12, 39, 10, 40, 39], label: 'GitHub Commits', color: '#f87979' },
              ]}
              height={300}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Card sx={{ mb: 3 }}>
          <CardHeader title="Line Chart" />
          <CardContent>
            <LineChart
              xAxis={[{ scaleType: 'point', data: months }]}
              series={[
                { data: lineData1, label: 'Dataset 1', color: 'rgba(220, 220, 220, 1)' },
                { data: lineData2, label: 'Dataset 2', color: 'rgba(151, 187, 205, 1)' },
              ]}
              height={300}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Card sx={{ mb: 3 }}>
          <CardHeader title="Doughnut Chart" />
          <CardContent>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 40, label: 'VueJs', color: '#41B883' },
                    { id: 1, value: 20, label: 'EmberJs', color: '#E46651' },
                    { id: 2, value: 80, label: 'ReactJs', color: '#00D8FF' },
                    { id: 3, value: 10, label: 'AngularJs', color: '#DD1B16' },
                  ],
                  innerRadius: 60,
                },
              ]}
              height={300}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Card sx={{ mb: 3 }}>
          <CardHeader title="Pie Chart" />
          <CardContent>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 300, label: 'Red', color: '#FF6384' },
                    { id: 1, value: 50, label: 'Green', color: '#36A2EB' },
                    { id: 2, value: 100, label: 'Yellow', color: '#FFCE56' },
                  ],
                },
              ]}
              height={300}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Card sx={{ mb: 3 }}>
          <CardHeader title="Polar Area Chart" />
          <CardContent>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 11, label: 'Red', color: '#FF6384' },
                    { id: 1, value: 16, label: 'Green', color: '#4BC0C0' },
                    { id: 2, value: 7, label: 'Yellow', color: '#FFCE56' },
                    { id: 3, value: 3, label: 'Grey', color: '#E7E9ED' },
                    { id: 4, value: 14, label: 'Blue', color: '#36A2EB' },
                  ],
                },
              ]}
              height={300}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Card sx={{ mb: 3 }}>
          <CardHeader title="Radar Chart (as Bar)" />
          <CardContent>
            <BarChart
              xAxis={[
                {
                  scaleType: 'band',
                  data: [
                    'Eating',
                    'Drinking',
                    'Sleeping',
                    'Designing',
                    'Coding',
                    'Cycling',
                    'Running',
                  ],
                },
              ]}
              series={[
                {
                  data: [65, 59, 90, 81, 56, 55, 40],
                  label: 'Dataset 1',
                  color: 'rgba(220, 220, 220, 0.8)',
                },
                {
                  data: [28, 48, 40, 19, 96, 27, 100],
                  label: 'Dataset 2',
                  color: 'rgba(151, 187, 205, 0.8)',
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
