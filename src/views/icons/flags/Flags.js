import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FlagIcon from '@mui/icons-material/Flag'
import PublicIcon from '@mui/icons-material/Public'
import LanguageIcon from '@mui/icons-material/Language'
import { DocsLink } from 'src/components'

const Flags = () => {
  const countries = [
    'United States',
    'United Kingdom',
    'Canada',
    'Germany',
    'France',
    'Spain',
    'Italy',
    'Japan',
    'China',
    'Brazil',
    'Australia',
    'India',
  ]

  return (
    <>
      <DocsLink href="https://mui.com/material-ui/material-icons/" />
      <Card sx={{ mb: 4 }}>
        <CardHeader title={<strong>Flag Icons</strong>} />
        <CardContent>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            MUI does not include country flag icons by default. For flag icons, consider using a
            dedicated flag icon library like react-country-flag or flagpack.
          </Typography>
          <Grid container spacing={3}>
            {countries.map((country) => (
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }} key={country}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    p: 2,
                    border: 1,
                    borderColor: 'divider',
                    borderRadius: 1,
                  }}
                >
                  <FlagIcon sx={{ fontSize: 40, mb: 1 }} />
                  <Typography variant="caption">{country}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Alternative Icons
            </Typography>
            <Box sx={{ display: 'flex', gap: 4 }}>
              <Box sx={{ textAlign: 'center' }}>
                <PublicIcon sx={{ fontSize: 40 }} />
                <Typography variant="caption" display="block">
                  Public
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <LanguageIcon sx={{ fontSize: 40 }} />
                <Typography variant="caption" display="block">
                  Language
                </Typography>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  )
}

export default Flags
