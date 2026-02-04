import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Button,
  Popover,
  Box,
} from '@mui/material'
import { DocsComponents, DocsExample } from 'src/components'

const Popovers = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [placement, setPlacement] = React.useState('top')

  const handleClick = (event, newPlacement) => {
    setAnchorEl(event.currentTarget)
    setPlacement(newPlacement)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <DocsComponents href="components/popover/" />
        <Card sx={{ mb: 3 }}>
          <CardHeader title={<Typography variant="h6">Popover</Typography>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Popovers can be used to provide additional information or actions.
            </Typography>
            <DocsExample href="components/popover">
              <Button variant="contained" onClick={(e) => handleClick(e, 'bottom')}>
                Click to toggle popover
              </Button>
              <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: placement === 'top' ? 'top' : 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: placement === 'top' ? 'bottom' : 'top',
                  horizontal: 'center',
                }}
              >
                <Box sx={{ p: 2, maxWidth: 300 }}>
                  <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    Popover title
                  </Typography>
                  <Typography variant="body2">
                    And here&apos;s some amazing content. It&apos;s very engaging. Right?
                  </Typography>
                </Box>
              </Popover>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Popover{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Directions
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/popover#directions">
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
                <Button variant="outlined" onClick={(e) => handleClick(e, 'top')}>
                  Popover on top
                </Button>
                <Button variant="outlined" onClick={(e) => handleClick(e, 'bottom')}>
                  Popover on bottom
                </Button>
                <Button variant="outlined" onClick={(e) => handleClick(e, 'left')}>
                  Popover on left
                </Button>
                <Button variant="outlined" onClick={(e) => handleClick(e, 'right')}>
                  Popover on right
                </Button>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Popovers
