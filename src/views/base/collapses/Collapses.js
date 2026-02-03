import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Collapse from '@mui/material/Collapse'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

const Collapses = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Collapse
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Toggle the visibility of content with the Collapse component.
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Basic Collapse
          </Typography>
          <Button variant="contained" onClick={() => setOpen(!open)} sx={{ mb: 2 }}>
            Toggle Collapse
          </Button>
          <Collapse in={open}>
            <Box sx={{ p: 2, bgcolor: 'action.hover', borderRadius: 1 }}>
              <Typography>
                This content is collapsible. Click the button above to toggle its visibility. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Box>
          </Collapse>
        </CardContent>
      </Card>
    </>
  )
}

export default Collapses
