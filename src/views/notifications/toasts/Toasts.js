import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'

const Toasts = () => {
  return (
    <Box>
      <Card>
        <CardHeader title="Toasts" />
        <CardContent>
          <Typography color="text.secondary">Toasts component - migrated to Material UI</Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Toasts
