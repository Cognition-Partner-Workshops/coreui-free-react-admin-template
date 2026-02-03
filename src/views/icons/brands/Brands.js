import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import RedditIcon from '@mui/icons-material/Reddit'
import PinterestIcon from '@mui/icons-material/Pinterest'
import AppleIcon from '@mui/icons-material/Apple'
import AndroidIcon from '@mui/icons-material/Android'
import WindowsIcon from '@mui/icons-material/Window'
import GoogleIcon from '@mui/icons-material/Google'

const IconBox = ({ icon, name }) => (
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
)

const Brands = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Brand Icons" subheader="Social Media and Technology Brands" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Material UI provides various brand icons for popular social media platforms and
              technology companies.
            </Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<GitHubIcon />} name="GitHub" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<TwitterIcon sx={{ color: '#1DA1F2' }} />} name="Twitter" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<FacebookIcon sx={{ color: '#4267B2' }} />} name="Facebook" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<LinkedInIcon sx={{ color: '#0077B5' }} />} name="LinkedIn" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<InstagramIcon sx={{ color: '#E4405F' }} />} name="Instagram" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<YouTubeIcon sx={{ color: '#FF0000' }} />} name="YouTube" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<RedditIcon sx={{ color: '#FF4500' }} />} name="Reddit" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<PinterestIcon sx={{ color: '#E60023' }} />} name="Pinterest" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<AppleIcon />} name="Apple" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<AndroidIcon sx={{ color: '#3DDC84' }} />} name="Android" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<WindowsIcon sx={{ color: '#0078D6' }} />} name="Windows" />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <IconBox icon={<GoogleIcon sx={{ color: '#4285F4' }} />} name="Google" />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Brands
