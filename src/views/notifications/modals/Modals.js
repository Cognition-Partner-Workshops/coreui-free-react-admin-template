import React from 'react'
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
  const [open, setOpen] = React.useState(false)
  const [scrollOpen, setScrollOpen] = React.useState(false)
  const [sizeOpen, setSizeOpen] = React.useState(false)
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/modal/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">React Modal</Typography>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use MUI Dialog component to add dialogs to your site for lightboxes, user
              notifications, or completely custom content.
            </Typography>
            <DocsExample href="components/modal">
              <Button variant="contained" onClick={() => setOpen(true)}>
                Launch demo modal
              </Button>
              <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Modal title</DialogTitle>
                <DialogContent>
                  <DialogContentText>Modal body text goes here.</DialogContentText>
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
          <CardHeader title={<Typography variant="h6">Scrolling Modal</Typography>} />
          <CardContent>
            <DocsExample href="components/modal#scrolling-long-content">
              <Button variant="contained" onClick={() => setScrollOpen(true)}>
                Launch scrolling modal
              </Button>
              <Dialog open={scrollOpen} onClose={() => setScrollOpen(false)} scroll="paper">
                <DialogTitle>Scrolling Modal</DialogTitle>
                <DialogContent dividers>
                  <DialogContentText>
                    {'This is some placeholder content to show the scrolling behavior. '.repeat(20)}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setScrollOpen(false)}>Close</Button>
                </DialogActions>
              </Dialog>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">Modal Sizes</Typography>} />
          <CardContent>
            <DocsExample href="components/modal#optional-sizes">
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button variant="outlined" onClick={() => setSizeOpen(true)}>
                  Large modal
                </Button>
              </Box>
              <Dialog open={sizeOpen} onClose={() => setSizeOpen(false)} maxWidth="lg" fullWidth>
                <DialogTitle>Large Modal</DialogTitle>
                <DialogContent>
                  <DialogContentText>This is a large modal dialog.</DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setSizeOpen(false)}>Close</Button>
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
