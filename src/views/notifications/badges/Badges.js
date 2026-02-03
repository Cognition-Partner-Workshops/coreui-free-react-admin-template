import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Badge from '@mui/material/Badge'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import MailIcon from '@mui/icons-material/Mail'
import { DocsComponents, DocsExample } from 'src/components'

const Badges = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/badge/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<strong>React Badge</strong>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              MUI Badge generates a small badge to the top-right of its child(ren).
            </Typography>
            <DocsExample href="components/badge">
              <Box sx={{ display: 'flex', gap: 3 }}>
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
          <CardHeader
            title={
              <>
                <strong>React Badge</strong> <small>Chip component</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use MUI Chip for inline badges/labels.
            </Typography>
            <DocsExample href="components/badge#contextual-variations">
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
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
                <strong>React Badge</strong> <small>Outlined chips</small>
              </>
            }
          />
          <CardContent>
            <DocsExample href="components/badge#pill-badges">
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
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
      </Grid>
    </Grid>
  )
}

export default Badges
