import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Stack from '@mui/material/Stack'

import { DocsExample } from 'src/components'

const Modals = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title="Modals" />
      <CardContent>
        <DocsExample href="components/modal">
          <Button variant="contained" onClick={() => setOpen(true)}>
            Launch demo modal
          </Button>
          <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>Modal title</DialogTitle>
            <DialogContent>
              <DialogContentText>
                This is a modal dialog. You can do whatever you want here.
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
  )
}

export default Modals
