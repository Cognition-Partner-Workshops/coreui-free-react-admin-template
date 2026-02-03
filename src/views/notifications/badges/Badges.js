import React from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Badge from '@mui/material/Badge'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import MailIcon from '@mui/icons-material/Mail'
import Button from '@mui/material/Button'

const Badges = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Badges
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Small count and labeling component.
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Badge on Icons
          </Typography>
          <Stack direction="row" spacing={4}>
            <Badge badgeContent={4} color="primary">
              <MailIcon />
            </Badge>
            <Badge badgeContent={10} color="secondary">
              <MailIcon />
            </Badge>
            <Badge badgeContent={100} color="error">
              <MailIcon />
            </Badge>
          </Stack>
        </CardContent>
      </Card>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Chips (Labels)
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            <Chip label="Primary" color="primary" />
            <Chip label="Secondary" color="secondary" />
            <Chip label="Success" color="success" />
            <Chip label="Error" color="error" />
            <Chip label="Warning" color="warning" />
            <Chip label="Info" color="info" />
          </Stack>
        </CardContent>
      </Card>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Outlined Chips
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            <Chip label="Primary" color="primary" variant="outlined" />
            <Chip label="Secondary" color="secondary" variant="outlined" />
            <Chip label="Success" color="success" variant="outlined" />
            <Chip label="Error" color="error" variant="outlined" />
            <Chip label="Warning" color="warning" variant="outlined" />
            <Chip label="Info" color="info" variant="outlined" />
          </Stack>
        </CardContent>
      </Card>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Badge on Buttons
          </Typography>
          <Stack direction="row" spacing={2}>
            <Badge badgeContent={4} color="secondary">
              <Button variant="contained">Notifications</Button>
            </Badge>
          </Stack>
        </CardContent>
      </Card>
    </>
  )
}

export default Badges
