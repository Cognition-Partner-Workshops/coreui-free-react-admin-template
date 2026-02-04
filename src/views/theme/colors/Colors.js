import React from 'react'
import { useTheme } from '@mui/material/styles'
import { Card, CardContent, CardHeader, Typography, Grid, Box, Paper } from '@mui/material'

const ThemeColor = ({ color, title }) => {
  const theme = useTheme()
  const bgColor = color.includes('.')
    ? color.split('.').reduce((obj, key) => obj[key], theme.palette)
    : theme.palette[color]?.main || theme.palette[color]

  return (
    <Paper
      sx={{
        p: 2,
        bgcolor: bgColor,
        color: theme.palette.getContrastText(bgColor || '#000'),
        textAlign: 'center',
        minHeight: 100,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography variant="subtitle1" fontWeight="bold">
        {title}
      </Typography>
      <Typography variant="caption">{bgColor}</Typography>
    </Paper>
  )
}

const Colors = () => {
  const theme = useTheme()

  return (
    <>
      <Card sx={{ mb: 3 }}>
        <CardHeader title={<Typography variant="h6">Theme Colors</Typography>} />
        <CardContent>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            MUI provides a rich palette of colors that can be customized through the theme.
          </Typography>
          <Grid container spacing={2}>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <ThemeColor color="primary" title="Primary" />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <ThemeColor color="secondary" title="Secondary" />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <ThemeColor color="success" title="Success" />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <ThemeColor color="error" title="Error" />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <ThemeColor color="warning" title="Warning" />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <ThemeColor color="info" title="Info" />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardHeader title={<Typography variant="h6">Grey Palette</Typography>} />
        <CardContent>
          <Grid container spacing={2}>
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
              <Grid key={shade} size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <Paper
                  sx={{
                    p: 2,
                    bgcolor: theme.palette.grey[shade],
                    color: shade > 500 ? '#fff' : '#000',
                    textAlign: 'center',
                    minHeight: 80,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="subtitle2">Grey {shade}</Typography>
                  <Typography variant="caption">{theme.palette.grey[shade]}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardHeader title={<Typography variant="h6">Background Colors</Typography>} />
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={{ xs: 6, sm: 4 }}>
              <Paper
                sx={{
                  p: 2,
                  bgcolor: 'background.default',
                  border: 1,
                  borderColor: 'divider',
                  textAlign: 'center',
                  minHeight: 80,
                }}
              >
                <Typography variant="subtitle2">Default</Typography>
                <Typography variant="caption">{theme.palette.background.default}</Typography>
              </Paper>
            </Grid>
            <Grid size={{ xs: 6, sm: 4 }}>
              <Paper
                sx={{
                  p: 2,
                  bgcolor: 'background.paper',
                  border: 1,
                  borderColor: 'divider',
                  textAlign: 'center',
                  minHeight: 80,
                }}
              >
                <Typography variant="subtitle2">Paper</Typography>
                <Typography variant="caption">{theme.palette.background.paper}</Typography>
              </Paper>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default Colors
