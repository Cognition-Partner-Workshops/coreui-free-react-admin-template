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
        borderTop: '1px solid',
        borderColor: 'divider',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 1,
      }}
    >
      <Box>
        <Link href="https://mui.com" target="_blank" rel="noopener noreferrer" underline="hover">
          MUI
        </Link>
        <Typography component="span" sx={{ ml: 1 }}>
          &copy; 2025 creativeLabs.
        </Typography>
      </Box>
      <Box>
        <Typography component="span" sx={{ mr: 1 }}>
          Powered by
        </Typography>
        <Link
          href="https://mui.com/material-ui/"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
        >
          MUI React Admin Template
        </Link>
      </Box>
    </Box>
  )
}

export default React.memo(AppFooter)
