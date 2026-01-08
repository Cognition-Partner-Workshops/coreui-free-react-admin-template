import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import { DocsComponents, DocsExample } from 'src/components'

const Tooltips = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/tooltip/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                React Tooltip{' '}
                <Typography component="span" variant="body2">
                  Basic example
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Hover over the links below to see tooltips:
            </Typography>
            <DocsExample href="components/tooltip">
              <Typography variant="body2" color="text.secondary">
                Tight pants next level keffiyeh
                <Tooltip title="Tooltip text">
                  <Link href="#" sx={{ mx: 0.5 }}>
                    {' '}
                    you probably{' '}
                  </Link>
                </Tooltip>
                haven&apos;t heard of them. Photo booth beard raw denim letterpress vegan messenger
                bag stumptown. Farm-to-table seitan, mcsweeney&apos;s fixie sustainable quinoa 8-bit
                american apparel
                <Tooltip title="Tooltip text">
                  <Link href="#" sx={{ mx: 0.5 }}>
                    {' '}
                    have a{' '}
                  </Link>
                </Tooltip>
                terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo
                thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney&apos;s cleanse
                vegan chambray. A really ironic artisan
                <Tooltip title="Tooltip text">
                  <Link href="#" sx={{ mx: 0.5 }}>
                    {' '}
                    whatever keytar{' '}
                  </Link>
                </Tooltip>
                scenester farm-to-table banksy Austin
                <Tooltip title="Tooltip text">
                  <Link href="#" sx={{ mx: 0.5 }}>
                    {' '}
                    twitter handle{' '}
                  </Link>
                </Tooltip>
                freegan cred raw denim single-origin coffee viral.
              </Typography>
            </DocsExample>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, mt: 2 }}>
              Hover over the buttons below to see the four tooltips directions: top, right, bottom,
              and left.
            </Typography>
            <DocsExample href="components/tooltip">
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Tooltip
                  title="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                  placement="top"
                >
                  <Button variant="outlined" color="secondary">
                    Tooltip on top
                  </Button>
                </Tooltip>
                <Tooltip
                  title="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                  placement="right"
                >
                  <Button variant="outlined" color="secondary">
                    Tooltip on right
                  </Button>
                </Tooltip>
                <Tooltip
                  title="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                  placement="bottom"
                >
                  <Button variant="outlined" color="secondary">
                    Tooltip on bottom
                  </Button>
                </Tooltip>
                <Tooltip
                  title="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                  placement="left"
                >
                  <Button variant="outlined" color="secondary">
                    Tooltip on left
                  </Button>
                </Tooltip>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Tooltips
