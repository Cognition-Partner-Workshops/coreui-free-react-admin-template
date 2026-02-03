import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Stack from '@mui/material/Stack'

const Modals = () => {
  const [open, setOpen] = useState(false)
  const [scrollOpen, setScrollOpen] = useState(false)

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Modals
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Use MUI Dialog component to add dialogs to your site.
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Basic Modal
          </Typography>
          <Button variant="contained" onClick={() => setOpen(true)}>
            Launch demo modal
          </Button>
          <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>Modal title</DialogTitle>
            <DialogContent>
              <DialogContentText>
                This is a basic modal dialog. You can add any content here.
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

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Scrollable Modal
          </Typography>
          <Button variant="contained" onClick={() => setScrollOpen(true)}>
            Launch scrollable modal
          </Button>
          <Dialog open={scrollOpen} onClose={() => setScrollOpen(false)} scroll="paper">
            <DialogTitle>Scrollable Modal</DialogTitle>
            <DialogContent dividers>
              <DialogContentText>
                {[...Array(20)].map((_, i) => (
                  <Typography key={i} paragraph>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                    facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                    vestibulum at eros.
                  </Typography>
                ))}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setScrollOpen(false)}>Close</Button>
              <Button variant="contained" onClick={() => setScrollOpen(false)}>
                Save changes
              </Button>
            </DialogActions>
          </Dialog>
        </CardContent>
      </Card>
    </>
  )
}

export default Modals
