import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Badge from '@mui/material/Badge'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import MailIcon from '@mui/icons-material/Mail'

import { DocsExample } from 'src/components'

const Badges = () => {
  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title="Badges" />
      <CardContent>
        <DocsExample href="components/badge">
          <Stack direction="row" spacing={2}>
            <Chip label="Primary" color="primary" />
            <Chip label="Secondary" color="secondary" />
            <Chip label="Success" color="success" />
            <Chip label="Error" color="error" />
            <Chip label="Warning" color="warning" />
            <Chip label="Info" color="info" />
          </Stack>
        </DocsExample>
        <DocsExample href="components/badge#pill-badges">
          <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
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
          </Stack>
        </DocsExample>
      </CardContent>
    </Card>
  )
}

export default Badges
