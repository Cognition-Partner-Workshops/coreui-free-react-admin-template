import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'

import { DocsExample } from 'src/components'

const Dropdowns = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title="Dropdowns" />
      <CardContent>
        <DocsExample href="components/dropdown">
          <Stack direction="row" spacing={2}>
            <div>
              <Button variant="contained" onClick={handleClick}>
                Dropdown button
              </Button>
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Action</MenuItem>
                <MenuItem onClick={handleClose}>Another action</MenuItem>
                <MenuItem onClick={handleClose}>Something else here</MenuItem>
              </Menu>
            </div>
          </Stack>
        </DocsExample>
      </CardContent>
    </Card>
  )
}

export default Dropdowns
