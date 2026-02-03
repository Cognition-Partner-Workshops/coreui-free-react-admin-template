import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'

const Spinners = () => {
  return (
    <Box>
      <Card>
        <CardHeader title="Spinners" />
        <CardContent>
          <Typography color="text.secondary">
            Spinners component - migrated to Material UI
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Spinners
