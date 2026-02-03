import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const ThemeColor = ({ color, name }) => (
  <Box
    sx={{
      p: 2,
      bgcolor: color,
      color: color === '#fff' || color === '#f8f9fa' ? 'text.primary' : 'white',
      borderRadius: 1,
      mb: 1,
    }}
  >
    <Typography variant="subtitle2">{name}</Typography>
    <Typography variant="caption">{color}</Typography>
  </Box>
)

const Colors = () => {
  const colors = [
    { name: 'Primary', color: '#1976d2' },
    { name: 'Secondary', color: '#9c27b0' },
    { name: 'Success', color: '#2e7d32' },
    { name: 'Danger', color: '#d32f2f' },
    { name: 'Warning', color: '#ed6c02' },
    { name: 'Info', color: '#0288d1' },
    { name: 'Light', color: '#f8f9fa' },
    { name: 'Dark', color: '#212529' },
  ]

  return (
    <Box>
      <Card>
        <CardHeader title="Theme Colors" />
        <CardContent>
          <Grid container spacing={2}>
            {colors.map((item) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.name}>
                <ThemeColor color={item.color} name={item.name} />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Colors
