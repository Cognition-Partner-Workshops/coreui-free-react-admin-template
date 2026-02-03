import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'

import { DocsExample } from 'src/components'

const Placeholders = () => {
  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title="Placeholders" />
      <CardContent>
        <DocsExample href="components/placeholder">
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={1}>
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={210} height={60} />
                <Skeleton variant="rounded" width={210} height={60} />
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card>
                <Skeleton variant="rectangular" height={140} />
                <CardContent>
                  <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} />
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                  <Skeleton variant="rectangular" width={100} height={36} sx={{ mt: 2 }} />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </DocsExample>
      </CardContent>
    </Card>
  )
}

export default Placeholders
