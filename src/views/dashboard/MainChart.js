import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const MainChart = () => {
  return (
    <Box
      sx={{
        height: 300,
        mt: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'grey.100',
        borderRadius: 1,
      }}
    >
      <Typography color="text.secondary">
        Main Chart Area - Use @mui/x-charts LineChart component
      </Typography>
    </Box>
  )
}

export default MainChart
