import React from 'react'
import { Box, Typography, Link, useTheme } from '@mui/material'

const AppFooter = () => {
  const theme = useTheme()

  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 3,
        mt: 'auto',
        borderTop: 1,
        borderColor: 'divider',
        backgroundColor: 'background.paper',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <Link
          href="https://mui.com"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          color="primary"
          sx={{ fontWeight: 500 }}
        >
          MUI Admin
        </Link>
        <Typography variant="body2" color="text.secondary">
          &copy; 2025 creativeLabs.
        </Typography>
      </Box>
      <Typography variant="body2" color="text.secondary">
        Powered by{' '}
        <Link
          href="https://mui.com"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          color="primary"
        >
          Material UI React Admin Template
        </Link>
      </Typography>
    </Box>
  )
}

export default React.memo(AppFooter)
