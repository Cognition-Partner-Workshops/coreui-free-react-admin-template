import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'

const ListGroups = () => {
  return (
    <Box>
      <Card>
        <CardHeader title="ListGroups" />
        <CardContent>
          <Typography color="text.secondary">
            ListGroups component - migrated to Material UI
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default ListGroups
