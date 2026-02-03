import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import MuiTypography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

const Typography = () => {
  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title="Typography" subheader="MUI typography variants" />
      <CardContent>
        <Stack spacing={2}>
          <MuiTypography variant="h1">h1. Heading</MuiTypography>
          <MuiTypography variant="h2">h2. Heading</MuiTypography>
          <MuiTypography variant="h3">h3. Heading</MuiTypography>
          <MuiTypography variant="h4">h4. Heading</MuiTypography>
          <MuiTypography variant="h5">h5. Heading</MuiTypography>
          <MuiTypography variant="h6">h6. Heading</MuiTypography>
          <MuiTypography variant="subtitle1">subtitle1. Lorem ipsum dolor sit amet</MuiTypography>
          <MuiTypography variant="subtitle2">subtitle2. Lorem ipsum dolor sit amet</MuiTypography>
          <MuiTypography variant="body1">
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </MuiTypography>
          <MuiTypography variant="body2">
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </MuiTypography>
          <MuiTypography variant="button" display="block">
            button text
          </MuiTypography>
          <MuiTypography variant="caption" display="block">
            caption text
          </MuiTypography>
          <MuiTypography variant="overline" display="block">
            overline text
          </MuiTypography>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default Typography
