import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Badge from '@mui/material/Badge'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import MailIcon from '@mui/icons-material/Mail'
import { DocsComponents, DocsExample } from 'src/components'

const Badges = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/badge/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<strong>MUI Badge</strong>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Badge generates a small badge to the top-right of its child(ren).
            </Typography>
            <DocsExample href="react-badge">
              <Box sx={{ display: 'flex', gap: 4 }}>
                <Badge badgeContent={4} color="primary">
                  <MailIcon />
                </Badge>
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
                <Badge badgeContent={4} color="success">
                  <MailIcon />
                </Badge>
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<strong>MUI Chip</strong>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Chips are compact elements that represent an input, attribute, or action.
            </Typography>
            <DocsExample href="react-chip">
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Chip label="Primary" color="primary" />
                <Chip label="Secondary" color="secondary" />
                <Chip label="Success" color="success" />
                <Chip label="Error" color="error" />
                <Chip label="Warning" color="warning" />
                <Chip label="Info" color="info" />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>MUI Badge</strong> <Typography component="span">On Buttons</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Badges can be used on buttons to show counts.
            </Typography>
            <DocsExample href="react-badge#badge-visibility">
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Badge badgeContent={4} color="primary">
                  <Button variant="contained">Notifications</Button>
                </Badge>
                <Badge badgeContent={2} color="error">
                  <Button variant="outlined">Messages</Button>
                </Badge>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Badges
