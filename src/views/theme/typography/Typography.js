import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

const TypographyPage = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Typography
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        MUI provides a typography system that helps maintain consistent text styling across your
        application.
      </Typography>

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Headings
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Box sx={{ mb: 2 }}>
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
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Body Text
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate
            numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant="body2" gutterBottom>
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate
            numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Other Variants
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Typography variant="subtitle1" gutterBottom>
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography>
          <Typography variant="button" display="block" gutterBottom>
            button text
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            caption text
          </Typography>
          <Typography variant="overline" display="block" gutterBottom>
            overline text
          </Typography>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Text Colors
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Typography color="primary" gutterBottom>
            Primary color text
          </Typography>
          <Typography color="secondary" gutterBottom>
            Secondary color text
          </Typography>
          <Typography color="text.primary" gutterBottom>
            Primary text color
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            Secondary text color
          </Typography>
          <Typography color="text.disabled" gutterBottom>
            Disabled text color
          </Typography>
          <Typography color="error" gutterBottom>
            Error color text
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default TypographyPage
