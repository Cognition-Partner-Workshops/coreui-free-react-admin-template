import React, { useMemo } from 'react'
import { useTheme } from '@mui/material/styles'
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

const MainChart = () => {
  const theme = useTheme()

  const data = useMemo(
    () => [
      { name: 'January', dataset1: 165, dataset2: 128, dataset3: 65 },
      { name: 'February', dataset1: 159, dataset2: 148, dataset3: 65 },
      { name: 'March', dataset1: 180, dataset2: 140, dataset3: 65 },
      { name: 'April', dataset1: 181, dataset2: 119, dataset3: 65 },
      { name: 'May', dataset1: 156, dataset2: 186, dataset3: 65 },
      { name: 'June', dataset1: 155, dataset2: 127, dataset3: 65 },
      { name: 'July', dataset1: 140, dataset2: 190, dataset3: 65 },
    ],
    [],
  )

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data} margin={{ top: 40, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.divider} />
        <XAxis
          dataKey="name"
          stroke={theme.palette.text.secondary}
          tick={{ fill: theme.palette.text.secondary }}
        />
        <YAxis
          stroke={theme.palette.text.secondary}
          tick={{ fill: theme.palette.text.secondary }}
          domain={[0, 250]}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: theme.palette.background.paper,
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 4,
          }}
        />
        <Area
          type="monotone"
          dataKey="dataset1"
          stroke={theme.palette.info.main}
          fill={`${theme.palette.info.main}20`}
          strokeWidth={2}
          name="My First dataset"
        />
        <Line
          type="monotone"
          dataKey="dataset2"
          stroke={theme.palette.success.main}
          strokeWidth={2}
          dot={false}
          name="My Second dataset"
        />
        <Line
          type="monotone"
          dataKey="dataset3"
          stroke={theme.palette.error.main}
          strokeWidth={1}
          strokeDasharray="8 5"
          dot={false}
          name="My Third dataset"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default MainChart
