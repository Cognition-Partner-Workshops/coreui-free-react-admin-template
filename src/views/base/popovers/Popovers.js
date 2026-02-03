import React from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Popover from '@mui/material/Popover'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

const Popovers = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Popovers
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Display additional information in a popover overlay.
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Basic Popover
          </Typography>
          <Button variant="contained" onClick={handleClick}>
            Open Popover
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
            <Box sx={{ p: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                Popover Title
              </Typography>
              <Typography variant="body2">
                And here is some amazing content. It is very engaging. Right?
              </Typography>
            </Box>
          </Popover>
        </CardContent>
      </Card>
    </>
  )
}

export default Popovers
