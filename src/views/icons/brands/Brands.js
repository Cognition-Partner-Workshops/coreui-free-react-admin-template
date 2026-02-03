import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub'
import YouTubeIcon from '@mui/icons-material/YouTube'
import GoogleIcon from '@mui/icons-material/Google'
import AppleIcon from '@mui/icons-material/Apple'
import AndroidIcon from '@mui/icons-material/Android'
import RedditIcon from '@mui/icons-material/Reddit'
import PinterestIcon from '@mui/icons-material/Pinterest'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import TelegramIcon from '@mui/icons-material/Telegram'
import { DocsLink } from 'src/components'

const Brands = () => {
  const icons = [
    { icon: FacebookIcon, name: 'Facebook' },
    { icon: TwitterIcon, name: 'Twitter' },
    { icon: LinkedInIcon, name: 'LinkedIn' },
    { icon: InstagramIcon, name: 'Instagram' },
    { icon: GitHubIcon, name: 'GitHub' },
    { icon: YouTubeIcon, name: 'YouTube' },
    { icon: GoogleIcon, name: 'Google' },
    { icon: AppleIcon, name: 'Apple' },
    { icon: AndroidIcon, name: 'Android' },
    { icon: RedditIcon, name: 'Reddit' },
    { icon: PinterestIcon, name: 'Pinterest' },
    { icon: WhatsAppIcon, name: 'WhatsApp' },
    { icon: TelegramIcon, name: 'Telegram' },
  ]

  return (
    <>
      <DocsLink href="https://mui.com/material-ui/material-icons/" />
      <Card sx={{ mb: 4 }}>
        <CardHeader title={<strong>Brand Icons</strong>} />
        <CardContent>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            MUI provides a comprehensive set of brand icons through @mui/icons-material.
          </Typography>
          <Grid container spacing={3}>
            {icons.map(({ icon: Icon, name }) => (
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
                  <Icon sx={{ fontSize: 40, mb: 1 }} />
                  <Typography variant="caption">{name}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default Brands
