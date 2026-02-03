import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FlagIcon from '@mui/icons-material/Flag'
import PublicIcon from '@mui/icons-material/Public'
import LanguageIcon from '@mui/icons-material/Language'
import PlaceIcon from '@mui/icons-material/Place'

const Flags = () => {
  const icons = [
    { icon: <FlagIcon />, name: 'Flag' },
    { icon: <PublicIcon />, name: 'Public' },
    { icon: <LanguageIcon />, name: 'Language' },
    { icon: <PlaceIcon />, name: 'Place' },
  ]

  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title="Flag Icons" subheader="MUI provides location and flag-related icons" />
      <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          For country flags, consider using a dedicated flag icon library like react-world-flags or
          flag-icons.
        </Typography>
        <Grid container spacing={2}>
          {icons.map((item, index) => (
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }} key={index}>
              <Box
                sx={{
                  textAlign: 'center',
                  p: 2,
                  border: 1,
                  borderColor: 'divider',
                  borderRadius: 1,
                }}
              >
                {item.icon}
                <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                  {item.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Flags
