import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import GoogleIcon from '@mui/icons-material/Google'
import AppleIcon from '@mui/icons-material/Apple'

const Brands = () => {
  const brandIcons = [
    { icon: <FacebookIcon sx={{ fontSize: 40 }} />, name: 'Facebook' },
    { icon: <TwitterIcon sx={{ fontSize: 40 }} />, name: 'Twitter' },
    { icon: <LinkedInIcon sx={{ fontSize: 40 }} />, name: 'LinkedIn' },
    { icon: <GitHubIcon sx={{ fontSize: 40 }} />, name: 'GitHub' },
    { icon: <InstagramIcon sx={{ fontSize: 40 }} />, name: 'Instagram' },
    { icon: <YouTubeIcon sx={{ fontSize: 40 }} />, name: 'YouTube' },
    { icon: <GoogleIcon sx={{ fontSize: 40 }} />, name: 'Google' },
    { icon: <AppleIcon sx={{ fontSize: 40 }} />, name: 'Apple' },
  ]

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<strong>Brand Icons</strong>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              MUI provides some brand icons. For more comprehensive brand icons, consider using{' '}
              <a
                href="https://react-icons.github.io/react-icons/"
                target="_blank"
                rel="noopener noreferrer"
              >
                react-icons
              </a>
              .
            </Typography>
            <Grid container spacing={2}>
              {brandIcons.map(({ icon, name }) => (
                <Grid item xs={6} sm={4} md={3} lg={2} key={name}>
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
                    {icon}
                    <Typography variant="caption" sx={{ mt: 1 }}>
                      {name}
                    </Typography>
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

export default Brands
