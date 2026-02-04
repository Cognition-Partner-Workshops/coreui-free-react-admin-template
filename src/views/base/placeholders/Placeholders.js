import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Skeleton,
  Box,
  Button,
} from '@mui/material'
import { DocsComponents, DocsExample } from 'src/components'

const Placeholders = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <DocsComponents href="components/skeleton/" />
        <Card sx={{ mb: 3 }}>
          <CardHeader title={<Typography variant="h6">Skeleton / Placeholders</Typography>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use loading skeletons to indicate that content is loading.
            </Typography>
            <DocsExample href="components/skeleton">
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Card>
                    <Skeleton variant="rectangular" height={180} />
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        <Skeleton />
                      </Typography>
                      <Typography variant="body2">
                        <Skeleton />
                        <Skeleton />
                        <Skeleton width="60%" />
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Card>
                    <Skeleton variant="rectangular" height={180} animation="wave" />
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        <Skeleton animation="wave" />
                      </Typography>
                      <Typography variant="body2">
                        <Skeleton animation="wave" />
                        <Skeleton animation="wave" />
                        <Skeleton animation="wave" width="60%" />
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Skeleton{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Variants
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/skeleton#variants">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={210} height={60} />
                <Skeleton variant="rounded" width={210} height={60} />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Skeleton{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Animations
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/skeleton#animations">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Skeleton animation="pulse" />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Skeleton{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Button placeholders
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/skeleton#button">
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Skeleton variant="rounded" width={100} height={36} />
                <Skeleton variant="rounded" width={100} height={36} />
                <Skeleton variant="rounded" width={100} height={36} />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Placeholders
