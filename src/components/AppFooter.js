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
        backgroundColor: 'background.paper',
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
        <Link href="https://mui.com" target="_blank" rel="noopener noreferrer" color="inherit">
          Material UI
        </Link>
        {' '}&copy; 2025 Admin Dashboard.
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Powered by{' '}
        <Link href="https://mui.com" target="_blank" rel="noopener noreferrer" color="inherit">
          Material UI React Admin Template
        </Link>
      </Typography>
    </Box>
  )
}

export default React.memo(AppFooter)
