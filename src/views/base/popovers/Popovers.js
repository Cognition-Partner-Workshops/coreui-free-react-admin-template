import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

import { DocsExample } from 'src/components'

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
    <Card sx={{ mb: 3 }}>
      <CardHeader title="Popovers" />
      <CardContent>
        <DocsExample href="components/popover">
          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={handleClick}>
              Click to toggle popover
            </Button>
            <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            >
              <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
            </Popover>
          </Stack>
        </DocsExample>
      </CardContent>
    </Card>
  )
}

export default Popovers
