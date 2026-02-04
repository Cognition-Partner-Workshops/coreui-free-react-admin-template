import React from 'react'
import { useTheme } from '@mui/material/styles'
import { Box } from '@mui/material'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'

const data = [
  { name: 'January', dataset1: 168, dataset2: 132, dataset3: 65 },
  { name: 'February', dataset1: 142, dataset2: 178, dataset3: 65 },
  { name: 'March', dataset1: 189, dataset2: 95, dataset3: 65 },
  { name: 'April', dataset1: 112, dataset2: 156, dataset3: 65 },
  { name: 'May', dataset1: 175, dataset2: 88, dataset3: 65 },
  { name: 'June', dataset1: 98, dataset2: 145, dataset3: 65 },
  { name: 'July', dataset1: 156, dataset2: 112, dataset3: 65 },
]

const MainChart = () => {
  const theme = useTheme()

  return (
    <Box sx={{ width: '100%', height: 300, mt: 4 }}>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.divider} vertical={false} />
          <XAxis
            dataKey="name"
            stroke={theme.palette.text.secondary}
            tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
            domain={[0, 250]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: theme.palette.background.paper,
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: 8,
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="dataset1"
            name="My First dataset"
            stroke={theme.palette.info.main}
            strokeWidth={2}
            fill={`${theme.palette.info.main}20`}
            dot={false}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="dataset2"
            name="My Second dataset"
            stroke={theme.palette.success.main}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="dataset3"
            name="My Third dataset"
            stroke={theme.palette.error.main}
            strokeWidth={1}
            strokeDasharray="8 5"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  )
}

export default MainChart
