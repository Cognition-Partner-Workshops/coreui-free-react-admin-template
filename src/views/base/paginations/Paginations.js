import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

const Paginations = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Pagination" subheader="Basic Example" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Pagination component to navigate through pages.
            </Typography>
            <Pagination count={10} />
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Pagination" subheader="Outlined" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use variant=&quot;outlined&quot; for an outlined pagination style.
            </Typography>
            <Pagination count={10} variant="outlined" />
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Pagination" subheader="Rounded" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use shape=&quot;rounded&quot; for rounded pagination buttons.
            </Typography>
            <Pagination count={10} shape="rounded" />
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Pagination" subheader="Sizes" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Pagination comes in different sizes.
            </Typography>
            <Stack spacing={2}>
              <Pagination count={10} size="small" />
              <Pagination count={10} />
              <Pagination count={10} size="large" />
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Pagination" subheader="Colors" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Pagination with different colors.
            </Typography>
            <Stack spacing={2}>
              <Pagination count={10} color="primary" />
              <Pagination count={10} color="secondary" />
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Paginations
