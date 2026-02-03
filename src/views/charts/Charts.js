import React, { useMemo } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import { DocsLink } from 'src/components'

const Charts = () => {
  const barData = [
    { name: 'January', commits: 40 },
    { name: 'February', commits: 20 },
    { name: 'March', commits: 12 },
    { name: 'April', commits: 39 },
    { name: 'May', commits: 10 },
    { name: 'June', commits: 40 },
    { name: 'July', commits: 39 },
  ]

  const lineData = useMemo(
    () => [
      { name: 'January', dataset1: 65, dataset2: 28 },
      { name: 'February', dataset1: 59, dataset2: 48 },
      { name: 'March', dataset1: 80, dataset2: 40 },
      { name: 'April', dataset1: 81, dataset2: 19 },
      { name: 'May', dataset1: 56, dataset2: 86 },
      { name: 'June', dataset1: 55, dataset2: 27 },
      { name: 'July', dataset1: 40, dataset2: 90 },
    ],
    [],
  )

  const doughnutData = [
    { name: 'VueJs', value: 40, color: '#41B883' },
    { name: 'EmberJs', value: 20, color: '#E46651' },
    { name: 'ReactJs', value: 80, color: '#00D8FF' },
    { name: 'AngularJs', value: 10, color: '#DD1B16' },
  ]

  const pieData = [
    { name: 'Red', value: 300, color: '#FF6384' },
    { name: 'Green', value: 50, color: '#36A2EB' },
    { name: 'Yellow', value: 100, color: '#FFCE56' },
  ]

  const polarData = [
    { name: 'Red', value: 11, color: '#FF6384' },
    { name: 'Green', value: 16, color: '#4BC0C0' },
    { name: 'Yellow', value: 7, color: '#FFCE56' },
    { name: 'Grey', value: 3, color: '#E7E9ED' },
    { name: 'Blue', value: 14, color: '#36A2EB' },
  ]

  const radarData = [
    { subject: 'Eating', A: 65, B: 28 },
    { subject: 'Drinking', A: 59, B: 48 },
    { subject: 'Sleeping', A: 90, B: 40 },
    { subject: 'Designing', A: 81, B: 19 },
    { subject: 'Coding', A: 56, B: 96 },
    { subject: 'Cycling', A: 55, B: 27 },
    { subject: 'Running', A: 40, B: 100 },
  ]

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} />
      <Grid item xs={12} md={6}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title="Bar Chart"
            action={<DocsLink name="chart" />}
            titleTypographyProps={{ variant: 'h6' }}
          />
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="commits" fill="#f87979" name="GitHub Commits" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title="Line Chart"
            action={<DocsLink name="chart" />}
            titleTypographyProps={{ variant: 'h6' }}
          />
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="dataset1"
                  stroke="rgba(220, 220, 220, 1)"
                  fill="rgba(220, 220, 220, 0.2)"
                  name="My First dataset"
                />
                <Line
                  type="monotone"
                  dataKey="dataset2"
                  stroke="rgba(151, 187, 205, 1)"
                  fill="rgba(151, 187, 205, 0.2)"
                  name="My Second dataset"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title="Doughnut Chart"
            action={<DocsLink name="chart" />}
            titleTypographyProps={{ variant: 'h6' }}
          />
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={doughnutData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  dataKey="value"
                  label
                >
                  {doughnutData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title="Pie Chart"
            action={<DocsLink name="chart" />}
            titleTypographyProps={{ variant: 'h6' }}
          />
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" outerRadius={100} dataKey="value" label>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title="Polar Area Chart"
            action={<DocsLink name="chart" />}
            titleTypographyProps={{ variant: 'h6' }}
          />
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={polarData} cx="50%" cy="50%" outerRadius={100} dataKey="value" label>
                  {polarData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title="Radar Chart"
            action={<DocsLink name="chart" />}
            titleTypographyProps={{ variant: 'h6' }}
          />
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar
                  name="My First dataset"
                  dataKey="A"
                  stroke="rgba(220, 220, 220, 1)"
                  fill="rgba(220, 220, 220, 0.2)"
                />
                <Radar
                  name="My Second dataset"
                  dataKey="B"
                  stroke="rgba(151, 187, 205, 1)"
                  fill="rgba(151, 187, 205, 0.2)"
                />
                <Legend />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Charts
