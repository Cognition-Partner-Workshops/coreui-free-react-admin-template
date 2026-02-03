import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

const Colors = () => {
  const theme = useTheme()

  const colors = [
    { name: 'Primary', color: theme.palette.primary.main },
    { name: 'Secondary', color: theme.palette.secondary.main },
    { name: 'Success', color: theme.palette.success.main },
    { name: 'Error', color: theme.palette.error.main },
    { name: 'Warning', color: theme.palette.warning.main },
    { name: 'Info', color: theme.palette.info.main },
  ]

  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title="Theme Colors" subheader="MUI theme palette colors" />
      <CardContent>
        <Grid container spacing={2}>
          {colors.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }} key={index}>
              <Box
                sx={{
                  bgcolor: item.color,
                  color: 'white',
                  p: 3,
                  borderRadius: 1,
                  textAlign: 'center',
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold">
                  {item.name}
                </Typography>
                <Typography variant="caption">{item.color}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Colors
