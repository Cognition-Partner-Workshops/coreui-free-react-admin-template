import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Button,
  Collapse,
  Box,
} from '@mui/material'
import { DocsComponents, DocsExample } from 'src/components'

const Collapses = () => {
  const [open, setOpen] = useState(false)
  const [multiOpen, setMultiOpen] = useState({ first: false, second: false })

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <DocsComponents href="components/collapse/" />
        <Card sx={{ mb: 3 }}>
          <CardHeader title={<Typography variant="h6">Collapse</Typography>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Toggle the visibility of content with a collapse transition.
            </Typography>
            <DocsExample href="components/collapse">
              <Button variant="contained" onClick={() => setOpen(!open)} sx={{ mb: 2 }}>
                Toggle Collapse
              </Button>
              <Collapse in={open}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography>
                      Some placeholder content for the collapse component. This panel is hidden by
                      default but revealed when the user activates the relevant trigger.
                    </Typography>
                  </CardContent>
                </Card>
              </Collapse>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Collapse{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Horizontal
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/collapse#horizontal">
              <Button variant="contained" onClick={() => setOpen(!open)} sx={{ mb: 2 }}>
                Toggle Width Collapse
              </Button>
              <Box sx={{ display: 'flex' }}>
                <Collapse in={open} orientation="horizontal">
                  <Card variant="outlined" sx={{ width: 300 }}>
                    <CardContent>
                      <Typography>
                        This is some placeholder content for a horizontal collapse.
                      </Typography>
                    </CardContent>
                  </Card>
                </Collapse>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Collapse{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Multiple targets
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/collapse#multiple-targets">
              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                <Button
                  variant="contained"
                  onClick={() => setMultiOpen({ ...multiOpen, first: !multiOpen.first })}
                >
                  Toggle First
                </Button>
                <Button
                  variant="contained"
                  onClick={() => setMultiOpen({ ...multiOpen, second: !multiOpen.second })}
                >
                  Toggle Second
                </Button>
                <Button
                  variant="contained"
                  onClick={() =>
                    setMultiOpen({ first: !multiOpen.first, second: !multiOpen.second })
                  }
                >
                  Toggle Both
                </Button>
              </Box>
              <Grid container spacing={2}>
                <Grid size={6}>
                  <Collapse in={multiOpen.first}>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography>
                          Some placeholder content for the first collapse component.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Collapse>
                </Grid>
                <Grid size={6}>
                  <Collapse in={multiOpen.second}>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography>
                          Some placeholder content for the second collapse component.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Collapse>
                </Grid>
              </Grid>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Collapses
