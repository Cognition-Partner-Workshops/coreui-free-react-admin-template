import React from 'react'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { name: 'January', users: 165, newUsers: 78, pageViews: 189 },
  { name: 'February', users: 142, newUsers: 95, pageViews: 156 },
  { name: 'March', users: 178, newUsers: 112, pageViews: 201 },
  { name: 'April', users: 156, newUsers: 89, pageViews: 178 },
  { name: 'May', users: 189, newUsers: 134, pageViews: 212 },
  { name: 'June', users: 167, newUsers: 98, pageViews: 189 },
  { name: 'July', users: 195, newUsers: 145, pageViews: 223 },
]

const MainChart = () => {
  const theme = useTheme()

  return (
    <Box sx={{ width: '100%', height: 300, mt: 3 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.divider} />
          <XAxis dataKey="name" stroke={theme.palette.text.secondary} tick={{ fontSize: 12 }} />
          <YAxis stroke={theme.palette.text.secondary} tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{
              backgroundColor: theme.palette.background.paper,
              border: `1px solid ${theme.palette.divider}`,
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="users"
            name="Users"
            stroke={theme.palette.info.main}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="newUsers"
            name="New Users"
            stroke={theme.palette.success.main}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="pageViews"
            name="Page Views"
            stroke={theme.palette.error.main}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  )
}

export default MainChart
