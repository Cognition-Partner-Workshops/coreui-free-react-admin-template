import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Collapse from '@mui/material/Collapse'
import Box from '@mui/material/Box'

const Collapses = () => {
  const [open, setOpen] = React.useState(false)
  const [openMultiA, setOpenMultiA] = React.useState(false)
  const [openMultiB, setOpenMultiB] = React.useState(false)

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Collapse" subheader="Basic Example" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Toggle the visibility of content with a collapse transition.
            </Typography>
            <Button variant="contained" onClick={() => setOpen(!open)} sx={{ mb: 2 }}>
              Toggle Collapse
            </Button>
            <Collapse in={open}>
              <Box sx={{ p: 2, border: 1, borderColor: 'divider', borderRadius: 1 }}>
                <Typography>
                  Some placeholder content for the collapse component. This panel is hidden by
                  default but revealed when the user activates the relevant trigger.
                </Typography>
              </Box>
            </Collapse>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Collapse" subheader="Multiple Targets" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              A button can show and hide multiple elements by referencing them.
            </Typography>
            <Box sx={{ mb: 2, display: 'flex', gap: 1 }}>
              <Button variant="contained" onClick={() => setOpenMultiA(!openMultiA)}>
                Toggle First
              </Button>
              <Button variant="contained" onClick={() => setOpenMultiB(!openMultiB)}>
                Toggle Second
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  setOpenMultiA(!openMultiA)
                  setOpenMultiB(!openMultiB)
                }}
              >
                Toggle Both
              </Button>
            </Box>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Collapse in={openMultiA}>
                  <Box sx={{ p: 2, border: 1, borderColor: 'divider', borderRadius: 1 }}>
                    <Typography>
                      Some placeholder content for the first collapse component.
                    </Typography>
                  </Box>
                </Collapse>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Collapse in={openMultiB}>
                  <Box sx={{ p: 2, border: 1, borderColor: 'divider', borderRadius: 1 }}>
                    <Typography>
                      Some placeholder content for the second collapse component.
                    </Typography>
                  </Box>
                </Collapse>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Collapses
