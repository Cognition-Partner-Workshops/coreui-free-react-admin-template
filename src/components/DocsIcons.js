import React from 'react'
import { Box, Typography, Button, Paper, Grid, alpha, useTheme } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

import IconsImg from 'src/assets/images/icons.webp'

const DocsIcons = () => {
  const theme = useTheme()

  return (
    <Paper
      elevation={0}
      sx={{
        mb: 3,
        p: 3,
        backgroundColor: alpha(theme.palette.warning.main, 0.08),
        border: 2,
        borderColor: 'warning.main',
        borderRadius: 2,
      }}
    >
      <Grid container spacing={3} alignItems="center">
        <Grid size={{ xs: 12, xl: 'auto' }} sx={{ display: { xs: 'none', xl: 'block' } }}>
          <Box component="img" src={IconsImg} alt="MUI Icons" sx={{ width: 160, height: 160 }} />
        </Grid>
        <Grid size={{ xs: 12, md: true }}>
          <Typography variant="body1" color="text.primary">
            Material UI Icons package is delivered with more than 2000 icons in multiple formats.
            MUI Icons are beautifully crafted symbols for common actions and items. You can use them
            in your digital products for web or mobile app. For more information please visit our
            documentation.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 'auto' }}>
          <Button
            variant="contained"
            color="warning"
            href="https://mui.com/material-ui/material-icons/"
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<OpenInNewIcon />}
            sx={{ whiteSpace: 'nowrap', color: 'white' }}
          >
            Explore Documentation
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default DocsIcons
