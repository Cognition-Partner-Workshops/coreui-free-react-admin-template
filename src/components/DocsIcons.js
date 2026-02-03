import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import IconsImg from 'src/assets/images/icons.webp'

const DocsIcons = () => (
  <Box
    sx={{
      bgcolor: 'warning.light',
      opacity: 0.9,
      border: 2,
      borderColor: 'warning.main',
      borderRadius: 1,
      mb: 4,
      p: 3,
    }}
  >
    <Grid container alignItems="center" spacing={3}>
      <Grid item xs={12} xl="auto" sx={{ display: { xs: 'none', xl: 'block' } }}>
        <Box component="img" src={IconsImg} alt="CoreUI Icons" sx={{ width: 160, height: 160 }} />
      </Grid>
      <Grid item xs={12} md>
        <Typography variant="body1">
          CoreUI Icons package is delivered with more than 1500 icons in multiple formats SVG, PNG,
          and Webfonts. CoreUI Icons are beautifully crafted symbols for common actions and items.
          You can use them in your digital products for web or mobile app. For more information
          please visit our documentation.
        </Typography>
      </Grid>
      <Grid item xs={12} md="auto">
        <Button
          variant="contained"
          color="warning"
          href="https://coreui.io/react/docs/components/icon/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ whiteSpace: 'nowrap', color: 'white' }}
        >
          Explore Documentation
        </Button>
      </Grid>
    </Grid>
  </Box>
)

export default DocsIcons
