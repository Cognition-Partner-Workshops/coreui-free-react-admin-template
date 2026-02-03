import React, { useMemo } from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
)

const generateRandomData = (count, min, max) => {
  const data = []
  for (let i = 0; i < count; i++) {
    data.push(Math.floor(Math.random() * (max - min + 1)) + min)
  }
  return data
}

const initialData1 = generateRandomData(7, 50, 200)
const initialData2 = generateRandomData(7, 50, 200)

const MainChart = () => {
  const theme = useTheme()

  const data = useMemo(
    () => ({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor:
            theme.palette.mode === 'dark' ? 'rgba(57, 153, 255, 0.1)' : 'rgba(57, 153, 255, 0.1)',
          borderColor: theme.palette.info.main,
          pointHoverBackgroundColor: theme.palette.info.main,
          borderWidth: 2,
          data: initialData1,
          fill: true,
        },
        {
          label: 'My Second dataset',
          backgroundColor: 'transparent',
          borderColor: theme.palette.success.main,
          pointHoverBackgroundColor: theme.palette.success.main,
          borderWidth: 2,
          data: initialData2,
        },
        {
          label: 'My Third dataset',
          backgroundColor: 'transparent',
          borderColor: theme.palette.error.main,
          pointHoverBackgroundColor: theme.palette.error.main,
          borderWidth: 1,
          borderDash: [8, 5],
          data: [65, 65, 65, 65, 65, 65, 65],
        },
      ],
    }),
    [theme],
  )

  const options = useMemo(
    () => ({
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            color: theme.palette.divider,
            drawOnChartArea: false,
          },
          ticks: {
            color: theme.palette.text.secondary,
          },
        },
        y: {
          beginAtZero: true,
          border: {
            color: theme.palette.divider,
          },
          grid: {
            color: theme.palette.divider,
          },
          max: 250,
          ticks: {
            color: theme.palette.text.secondary,
            maxTicksLimit: 5,
            stepSize: Math.ceil(250 / 5),
          },
        },
      },
      elements: {
        line: {
          tension: 0.4,
        },
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3,
        },
      },
    }),
    [theme],
  )

  return (
    <Box sx={{ height: 300, mt: 5 }}>
      <Line data={data} options={options} />
    </Box>
  )
}

export default MainChart
