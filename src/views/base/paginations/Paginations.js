import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

import { DocsExample } from 'src/components'

const Paginations = () => {
  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title="Pagination" />
      <CardContent>
        <DocsExample href="components/pagination">
          <Stack spacing={2}>
            <Pagination count={10} />
            <Pagination count={10} color="primary" />
            <Pagination count={10} color="secondary" />
            <Pagination count={10} disabled />
          </Stack>
        </DocsExample>
      </CardContent>
    </Card>
  )
}

export default Paginations
