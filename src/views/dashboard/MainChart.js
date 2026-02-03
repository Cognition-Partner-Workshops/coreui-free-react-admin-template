import React, { useEffect, useRef, useMemo } from 'react'
import { useTheme } from '@mui/material/styles'
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

const MainChart = () => {
  const theme = useTheme()
  const chartRef = useRef(null)

  const data = useMemo(
    () => ({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor:
            theme.palette.mode === 'dark' ? 'rgba(33, 150, 243, 0.1)' : 'rgba(33, 150, 243, 0.1)',
          borderColor: theme.palette.info.main,
          pointHoverBackgroundColor: theme.palette.info.main,
          borderWidth: 2,
          data: [165, 89, 132, 156, 78, 145, 198],
          fill: true,
        },
        {
          label: 'My Second dataset',
          backgroundColor: 'transparent',
          borderColor: theme.palette.success.main,
          pointHoverBackgroundColor: theme.palette.success.main,
          borderWidth: 2,
          data: [92, 178, 125, 67, 189, 112, 156],
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

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.update()
    }
  }, [theme.palette.mode])

  return (
    <Line
      ref={chartRef}
      data={data}
      options={options}
      style={{ height: '300px', marginTop: '40px' }}
    />
  )
}

export default MainChart
