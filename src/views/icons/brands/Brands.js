import React from 'react'
import { Card, CardContent, CardHeader, Typography, Grid, Paper } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import YouTubeIcon from '@mui/icons-material/YouTube'
import GitHubIcon from '@mui/icons-material/GitHub'
import RedditIcon from '@mui/icons-material/Reddit'
import PinterestIcon from '@mui/icons-material/Pinterest'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import TelegramIcon from '@mui/icons-material/Telegram'
import AppleIcon from '@mui/icons-material/Apple'
import AndroidIcon from '@mui/icons-material/Android'
import WindowsIcon from '@mui/icons-material/Window'
import GoogleIcon from '@mui/icons-material/Google'
import AmazonIcon from '@mui/icons-material/Shop'

const brands = [
  { icon: FacebookIcon, name: 'Facebook' },
  { icon: TwitterIcon, name: 'Twitter' },
  { icon: InstagramIcon, name: 'Instagram' },
  { icon: LinkedInIcon, name: 'LinkedIn' },
  { icon: YouTubeIcon, name: 'YouTube' },
  { icon: GitHubIcon, name: 'GitHub' },
  { icon: RedditIcon, name: 'Reddit' },
  { icon: PinterestIcon, name: 'Pinterest' },
  { icon: WhatsAppIcon, name: 'WhatsApp' },
  { icon: TelegramIcon, name: 'Telegram' },
  { icon: AppleIcon, name: 'Apple' },
  { icon: AndroidIcon, name: 'Android' },
  { icon: WindowsIcon, name: 'Windows' },
  { icon: GoogleIcon, name: 'Google' },
  { icon: AmazonIcon, name: 'Shop' },
]

const Brands = () => {
  return (
    <Card>
      <CardHeader
        title={<Typography variant="h6">Brand Icons</Typography>}
        subheader={
          <Typography variant="body2" color="text.secondary">
            MUI provides some brand and social media icons. For more brand icons, consider using
            react-icons or similar libraries.
          </Typography>
        }
      />
      <CardContent>
        <Grid container spacing={2}>
          {brands.map(({ icon: Icon, name }) => (
            <Grid key={name} size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <Paper
                sx={{
                  p: 2,
                  textAlign: 'center',
                  '&:hover': {
                    bgcolor: 'action.hover',
                  },
                }}
                variant="outlined"
              >
                <Icon sx={{ fontSize: 32, mb: 1 }} />
                <Typography variant="caption" display="block" noWrap>
                  {name}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Brands
