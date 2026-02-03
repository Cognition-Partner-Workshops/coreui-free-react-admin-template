import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
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

const barData = [
  { name: 'January', commits: 40 },
  { name: 'February', commits: 20 },
  { name: 'March', commits: 12 },
  { name: 'April', commits: 39 },
  { name: 'May', commits: 10 },
  { name: 'June', commits: 40 },
  { name: 'July', commits: 39 },
]

const generateLineData = () => {
  const random = () => Math.round(Math.random() * 100)
  return ['January', 'February', 'March', 'April', 'May', 'June', 'July'].map((month) => ({
    name: month,
    dataset1: random(),
    dataset2: random(),
  }))
}

const lineData = generateLineData()

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
  { subject: 'Eating', A: 65, B: 28, fullMark: 150 },
  { subject: 'Drinking', A: 59, B: 48, fullMark: 150 },
  { subject: 'Sleeping', A: 90, B: 40, fullMark: 150 },
  { subject: 'Designing', A: 81, B: 19, fullMark: 150 },
  { subject: 'Coding', A: 56, B: 96, fullMark: 150 },
  { subject: 'Cycling', A: 55, B: 27, fullMark: 150 },
  { subject: 'Running', A: 40, B: 100, fullMark: 150 },
]

const Charts = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader title="Bar Chart" />
          <CardContent>
            <Box sx={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="commits" fill="#f87979" name="GitHub Commits" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader title="Line Chart" />
          <CardContent>
            <Box sx={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
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
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader title="Doughnut Chart" />
          <CardContent>
            <Box sx={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
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
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader title="Pie Chart" />
          <CardContent>
            <Box sx={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
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
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader title="Polar Area Chart" />
          <CardContent>
            <Box sx={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
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
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader title="Radar Chart" />
          <CardContent>
            <Box sx={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
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
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Charts
