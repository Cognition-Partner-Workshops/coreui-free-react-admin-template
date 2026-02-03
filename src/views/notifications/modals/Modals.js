import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Box from '@mui/material/Box'
import { DocsComponents, DocsExample } from 'src/components'

const Modals = () => {
  const [open, setOpen] = useState(false)
  const [openLarge, setOpenLarge] = useState(false)
  const [openSmall, setOpenSmall] = useState(false)

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/modal/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Modal</strong> <small>Basic</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use MUI Dialog for modal dialogs.
            </Typography>
            <DocsExample href="components/modal">
              <Button variant="contained" onClick={() => setOpen(true)}>
                Launch demo modal
              </Button>
              <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Modal title</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Woohoo, you are reading this text in a modal!
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setOpen(false)}>Close</Button>
                  <Button variant="contained" onClick={() => setOpen(false)}>
                    Save changes
                  </Button>
                </DialogActions>
              </Dialog>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Modal</strong> <small>Sizes</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Modals have optional sizes, available via maxWidth prop.
            </Typography>
            <DocsExample href="components/modal#optional-sizes">
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button variant="contained" onClick={() => setOpenLarge(true)}>
                  Large modal
                </Button>
                <Button variant="contained" onClick={() => setOpenSmall(true)}>
                  Small modal
                </Button>
              </Box>
              <Dialog open={openLarge} onClose={() => setOpenLarge(false)} maxWidth="lg" fullWidth>
                <DialogTitle>Large modal</DialogTitle>
                <DialogContent>
                  <DialogContentText>Large modal content.</DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setOpenLarge(false)}>Close</Button>
                </DialogActions>
              </Dialog>
              <Dialog open={openSmall} onClose={() => setOpenSmall(false)} maxWidth="sm">
                <DialogTitle>Small modal</DialogTitle>
                <DialogContent>
                  <DialogContentText>Small modal content.</DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setOpenSmall(false)}>Close</Button>
                </DialogActions>
              </Dialog>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Modals
