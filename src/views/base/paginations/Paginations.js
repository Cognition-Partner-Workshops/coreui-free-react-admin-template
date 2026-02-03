import React from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

const Paginations = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Pagination
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Enable pagination for your tables and lists.
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Basic Pagination
          </Typography>
          <Stack spacing={2}>
            <Pagination count={10} />
            <Pagination count={10} color="primary" />
            <Pagination count={10} color="secondary" />
            <Pagination count={10} disabled />
          </Stack>
        </CardContent>
      </Card>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Pagination Sizes
          </Typography>
          <Stack spacing={2}>
            <Pagination count={10} size="small" />
            <Pagination count={10} />
            <Pagination count={10} size="large" />
          </Stack>
        </CardContent>
      </Card>
    </>
  )
}

export default Paginations
