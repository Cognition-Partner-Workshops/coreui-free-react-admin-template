import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'

const ThemeView = () => {
  const theme = useTheme()

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<strong>Theme Colors</strong>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              MUI theme colors available in your application.
            </Typography>
            <Grid container spacing={2}>
              {['primary', 'secondary', 'success', 'error', 'warning', 'info'].map((color) => (
                <Grid item xs={12} sm={6} md={4} lg={2} key={color}>
                  <Box
                    sx={{
                      bgcolor: `${color}.main`,
                      color: `${color}.contrastText`,
                      p: 3,
                      borderRadius: 1,
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="subtitle2">{color}</Typography>
                    <Typography variant="caption">{theme.palette[color].main}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>Theme Colors</strong> <small>Light variants</small>
              </>
            }
          />
          <CardContent>
            <Grid container spacing={2}>
              {['primary', 'secondary', 'success', 'error', 'warning', 'info'].map((color) => (
                <Grid item xs={12} sm={6} md={4} lg={2} key={color}>
                  <Box
                    sx={{ bgcolor: `${color}.light`, p: 3, borderRadius: 1, textAlign: 'center' }}
                  >
                    <Typography variant="subtitle2">{color} light</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>Theme Colors</strong> <small>Dark variants</small>
              </>
            }
          />
          <CardContent>
            <Grid container spacing={2}>
              {['primary', 'secondary', 'success', 'error', 'warning', 'info'].map((color) => (
                <Grid item xs={12} sm={6} md={4} lg={2} key={color}>
                  <Box
                    sx={{
                      bgcolor: `${color}.dark`,
                      color: 'white',
                      p: 3,
                      borderRadius: 1,
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="subtitle2">{color} dark</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>Grays</strong>
              </>
            }
          />
          <CardContent>
            <Grid container spacing={2}>
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                <Grid item xs={6} sm={4} md={2} key={shade}>
                  <Box
                    sx={{
                      bgcolor: `grey.${shade}`,
                      color: shade > 500 ? 'white' : 'black',
                      p: 2,
                      borderRadius: 1,
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="caption">grey.{shade}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ThemeView
