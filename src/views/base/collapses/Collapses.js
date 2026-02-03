import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Collapse from '@mui/material/Collapse'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { DocsExample } from 'src/components'

const Collapses = () => {
  const [open, setOpen] = useState(false)

  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title="Collapse" />
      <CardContent>
        <DocsExample href="components/collapse">
          <Button variant="contained" onClick={() => setOpen(!open)} sx={{ mb: 2 }}>
            Toggle Collapse
          </Button>
          <Collapse in={open}>
            <Box sx={{ p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
              <Typography>
                This is some placeholder content for a horizontal collapse. It&apos;s hidden by
                default and shown when triggered.
              </Typography>
            </Box>
          </Collapse>
        </DocsExample>
      </CardContent>
    </Card>
  )
}

export default Collapses
