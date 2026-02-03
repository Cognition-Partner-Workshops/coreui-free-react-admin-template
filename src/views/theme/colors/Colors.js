import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

const Colors = () => {
  const theme = useTheme()

  const themeColors = [
    { name: 'Primary', color: theme.palette.primary.main, textColor: '#fff' },
    { name: 'Secondary', color: theme.palette.secondary.main, textColor: '#fff' },
    { name: 'Success', color: theme.palette.success.main, textColor: '#fff' },
    { name: 'Error', color: theme.palette.error.main, textColor: '#fff' },
    { name: 'Warning', color: theme.palette.warning.main, textColor: '#000' },
    { name: 'Info', color: theme.palette.info.main, textColor: '#fff' },
  ]

  const greyColors = [
    { name: 'Grey 50', color: theme.palette.grey[50] },
    { name: 'Grey 100', color: theme.palette.grey[100] },
    { name: 'Grey 200', color: theme.palette.grey[200] },
    { name: 'Grey 300', color: theme.palette.grey[300] },
    { name: 'Grey 400', color: theme.palette.grey[400] },
    { name: 'Grey 500', color: theme.palette.grey[500] },
    { name: 'Grey 600', color: theme.palette.grey[600] },
    { name: 'Grey 700', color: theme.palette.grey[700] },
    { name: 'Grey 800', color: theme.palette.grey[800] },
    { name: 'Grey 900', color: theme.palette.grey[900] },
  ]

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Theme Colors
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        MUI provides a rich palette of colors that can be customized to match your brand.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Main Colors
      </Typography>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {themeColors.map((item) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }} key={item.name}>
            <Card>
              <Box
                sx={{
                  height: 100,
                  bgcolor: item.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="h6" sx={{ color: item.textColor }}>
                  {item.name}
                </Typography>
              </Box>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item.color}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" gutterBottom>
        Grey Palette
      </Typography>
      <Grid container spacing={2}>
        {greyColors.map((item, index) => (
          <Grid size={{ xs: 6, sm: 4, md: 2.4 }} key={item.name}>
            <Card>
              <Box
                sx={{
                  height: 60,
                  bgcolor: item.color,
                }}
              />
              <CardContent sx={{ py: 1 }}>
                <Typography variant="caption">{item.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.color}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Colors
