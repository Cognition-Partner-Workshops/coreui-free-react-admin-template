import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Box,
  IconButton,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { DocsComponents, DocsExample } from 'src/components'

const Modals = () => {
  const [open, setOpen] = useState(false)
  const [scrollOpen, setScrollOpen] = useState(false)
  const [sizeOpen, setSizeOpen] = useState({ sm: false, lg: false, xl: false })

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <DocsComponents href="components/dialog/" />
        <Card sx={{ mb: 3 }}>
          <CardHeader title={<Typography variant="h6">Modal / Dialog</Typography>} />
          <CardContent>
            <DocsExample href="components/dialog">
              <Button variant="contained" onClick={() => setOpen(true)}>
                Launch demo modal
              </Button>
              <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>
                  Modal title
                  <IconButton
                    aria-label="close"
                    onClick={() => setOpen(false)}
                    sx={{ position: 'absolute', right: 8, top: 8 }}
                  >
                    <CloseIcon />
                  </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                  <DialogContentText>
                    Modal body text goes here. This is a simple modal example.
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

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Modal{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Scrolling content
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/dialog#scrolling-long-content">
              <Button variant="contained" onClick={() => setScrollOpen(true)}>
                Launch scrolling modal
              </Button>
              <Dialog open={scrollOpen} onClose={() => setScrollOpen(false)} scroll="paper">
                <DialogTitle>Modal with scrolling content</DialogTitle>
                <DialogContent dividers>
                  {[...Array(20)].map((_, i) => (
                    <DialogContentText key={i} sx={{ mb: 2 }}>
                      This is some placeholder content to show the scrolling behavior for modals. We
                      use repeated line breaks to demonstrate how content can exceed minimum inner
                      height, thereby showing inner scrolling.
                    </DialogContentText>
                  ))}
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setScrollOpen(false)}>Close</Button>
                  <Button variant="contained" onClick={() => setScrollOpen(false)}>
                    Save changes
                  </Button>
                </DialogActions>
              </Dialog>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Modal{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Sizes
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/dialog#optional-sizes">
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button variant="outlined" onClick={() => setSizeOpen({ ...sizeOpen, sm: true })}>
                  Small modal
                </Button>
                <Button variant="outlined" onClick={() => setSizeOpen({ ...sizeOpen, lg: true })}>
                  Large modal
                </Button>
                <Button variant="outlined" onClick={() => setSizeOpen({ ...sizeOpen, xl: true })}>
                  Extra large modal
                </Button>
              </Box>
              <Dialog
                open={sizeOpen.sm}
                onClose={() => setSizeOpen({ ...sizeOpen, sm: false })}
                maxWidth="sm"
                fullWidth
              >
                <DialogTitle>Small modal</DialogTitle>
                <DialogContent>
                  <DialogContentText>This is a small modal.</DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setSizeOpen({ ...sizeOpen, sm: false })}>Close</Button>
                </DialogActions>
              </Dialog>
              <Dialog
                open={sizeOpen.lg}
                onClose={() => setSizeOpen({ ...sizeOpen, lg: false })}
                maxWidth="lg"
                fullWidth
              >
                <DialogTitle>Large modal</DialogTitle>
                <DialogContent>
                  <DialogContentText>This is a large modal.</DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setSizeOpen({ ...sizeOpen, lg: false })}>Close</Button>
                </DialogActions>
              </Dialog>
              <Dialog
                open={sizeOpen.xl}
                onClose={() => setSizeOpen({ ...sizeOpen, xl: false })}
                maxWidth="xl"
                fullWidth
              >
                <DialogTitle>Extra large modal</DialogTitle>
                <DialogContent>
                  <DialogContentText>This is an extra large modal.</DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setSizeOpen({ ...sizeOpen, xl: false })}>Close</Button>
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
