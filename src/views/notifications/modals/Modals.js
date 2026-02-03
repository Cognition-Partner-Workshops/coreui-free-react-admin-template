import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Box from '@mui/material/Box'

const Modals = () => {
  const [open, setOpen] = React.useState(false)
  const [openLarge, setOpenLarge] = React.useState(false)
  const [openSmall, setOpenSmall] = React.useState(false)
  const [openScrollable, setOpenScrollable] = React.useState(false)

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Modals" subheader="Basic Example" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Toggle a working modal demo by clicking the button below.
            </Typography>
            <Button variant="contained" onClick={() => setOpen(true)}>
              Launch demo modal
            </Button>
            <Dialog open={open} onClose={() => setOpen(false)}>
              <DialogTitle>Modal title</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Woohoo, you&apos;re reading this text in a modal!
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpen(false)}>Close</Button>
                <Button variant="contained" onClick={() => setOpen(false)}>
                  Save changes
                </Button>
              </DialogActions>
            </Dialog>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Modals" subheader="Optional sizes" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Modals have three optional sizes, available via maxWidth prop.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              <Button variant="contained" color="primary" onClick={() => setOpenLarge(true)}>
                Large modal
              </Button>
              <Button variant="contained" color="primary" onClick={() => setOpenSmall(true)}>
                Small modal
              </Button>
            </Box>
            <Dialog open={openLarge} onClose={() => setOpenLarge(false)} maxWidth="lg" fullWidth>
              <DialogTitle>Large modal</DialogTitle>
              <DialogContent>
                <DialogContentText>This is a large modal dialog.</DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpenLarge(false)}>Close</Button>
              </DialogActions>
            </Dialog>
            <Dialog open={openSmall} onClose={() => setOpenSmall(false)} maxWidth="sm">
              <DialogTitle>Small modal</DialogTitle>
              <DialogContent>
                <DialogContentText>This is a small modal dialog.</DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpenSmall(false)}>Close</Button>
              </DialogActions>
            </Dialog>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Modals" subheader="Scrolling long content" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              When modals become too long for the user&apos;s viewport or device, they scroll
              independent of the page itself.
            </Typography>
            <Button variant="contained" onClick={() => setOpenScrollable(true)}>
              Scrolling long content
            </Button>
            <Dialog
              open={openScrollable}
              onClose={() => setOpenScrollable(false)}
              scroll="paper"
              maxWidth="md"
            >
              <DialogTitle>Modal title</DialogTitle>
              <DialogContent dividers>
                <DialogContentText>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                  facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                  vestibulum at eros.
                </DialogContentText>
                <DialogContentText sx={{ mt: 2 }}>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                  sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                </DialogContentText>
                <DialogContentText sx={{ mt: 2 }}>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                  scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
                  metus auctor fringilla.
                </DialogContentText>
                <DialogContentText sx={{ mt: 2 }}>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                  facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                  vestibulum at eros.
                </DialogContentText>
                <DialogContentText sx={{ mt: 2 }}>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                  sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                </DialogContentText>
                <DialogContentText sx={{ mt: 2 }}>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                  scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
                  metus auctor fringilla.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpenScrollable(false)}>Close</Button>
                <Button variant="contained" onClick={() => setOpenScrollable(false)}>
                  Save changes
                </Button>
              </DialogActions>
            </Dialog>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Modals
