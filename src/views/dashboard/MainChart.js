import React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { LineChart } from '@mui/x-charts/LineChart'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
const dataset1 = [168, 170, 178, 190, 203, 276, 265]
const dataset2 = [65, 59, 84, 84, 51, 55, 40]
const dataset3 = [65, 65, 65, 65, 65, 65, 65]

const MainChart = () => {
  const theme = useTheme()

  return (
    <Box sx={{ width: '100%', height: 300, mt: 4 }}>
      <LineChart
        xAxis={[
          {
            data: months,
            scaleType: 'point',
            tickLabelStyle: {
              fill: theme.palette.text.secondary,
            },
          },
        ]}
        yAxis={[
          {
            min: 0,
            max: 250,
            tickLabelStyle: {
              fill: theme.palette.text.secondary,
            },
          },
        ]}
        series={[
          {
            data: dataset1,
            label: 'My First dataset',
            color: theme.palette.info.main,
            area: true,
            showMark: false,
          },
          {
            data: dataset2,
            label: 'My Second dataset',
            color: theme.palette.success.main,
            showMark: false,
          },
          {
            data: dataset3,
            label: 'My Third dataset',
            color: theme.palette.error.main,
            showMark: false,
          },
        ]}
        slotProps={{
          legend: {
            hidden: true,
          },
        }}
        sx={{
          '& .MuiAreaElement-root': {
            fillOpacity: 0.1,
          },
        }}
      />
    </Box>
  )
}

export default MainChart
