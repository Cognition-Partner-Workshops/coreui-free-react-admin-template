import React from 'react'
import { useTheme } from '@mui/material/styles'
import { Card, CardContent, CardHeader, Typography, Grid } from '@mui/material'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const lineData = [
  { name: 'Jan', value: 65 },
  { name: 'Feb', value: 59 },
  { name: 'Mar', value: 80 },
  { name: 'Apr', value: 81 },
  { name: 'May', value: 56 },
  { name: 'Jun', value: 55 },
  { name: 'Jul', value: 40 },
]

const barData = [
  { name: 'Jan', value: 65 },
  { name: 'Feb', value: 59 },
  { name: 'Mar', value: 80 },
  { name: 'Apr', value: 81 },
  { name: 'May', value: 56 },
  { name: 'Jun', value: 55 },
  { name: 'Jul', value: 40 },
]

const pieData = [
  { name: 'Red', value: 300 },
  { name: 'Blue', value: 50 },
  { name: 'Yellow', value: 100 },
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

const Charts = () => {
  const theme = useTheme()
  const primaryColor = theme.palette.primary.main
  const secondaryColor = theme.palette.secondary.main
  const successColor = theme.palette.success.main
  const warningColor = theme.palette.warning.main
  const errorColor = theme.palette.error.main
  const infoColor = theme.palette.info.main

  const COLORS = [errorColor, primaryColor, warningColor]

  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, lg: 6 }}>
        <Card sx={{ mb: 3 }}>
          <CardHeader title={<Typography variant="h6">Line Chart</Typography>} />
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
                  dataKey="value"
                  stroke={primaryColor}
                  strokeWidth={2}
                  dot={{ fill: primaryColor }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, lg: 6 }}>
        <Card sx={{ mb: 3 }}>
          <CardHeader title={<Typography variant="h6">Bar Chart</Typography>} />
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill={infoColor} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, lg: 6 }}>
        <Card sx={{ mb: 3 }}>
          <CardHeader title={<Typography variant="h6">Area Chart</Typography>} />
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke={successColor}
                  fill={successColor}
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, lg: 6 }}>
        <Card sx={{ mb: 3 }}>
          <CardHeader title={<Typography variant="h6">Pie Chart</Typography>} />
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, lg: 6 }}>
        <Card sx={{ mb: 3 }}>
          <CardHeader title={<Typography variant="h6">Radar Chart</Typography>} />
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar
                  name="Dataset 1"
                  dataKey="A"
                  stroke={primaryColor}
                  fill={primaryColor}
                  fillOpacity={0.3}
                />
                <Radar
                  name="Dataset 2"
                  dataKey="B"
                  stroke={secondaryColor}
                  fill={secondaryColor}
                  fillOpacity={0.3}
                />
                <Legend />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, lg: 6 }}>
        <Card sx={{ mb: 3 }}>
          <CardHeader title={<Typography variant="h6">Multi-Line Chart</Typography>} />
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={radarData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="subject" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="A" stroke={primaryColor} strokeWidth={2} />
                <Line type="monotone" dataKey="B" stroke={warningColor} strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Charts
