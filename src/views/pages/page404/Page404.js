import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'

const Page404 = () => {
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
        <Grid container justifyContent="center">
          <Grid size={12}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
              <Typography
                variant="h1"
                component="h1"
                sx={{ fontSize: '5rem', fontWeight: 'bold', mr: 3 }}
              >
                404
              </Typography>
              <Box>
                <Typography variant="h5" component="h4" sx={{ pt: 1 }}>
                  Oops! You&apos;re lost.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The page you are looking for was not found.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <TextField
                fullWidth
                placeholder="What are you looking for?"
                size="small"
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Page404
