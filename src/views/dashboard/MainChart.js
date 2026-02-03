import React from 'react'
import Box from '@mui/material/Box'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts'

const generateData = () => {
  const random = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min
  return ['January', 'February', 'March', 'April', 'May', 'June', 'July'].map((month) => ({
    name: month,
    dataset1: random(50, 200),
    dataset2: random(50, 200),
    dataset3: 65,
  }))
}

const initialData = generateData()

const MainChart = () => {
  const data = initialData

  return (
    <Box sx={{ height: 300, mt: 5 }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="name" stroke="#666" />
          <YAxis stroke="#666" domain={[0, 250]} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="dataset1"
            stroke="#39f"
            fill="rgba(51, 153, 255, 0.1)"
            strokeWidth={2}
          />
          <Line type="monotone" dataKey="dataset2" stroke="#2eb85c" strokeWidth={2} dot={false} />
          <Line
            type="monotone"
            dataKey="dataset3"
            stroke="#e55353"
            strokeWidth={1}
            strokeDasharray="8 5"
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  )
}

export default MainChart
