import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

const AppFooter = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 3,
        mt: 'auto',
        bgcolor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 1,
      }}
    >
      <Typography variant="body2" color="text.secondary">
        <Link href="https://coreui.io" target="_blank" rel="noopener noreferrer" underline="hover">
          CoreUI
        </Link>{' '}
        &copy; 2025 creativeLabs.
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Powered by{' '}
        <Link
          href="https://coreui.io/react"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
        >
          Material UI Admin Template
        </Link>
      </Typography>
    </Box>
  )
}

export default React.memo(AppFooter)
