import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Pagination from '@mui/material/Pagination'
import Box from '@mui/material/Box'
import { DocsComponents, DocsExample } from 'src/components'

const Paginations = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/pagination/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<strong>MUI Pagination</strong>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              MUI Pagination component enables the user to select a specific page from a range of
              pages.
            </Typography>
            <DocsExample href="react-pagination">
              <Pagination count={10} />
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>MUI Pagination</strong>{' '}
                <Typography component="span">With Arrows</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use showFirstButton and showLastButton props to show first/last page buttons.
            </Typography>
            <DocsExample href="react-pagination#buttons">
              <Pagination count={10} showFirstButton showLastButton />
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>MUI Pagination</strong> <Typography component="span">Sizes</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use the size prop for different pagination sizes.
            </Typography>
            <DocsExample href="react-pagination#sizes">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Pagination count={10} size="small" />
                <Pagination count={10} />
                <Pagination count={10} size="large" />
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
                <strong>MUI Pagination</strong> <Typography component="span">Colors</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use the color prop for different pagination colors.
            </Typography>
            <DocsExample href="react-pagination#colors">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Pagination count={10} color="primary" />
                <Pagination count={10} color="secondary" />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Paginations
