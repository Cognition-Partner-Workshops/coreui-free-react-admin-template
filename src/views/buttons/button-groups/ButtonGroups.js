import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'

const ButtonGroups = () => {
  return (
    <Box>
      <Card>
        <CardHeader title="ButtonGroups" />
        <CardContent>
          <Typography color="text.secondary">
            ButtonGroups component - migrated to Material UI
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default ButtonGroups
