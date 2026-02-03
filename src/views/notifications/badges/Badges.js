import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Badge from '@mui/material/Badge'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import MailIcon from '@mui/icons-material/Mail'
import Chip from '@mui/material/Chip'

const Badges = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Badges" subheader="Basic Example" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Badges scale to match the size of the immediate parent element by using relative font
              sizing and em units.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
              <Typography variant="h1">
                Example heading <Chip label="New" size="small" color="primary" />
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center', mt: 2 }}>
              <Typography variant="h2">
                Example heading <Chip label="New" size="small" color="primary" />
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center', mt: 2 }}>
              <Typography variant="h3">
                Example heading <Chip label="New" size="small" color="primary" />
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center', mt: 2 }}>
              <Typography variant="h4">
                Example heading <Chip label="New" size="small" color="primary" />
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center', mt: 2 }}>
              <Typography variant="h5">
                Example heading <Chip label="New" size="small" color="primary" />
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center', mt: 2 }}>
              <Typography variant="h6">
                Example heading <Chip label="New" size="small" color="primary" />
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Badges" subheader="Contextual variations" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Add any of the below mentioned color props to change the appearance of a badge.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              <Chip label="Primary" color="primary" />
              <Chip label="Secondary" color="secondary" />
              <Chip label="Success" color="success" />
              <Chip label="Error" color="error" />
              <Chip label="Warning" color="warning" />
              <Chip label="Info" color="info" />
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Badges" subheader="Outlined" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use the variant=&quot;outlined&quot; prop to create outlined badges.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              <Chip label="Primary" color="primary" variant="outlined" />
              <Chip label="Secondary" color="secondary" variant="outlined" />
              <Chip label="Success" color="success" variant="outlined" />
              <Chip label="Error" color="error" variant="outlined" />
              <Chip label="Warning" color="warning" variant="outlined" />
              <Chip label="Info" color="info" variant="outlined" />
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Badges" subheader="Button badges" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Badges can be used as part of buttons to provide a counter.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button variant="contained">
                Notifications{' '}
                <Chip
                  label="4"
                  size="small"
                  sx={{ ml: 1, bgcolor: 'white', color: 'primary.main' }}
                />
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Badges" subheader="Icon badges" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Badge generates a small badge to the top-right of its child(ren).
            </Typography>
            <Box sx={{ display: 'flex', gap: 3 }}>
              <Badge badgeContent={4} color="primary">
                <MailIcon color="action" />
              </Badge>
              <Badge badgeContent={4} color="secondary">
                <MailIcon color="action" />
              </Badge>
              <Badge badgeContent={4} color="success">
                <MailIcon color="action" />
              </Badge>
              <Badge badgeContent={4} color="error">
                <MailIcon color="action" />
              </Badge>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Badges
