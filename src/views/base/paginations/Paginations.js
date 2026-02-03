import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
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
          <CardHeader title={<strong>React Pagination</strong>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              We use a large block of connected links for our pagination, making links hard to miss
              and easily scalable—all while providing large hit areas. Pagination is built with list
              HTML elements so screen readers can announce the number of available links.
            </Typography>
            <DocsExample href="components/pagination">
              <Pagination count={5} showFirstButton showLastButton />
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Pagination</strong> <small>Working with icons</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Looking to use an icon or symbol in place of text for some pagination links? Be sure
              to provide proper screen reader support with aria attributes.
            </Typography>
            <DocsExample href="components/pagination#working-with-icons">
              <Pagination count={5} />
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Pagination</strong> <small>Disabled and active states</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Pagination links are customizable for different circumstances. Use disabled for links
              that appear un-clickable and active to indicate the current page.
            </Typography>
            <DocsExample href="components/pagination#disabled-and-active-states">
              <Pagination count={5} defaultPage={1} />
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Pagination</strong> <small>Sizing</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Fancy larger or smaller pagination? Add size=&quot;large&quot; or
              size=&quot;small&quot; for additional sizes.
            </Typography>
            <DocsExample href="components/pagination#sizing">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Pagination count={5} size="large" />
                <Pagination count={5} size="small" />
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
                <strong>React Pagination</strong> <small>Alignment</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Change the alignment of pagination components with flexbox utilities.
            </Typography>
            <DocsExample href="components/pagination#aligment">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Pagination count={5} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Pagination count={5} />
                </Box>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Paginations
