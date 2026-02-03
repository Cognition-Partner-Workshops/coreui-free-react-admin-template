import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'

const Page500 = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
          <Typography variant="h1" sx={{ fontSize: '6rem', fontWeight: 700, mr: 3 }}>
            500
          </Typography>
          <Box sx={{ pt: 2 }}>
            <Typography variant="h5" gutterBottom>
              Houston, we have a problem!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The page you are looking for is temporarily unavailable.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <TextField
            fullWidth
            placeholder="What are you looking for?"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              },
            }}
          />
          <Button variant="contained" color="info">
            Search
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default Page500
