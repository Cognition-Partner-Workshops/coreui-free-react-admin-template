import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Container, TextField, Typography, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const Page404 = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'grey.100',
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '4rem', md: '6rem' },
              fontWeight: 'bold',
              color: 'primary.main',
            }}
          >
            404
          </Typography>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Oops! You&apos;re lost.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            The page you are looking for was not found.
          </Typography>
          <Box
            component="form"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              mb: 3,
              flexWrap: 'wrap',
            }}
          >
            <TextField
              placeholder="What are you looking for?"
              size="small"
              sx={{ minWidth: 250 }}
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
          <Button component={Link} to="/" variant="outlined" color="primary">
            Go back to Dashboard
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default Page404
