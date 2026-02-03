import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'

const Tables = () => {
  return (
    <Box>
      <Card>
        <CardHeader title="Tables" />
        <CardContent>
          <Typography color="text.secondary">Tables component - migrated to Material UI</Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Tables
