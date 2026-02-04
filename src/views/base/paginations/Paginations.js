import React from 'react'
import { Card, CardContent, CardHeader, Typography, Grid, Pagination, Stack } from '@mui/material'
import { DocsComponents, DocsExample } from 'src/components'

const Paginations = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <DocsComponents href="components/pagination/" />
        <Card sx={{ mb: 3 }}>
          <CardHeader title={<Typography variant="h6">Pagination</Typography>} />
          <CardContent>
            <DocsExample href="components/pagination">
              <Stack spacing={2}>
                <Pagination count={10} />
                <Pagination count={10} color="primary" />
                <Pagination count={10} color="secondary" />
              </Stack>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Pagination{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Outlined
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/pagination#outlined">
              <Stack spacing={2}>
                <Pagination count={10} variant="outlined" />
                <Pagination count={10} variant="outlined" color="primary" />
                <Pagination count={10} variant="outlined" color="secondary" />
              </Stack>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Pagination{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Sizes
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/pagination#sizes">
              <Stack spacing={2}>
                <Pagination count={10} size="small" />
                <Pagination count={10} />
                <Pagination count={10} size="large" />
              </Stack>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Pagination{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Shapes
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/pagination#shapes">
              <Stack spacing={2}>
                <Pagination count={10} shape="rounded" />
                <Pagination count={10} variant="outlined" shape="rounded" />
              </Stack>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Paginations
