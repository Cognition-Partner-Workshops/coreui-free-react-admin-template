import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'

const CoreUIIcons = () => {
  return (
    <Box>
      <Card>
        <CardHeader title="Icons" />
        <CardContent>
          <Typography color="text.secondary">
            Icons component - migrated to Material UI. Use @mui/icons-material for icons.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default CoreUIIcons
