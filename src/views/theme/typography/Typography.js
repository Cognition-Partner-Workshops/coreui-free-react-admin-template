import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'

const TypographyPage = () => {
  return (
    <Box>
      <Card>
        <CardHeader title="Typography" />
        <CardContent>
          <Typography variant="h1" gutterBottom>
            h1. Heading
          </Typography>
          <Typography variant="h2" gutterBottom>
            h2. Heading
          </Typography>
          <Typography variant="h3" gutterBottom>
            h3. Heading
          </Typography>
          <Typography variant="h4" gutterBottom>
            h4. Heading
          </Typography>
          <Typography variant="h5" gutterBottom>
            h5. Heading
          </Typography>
          <Typography variant="h6" gutterBottom>
            h6. Heading
          </Typography>
          <Typography variant="body1" gutterBottom>
            Body 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Typography variant="body2" gutterBottom>
            Body 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            Caption text
          </Typography>
          <Typography variant="overline" display="block" gutterBottom>
            Overline text
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default TypographyPage
