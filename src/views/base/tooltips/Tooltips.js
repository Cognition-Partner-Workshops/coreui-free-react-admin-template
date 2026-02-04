import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Tooltip,
  Button,
  Box,
} from '@mui/material'
import { DocsComponents, DocsExample } from 'src/components'

const Tooltips = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <DocsComponents href="components/tooltip/" />
        <Card sx={{ mb: 3 }}>
          <CardHeader title={<Typography variant="h6">Tooltips</Typography>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Tooltips display informative text when users hover over, focus on, or tap an element.
            </Typography>
            <DocsExample href="components/tooltip">
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Tooltip title="Tooltip on top" placement="top">
                  <Button variant="outlined">Tooltip on top</Button>
                </Tooltip>
                <Tooltip title="Tooltip on right" placement="right">
                  <Button variant="outlined">Tooltip on right</Button>
                </Tooltip>
                <Tooltip title="Tooltip on bottom" placement="bottom">
                  <Button variant="outlined">Tooltip on bottom</Button>
                </Tooltip>
                <Tooltip title="Tooltip on left" placement="left">
                  <Button variant="outlined">Tooltip on left</Button>
                </Tooltip>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Tooltips{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Arrow
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/tooltip#arrow">
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Tooltip title="Add" arrow>
                  <Button variant="contained">Arrow tooltip</Button>
                </Tooltip>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Tooltips{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Custom HTML
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/tooltip#custom-html">
              <Tooltip
                title={
                  <React.Fragment>
                    <Typography color="inherit" variant="subtitle2">
                      Tooltip with HTML
                    </Typography>
                    <em>And here&apos;s</em> <b>some</b> <u>amazing content</u>.
                  </React.Fragment>
                }
              >
                <Button variant="outlined">HTML Tooltip</Button>
              </Tooltip>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Tooltips
