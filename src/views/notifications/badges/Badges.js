import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Badge,
  Button,
  Box,
  Chip,
  IconButton,
} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { DocsComponents, DocsExample } from 'src/components'

const Badges = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <DocsComponents href="components/badge/" />
        <Card sx={{ mb: 3 }}>
          <CardHeader title={<Typography variant="h6">Badges</Typography>} />
          <CardContent>
            <DocsExample href="components/badge">
              <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
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
                <Badge badgeContent={4} color="warning">
                  <MailIcon />
                </Badge>
                <Badge badgeContent={4} color="info">
                  <MailIcon />
                </Badge>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Badges{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  With buttons
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/badge#badge-visibility">
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button variant="contained">
                  Notifications{' '}
                  <Badge badgeContent={4} color="error" sx={{ ml: 2 }}>
                    <span />
                  </Badge>
                </Button>
                <IconButton>
                  <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Chips{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  (Badge alternative)
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/chip">
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

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Chips{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Outlined
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/chip#outlined-chips">
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Chip label="Primary" color="primary" variant="outlined" />
                <Chip label="Secondary" color="secondary" variant="outlined" />
                <Chip label="Success" color="success" variant="outlined" />
                <Chip label="Error" color="error" variant="outlined" />
                <Chip label="Warning" color="warning" variant="outlined" />
                <Chip label="Info" color="info" variant="outlined" />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Chips{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Sizes
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/chip#sizes">
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap' }}>
                <Chip label="Small" size="small" />
                <Chip label="Medium" />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Badges
