import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const Dropdowns = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Dropdowns
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Toggle contextual overlays for displaying lists of links and more.
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Basic Dropdown
          </Typography>
          <Stack direction="row" spacing={2}>
            <div>
              <Button variant="contained" onClick={handleClick} endIcon={<KeyboardArrowDownIcon />}>
                Dropdown
              </Button>
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Action</MenuItem>
                <MenuItem onClick={handleClose}>Another action</MenuItem>
                <MenuItem onClick={handleClose}>Something else here</MenuItem>
              </Menu>
            </div>
          </Stack>
        </CardContent>
      </Card>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Dropdown Colors
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            {['primary', 'secondary', 'success', 'error', 'warning', 'info'].map((color) => (
              <Button
                key={color}
                variant="contained"
                color={color}
                endIcon={<KeyboardArrowDownIcon />}
              >
                {color}
              </Button>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </>
  )
}

export default Dropdowns
