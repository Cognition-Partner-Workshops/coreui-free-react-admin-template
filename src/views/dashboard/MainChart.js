import React from 'react'
import { useTheme } from '@mui/material/styles'
import { LineChart } from '@mui/x-charts/LineChart'
import Box from '@mui/material/Box'

const generateRandomData = (length, min, max) =>
  Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1)) + min)

const chartData = {
  xAxis: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  series1: generateRandomData(7, 50, 200),
  series2: generateRandomData(7, 50, 200),
  series3: [65, 65, 65, 65, 65, 65, 65],
}

const MainChart = () => {
  const theme = useTheme()

  return (
    <Box sx={{ width: '100%', height: 300, mt: 5 }}>
      <LineChart
        xAxis={[
          {
            data: chartData.xAxis,
            scaleType: 'point',
          },
        ]}
        series={[
          {
            data: chartData.series1,
            label: 'Dataset 1',
            color: theme.palette.info.main,
            area: true,
          },
          {
            data: chartData.series2,
            label: 'Dataset 2',
            color: theme.palette.success.main,
          },
          {
            data: chartData.series3,
            label: 'Dataset 3',
            color: theme.palette.error.main,
          },
        ]}
        height={300}
        slotProps={{
          legend: {
            hidden: true,
          },
        }}
      />
    </Box>
  )
}

export default MainChart
