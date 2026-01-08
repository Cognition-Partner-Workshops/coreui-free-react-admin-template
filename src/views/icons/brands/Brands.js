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
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'
import RedditIcon from '@mui/icons-material/Reddit'
import PinterestIcon from '@mui/icons-material/Pinterest'
import { DocsIcons } from 'src/components'

const IconBox = ({ icon, name }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      p: 2,
      border: '1px solid',
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
  const icons = [
    { icon: <FacebookIcon fontSize="large" color="primary" />, name: 'Facebook' },
    { icon: <TwitterIcon fontSize="large" color="info" />, name: 'Twitter' },
    { icon: <LinkedInIcon fontSize="large" color="primary" />, name: 'LinkedIn' },
    { icon: <GitHubIcon fontSize="large" />, name: 'GitHub' },
    { icon: <YouTubeIcon fontSize="large" color="error" />, name: 'YouTube' },
    { icon: <InstagramIcon fontSize="large" color="secondary" />, name: 'Instagram' },
    { icon: <RedditIcon fontSize="large" color="warning" />, name: 'Reddit' },
    { icon: <PinterestIcon fontSize="large" color="error" />, name: 'Pinterest' },
  ]
  return (
    <>
      <DocsIcons />
      <Card sx={{ mb: 4 }}>
        <CardHeader title={<Typography variant="h6">Brand Icons</Typography>} />
        <CardContent>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Popular brand icons from Material UI Icons.
          </Typography>
          <Grid container spacing={2}>
            {icons.map((item, index) => (
              <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                <IconBox icon={item.icon} name={item.name} />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}
export default Brands
