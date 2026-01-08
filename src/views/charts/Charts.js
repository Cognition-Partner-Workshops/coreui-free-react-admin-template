import React, { useMemo } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import { Bar, Line, Doughnut, Pie, PolarArea, Radar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'
import { DocsLink } from 'src/components'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
)

const generateRandomData = (count) =>
  Array.from({ length: count }, () => Math.round(Math.random() * 100))

const Charts = () => {
  const lineData1 = useMemo(() => generateRandomData(7), [])
  const lineData2 = useMemo(() => generateRandomData(7), [])
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Bar Chart <DocsLink name="chart" />
              </Typography>
            }
          />
          <CardContent>
            <Bar
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'GitHub Commits',
                    backgroundColor: '#f87979',
                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                  },
                ],
              }}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Line Chart <DocsLink name="chart" />
              </Typography>
            }
          />
          <CardContent>
            <Line
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'rgba(220, 220, 220, 1)',
                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                    pointBorderColor: '#fff',
                    data: lineData1,
                  },
                  {
                    label: 'My Second dataset',
                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                    borderColor: 'rgba(151, 187, 205, 1)',
                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                    pointBorderColor: '#fff',
                    data: lineData2,
                  },
                ],
              }}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Doughnut Chart <DocsLink name="chart" />
              </Typography>
            }
          />
          <CardContent>
            <Doughnut
              data={{
                labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
                datasets: [
                  {
                    backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                    data: [40, 20, 80, 10],
                  },
                ],
              }}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Pie Chart <DocsLink name="chart" />
              </Typography>
            }
          />
          <CardContent>
            <Pie
              data={{
                labels: ['Red', 'Green', 'Yellow'],
                datasets: [
                  {
                    data: [300, 50, 100],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                  },
                ],
              }}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Polar Area Chart <DocsLink name="chart" />
              </Typography>
            }
          />
          <CardContent>
            <PolarArea
              data={{
                labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
                datasets: [
                  {
                    data: [11, 16, 7, 3, 14],
                    backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
                  },
                ],
              }}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Radar Chart <DocsLink name="chart" />
              </Typography>
            }
          />
          <CardContent>
            <Radar
              data={{
                labels: [
                  'Eating',
                  'Drinking',
                  'Sleeping',
                  'Designing',
                  'Coding',
                  'Cycling',
                  'Running',
                ],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'rgba(220, 220, 220, 1)',
                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                    pointBorderColor: '#fff',
                    data: [65, 59, 90, 81, 56, 55, 40],
                  },
                  {
                    label: 'My Second dataset',
                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                    borderColor: 'rgba(151, 187, 205, 1)',
                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                    pointBorderColor: '#fff',
                    data: [28, 48, 40, 19, 96, 27, 100],
                  },
                ],
              }}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
export default Charts
