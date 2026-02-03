import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'
import { Line, Bar, Doughnut, Pie, Radar, PolarArea } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Filler,
  Tooltip,
  Legend,
)

const Charts = () => {
  const theme = useTheme()
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

  const lineData = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
        data: [40, 20, 12, 39, 10, 40, 39],
        fill: false,
      },
      {
        label: 'Dataset 2',
        backgroundColor: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
        data: [50, 12, 28, 29, 7, 25, 12],
        fill: false,
      },
    ],
  }

  const barData = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        backgroundColor: theme.palette.info.main,
        data: [40, 20, 12, 39, 10, 40, 39],
      },
      {
        label: 'Dataset 2',
        backgroundColor: theme.palette.error.main,
        data: [50, 12, 28, 29, 7, 25, 12],
      },
    ],
  }

  const doughnutData = {
    labels: ['Red', 'Green', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          theme.palette.error.main,
          theme.palette.success.main,
          theme.palette.warning.main,
        ],
      },
    ],
  }

  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Card>
          <CardHeader title="Line Chart" />
          <CardContent>
            <Line data={lineData} />
          </CardContent>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Card>
          <CardHeader title="Bar Chart" />
          <CardContent>
            <Bar data={barData} />
          </CardContent>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Card>
          <CardHeader title="Doughnut Chart" />
          <CardContent>
            <Doughnut data={doughnutData} />
          </CardContent>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Card>
          <CardHeader title="Pie Chart" />
          <CardContent>
            <Pie data={doughnutData} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Charts
