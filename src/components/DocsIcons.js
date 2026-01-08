import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

import IconsImg from 'src/assets/images/icons.webp'

const DocsIcons = () => (
  <Box
    sx={{
      backgroundColor: 'warning.light',
      opacity: 0.9,
      border: 2,
      borderColor: 'warning.main',
      borderRadius: 1,
      mb: 4,
      p: 3,
    }}
  >
    <Grid container spacing={3} alignItems="center">
      <Grid item xs={12} xl="auto" sx={{ display: { xs: 'none', xl: 'block' } }}>
        <Box component="img" src={IconsImg} alt="Material Icons" sx={{ width: 160, height: 160 }} />
      </Grid>
      <Grid item xs={12} md>
        <Typography variant="body1">
          Material UI Icons package is delivered with more than 2000 icons in multiple formats.
          Material Icons are beautifully crafted symbols for common actions and items. You can use
          them in your digital products for web or mobile app. For more information please visit our
          documentation.
        </Typography>
      </Grid>
      <Grid item xs={12} md="auto">
        <Button
          variant="contained"
          color="warning"
          href="https://mui.com/material-ui/material-icons/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'white' }}
        >
          Explore Documentation
        </Button>
      </Grid>
    </Grid>
  </Box>
)

export default DocsIcons
