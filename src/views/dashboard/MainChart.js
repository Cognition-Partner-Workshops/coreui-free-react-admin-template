import React, { useRef } from 'react'
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
  Filler
)

const MainChart = () => {
  const theme = useTheme()
  const chartRef = useRef(null)

  const random = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min

  const borderColor = theme.palette.divider
  const textColor = theme.palette.text.primary

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: `${theme.palette.info.main}20`,
        borderColor: theme.palette.info.main,
        pointHoverBackgroundColor: theme.palette.info.main,
        borderWidth: 2,
        data: [
          random(50, 200),
          random(50, 200),
          random(50, 200),
          random(50, 200),
          random(50, 200),
          random(50, 200),
          random(50, 200),
        ],
        fill: true,
      },
      {
        label: 'My Second dataset',
        backgroundColor: 'transparent',
        borderColor: theme.palette.success.main,
        pointHoverBackgroundColor: theme.palette.success.main,
        borderWidth: 2,
        data: [
          random(50, 200),
          random(50, 200),
          random(50, 200),
          random(50, 200),
          random(50, 200),
          random(50, 200),
          random(50, 200),
        ],
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
  }

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: borderColor,
          drawOnChartArea: false,
        },
        ticks: {
          color: textColor,
        },
      },
      y: {
        beginAtZero: true,
        border: {
          color: borderColor,
        },
        grid: {
          color: borderColor,
        },
        max: 250,
        ticks: {
          color: textColor,
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
  }

  return (
    <div style={{ height: '300px', marginTop: '40px' }}>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  )
}

export default MainChart
