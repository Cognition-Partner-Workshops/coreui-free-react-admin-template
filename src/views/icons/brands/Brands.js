import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'
import RedditIcon from '@mui/icons-material/Reddit'
import PinterestIcon from '@mui/icons-material/Pinterest'

const Brands = () => {
  const icons = [
    { icon: <FacebookIcon />, name: 'Facebook' },
    { icon: <TwitterIcon />, name: 'Twitter' },
    { icon: <LinkedInIcon />, name: 'LinkedIn' },
    { icon: <GitHubIcon />, name: 'GitHub' },
    { icon: <YouTubeIcon />, name: 'YouTube' },
    { icon: <InstagramIcon />, name: 'Instagram' },
    { icon: <RedditIcon />, name: 'Reddit' },
    { icon: <PinterestIcon />, name: 'Pinterest' },
  ]

  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title="Brand Icons" subheader="MUI provides popular brand icons" />
      <CardContent>
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

export default Brands
