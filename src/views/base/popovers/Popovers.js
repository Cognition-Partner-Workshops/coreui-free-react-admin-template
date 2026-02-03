import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Popover from '@mui/material/Popover'
import Box from '@mui/material/Box'

const Popovers = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [anchorElTop, setAnchorElTop] = React.useState(null)
  const [anchorElBottom, setAnchorElBottom] = React.useState(null)
  const [anchorElLeft, setAnchorElLeft] = React.useState(null)
  const [anchorElRight, setAnchorElRight] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Popovers" subheader="Basic Example" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Popovers are used to provide additional information or actions.
            </Typography>
            <Button variant="contained" color="error" onClick={handleClick}>
              Click to toggle popover
            </Button>
            <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <Box sx={{ p: 2, maxWidth: 300 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Popover title
                </Typography>
                <Typography variant="body2">
                  And here&apos;s some amazing content. It&apos;s very engaging. Right?
                </Typography>
              </Box>
            </Popover>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Popovers" subheader="Four directions" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Four positioning options are available: top, right, bottom, and left.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              <Button variant="contained" onClick={(e) => setAnchorElTop(e.currentTarget)}>
                Popover on top
              </Button>
              <Popover
                open={Boolean(anchorElTop)}
                anchorEl={anchorElTop}
                onClose={() => setAnchorElTop(null)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              >
                <Box sx={{ p: 2 }}>
                  <Typography variant="body2">Popover on top</Typography>
                </Box>
              </Popover>

              <Button variant="contained" onClick={(e) => setAnchorElRight(e.currentTarget)}>
                Popover on right
              </Button>
              <Popover
                open={Boolean(anchorElRight)}
                anchorEl={anchorElRight}
                onClose={() => setAnchorElRight(null)}
                anchorOrigin={{ vertical: 'center', horizontal: 'right' }}
                transformOrigin={{ vertical: 'center', horizontal: 'left' }}
              >
                <Box sx={{ p: 2 }}>
                  <Typography variant="body2">Popover on right</Typography>
                </Box>
              </Popover>

              <Button variant="contained" onClick={(e) => setAnchorElBottom(e.currentTarget)}>
                Popover on bottom
              </Button>
              <Popover
                open={Boolean(anchorElBottom)}
                anchorEl={anchorElBottom}
                onClose={() => setAnchorElBottom(null)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}
              >
                <Box sx={{ p: 2 }}>
                  <Typography variant="body2">Popover on bottom</Typography>
                </Box>
              </Popover>

              <Button variant="contained" onClick={(e) => setAnchorElLeft(e.currentTarget)}>
                Popover on left
              </Button>
              <Popover
                open={Boolean(anchorElLeft)}
                anchorEl={anchorElLeft}
                onClose={() => setAnchorElLeft(null)}
                anchorOrigin={{ vertical: 'center', horizontal: 'left' }}
                transformOrigin={{ vertical: 'center', horizontal: 'right' }}
              >
                <Box sx={{ p: 2 }}>
                  <Typography variant="body2">Popover on left</Typography>
                </Box>
              </Popover>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Popovers
