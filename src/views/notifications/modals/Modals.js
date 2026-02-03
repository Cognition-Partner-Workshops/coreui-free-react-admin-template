import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
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
          <CardHeader title={<strong>MUI Dialog (Modal)</strong>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Dialogs inform users about a task and can contain critical information.
            </Typography>
            <DocsExample href="react-dialog">
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
                <strong>MUI Dialog</strong> <Typography component="span">Sizes</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use the maxWidth prop to change the dialog size.
            </Typography>
            <DocsExample href="react-dialog#optional-sizes">
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button variant="outlined" onClick={() => setOpenSmall(true)}>
                  Small modal
                </Button>
                <Button variant="outlined" onClick={() => setOpenLarge(true)}>
                  Large modal
                </Button>
                <Dialog
                  open={openSmall}
                  onClose={() => setOpenSmall(false)}
                  maxWidth="xs"
                  fullWidth
                >
                  <DialogTitle>Small Modal</DialogTitle>
                  <DialogContent>
                    <DialogContentText>This is a small modal dialog.</DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => setOpenSmall(false)}>Close</Button>
                  </DialogActions>
                </Dialog>
                <Dialog
                  open={openLarge}
                  onClose={() => setOpenLarge(false)}
                  maxWidth="lg"
                  fullWidth
                >
                  <DialogTitle>Large Modal</DialogTitle>
                  <DialogContent>
                    <DialogContentText>This is a large modal dialog.</DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => setOpenLarge(false)}>Close</Button>
                  </DialogActions>
                </Dialog>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Modals
